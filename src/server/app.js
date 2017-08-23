import express from 'express'

import { STATIC_PATH } from '../shared/config'
import routing from './routing'

const app = express()

routing(app)

// declarative files
app.use(STATIC_PATH, express.static('public')) 

// generated files
app.use(STATIC_PATH, express.static('dist'))

export default app
