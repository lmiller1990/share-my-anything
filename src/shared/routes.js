export const createImageEndpointRoute = () => `/images/create`
export const getImagesEndpointRoute = (category = null) => 
	`/images/${category !== null ? category : ':category'}`
