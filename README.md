# image grid 

## installation 
type 'npm install' in terminal

## run the project  
type 'npm run start' 

## assumptions 

### the project 
I used css modules to style the app
variables.scss in the root folder is used for generic css values to maintain unified design language 

### product
* the images need to be a responsive square, I skipped the responsive fonts for this excersize
* the layouts might  be extended to more than just 2 options 

### the state 
in a real case I would consider to add a global state manager, depends on how the product should be extended, in this excersize I added a state on the highest component - the App 

### the API request
I assume that the request is relatively small so I downloaded all the images and added to the state, in case we have large amounts of images, the correct solution would be to create a fetch request each time with 5 random items from the server, and not to download the entire image repository to the state, since it can cause memory issues at scale 

### tests 
I would add tests for each components, including snapshots, tests I write usually include the verify the props and state changes a component can have, also test the services and helpers for edge cases, example: a case where the api returns less than batch size images should be tested..
I would also test the app behaviour in no network and slow network cases

