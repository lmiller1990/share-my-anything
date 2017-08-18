const AWS = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const fs = require('fs')

AWS.config.loadFromPath('./config.json')

const app = express()
const s3 = new AWS.S3({ apiVersion: '2006-03-01'  })

const storage = multer.diskStorage({
	destination: './files',
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const uploader = multer({ storage: storage })

app.set("view engine", "ejs")

app.get('/', (req, res) => {
	res.render('index')
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
			.then(() => next(res.render('index')))
		}
	})
})

app.use(express.static('public'))

app.listen(3000, () => console.log('Listening.'))
