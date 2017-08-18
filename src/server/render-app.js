import { STATIC_PATH, APP_CONTAINER_CLASS, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (title) => 
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>${title}</title>
	<link rel="stylesheet" href="${STATIC_PATH}/css/styles.css">
</head>
<body>
	<div>
		<h1>${title}</h1>
		<div class="${APP_CONTAINER_CLASS}"></div>
		<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
		<form action="/images" method="post" enctype="multipart/form-data">
			<input type="file" name="image">
			<input type="submit" value="Upload">
		</form>
	</div>
</body>
</html>`

export default renderApp
