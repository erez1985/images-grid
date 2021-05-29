const baseUrl = 'https://api.jonathanczyzyk.com/api/v1/images/small'
const headers = { 'x-api-key': 'api-key-2ce4afc2-941e-4af9-8e09-bc50a8f4aa4d' }

const apiService = {}; 

apiService.getImages = async () => {
	const response = await fetch(baseUrl, { headers })
	return response.json();
}

export default apiService; 
