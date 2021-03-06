import mongoose from 'mongoose'
import { dburl } from './config/db'

import { WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import app from './app'

mongoose.Promise = global.Promise;

mongoose.connect(dburl, { useMongoClient: true })

app.listen(WEB_PORT, () => 
	console.log(`Server running on ${WEB_PORT} ${isProd ? 'production' : 'development'}. Run dev:wds in another console.`))
