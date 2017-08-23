import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import app from './app'

app.listen(WEB_PORT, () => 
	console.log(`Server running on ${WEB_PORT} ${isProd ? 'production' : 'development'}. Run dev:wds in another console.`))
