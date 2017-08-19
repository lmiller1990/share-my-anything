import express from 'express'

import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import routing from './routing'

const app = express()

routing(app)

// declarative files
app.use(STATIC_PATH, express.static('public')) 

// generated files
app.use(STATIC_PATH, express.static('dist'))


app.listen(WEB_PORT, () => 
	console.log(`Server running on ${WEB_PORT} ${isProd ? 'production' : 'development'}. Run dev:wds in another console.`))
