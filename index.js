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
	s3.putObject({ Bucket: 'share-my-anything', Key: filename, Body: buffer}, (resp) => {
		console.log(arguments, 'ok')
		// return next(res.redirect('/'))
	})
}

app.post('/images', uploader.single('image'), (req, res) => {
	const file = req.file
	const meta = req.body

	console.log('file', file, meta)

	const imageFromFile = fs.readFile(`./files/${file.originalname}`, (err, data) => {
		if (err) {
			console.log('Error', err)
		} else {
			uploadToS3(file.originalname, data)
		}
	})

})

app.use(express.static('public'))

app.listen(3000, () => console.log('Listening.'))
