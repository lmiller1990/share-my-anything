import express from 'express'
import multer from 'multer'
import fs from 'fs'
import s3 from '../config/setup-aws'

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()

// declarative files
app.use(STATIC_PATH, express.static('public')) 
// generated files
app.use(STATIC_PATH, express.static('dist'))

const storage = multer.diskStorage({
	destination: './files',
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const uploader = multer({ storage: storage })

app.get('/', (req, res) => {
	res.send(renderApp(APP_NAME))
})

function uploadToS3(filename, buffer) {
	return new Promise((resolve, reject) => {
		s3.putObject({ Bucket: 'share-my-anything', Key: filename, Body: buffer}, (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

app.post('/images', uploader.single('image'), (req, res, next) => {
	const file = req.file

	const imageFromFile = fs.readFile(`./files/${file.originalname}`, (err, data) => {
		if (err) {
			next(err)
		} else {
			uploadToS3(file.originalname, data)
			.then(() => next(res.redirect('/')))
		}
	})
})


app.listen(WEB_PORT, () => console.log(`Server running on ${WEB_PORT} ${isProd ? 'production' : 'development'} \nRun dev:wds is another console.`))
