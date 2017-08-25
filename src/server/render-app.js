import { STATIC_PATH, APP_CONTAINER_CLASS, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (title) => 
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, maximum-scale=1, user-scalable=no" />
	<title>${title}</title>
	<link rel="stylesheet" href="${STATIC_PATH}/css/styles.css">
</head>
<body>
	<div>
		<div id="${APP_CONTAINER_CLASS}"></div>
		<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
	</div>
</body>
</html>`

export default renderApp
