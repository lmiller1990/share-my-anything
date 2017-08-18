import AWS from 'aws-sdk'

AWS.config.loadFromPath('./config/config.json')

const s3 = new AWS.S3({ 
	apiVersion: '2006-03-01'  
})

export default s3 
