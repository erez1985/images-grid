export const pickRandom = (collection, size) => {
	if(!collection || !collection.length) {
		return [];
	}
	if(size >= collection) {
		return collection; 
	}

    const taken = [];
	let result = [];
    let i = 0;

    while (i < size) {
        const index = Math.floor(Math.random() * collection.length);
        if(!taken[index]) {
        	result.push(collection[index]);
        	taken[index] = true;
        	i++;
        } 
    }
    return result;

}