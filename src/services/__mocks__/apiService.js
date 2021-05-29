const apiService = {}; 

apiService.getImages = () => {
	return Promise.resolve([{
		    "description": "test",
		    "likes": '1',
		    "url": "test"
		},
		{
		    "description": "test2",
		    "likes": '2',
		    "url": "test2"
		},
		{
		    "description": "test3",
		    "likes": '3',
		    "url": "test3"
		},
		{
		    "description": "test4",
		    "likes": '4',
		    "url": "test4"
		},
		{
		    "description": "test5",
		    "likes": '5',
		    "url": "test5"
		},
		{
		    "description": "test6",
		    "likes": '6',
		    "url": "test6"
		},
	])
}
export default apiService