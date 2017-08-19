import multer from 'multer'
import s3 from '../../config/setup-aws'

const storage = multer.diskStorage({
	destination: './files',
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
})

const uploader = multer({ storage: storage }).single('image')

const uploadToS3 = (filename, buffer) => {
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

export { uploader, uploadToS3 }
