export const createImageEndpointRoute = () => `/images/create`
export const getCategoriesEndpointRoute = (count = null) => 
	`/categories${count ? '?count=' + count : ''}`

export const getImagesEndpointRoute = (category = null) => 
	`/images/${category !== null ? category : ':category'}`

