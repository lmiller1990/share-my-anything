import { STATIC_PATH } from '../shared/config'

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
		<form action="/images" method="post" enctype="multipart/form-data">
			<input type="file" name="image">
			<input type="submit" value="Upload">
		</form>
	</div>
</body>
</html>`

export default renderApp
