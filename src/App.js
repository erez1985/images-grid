import React, { useState, useEffect, useCallback } from 'react';
import apiService from './services/apiService';
import styles from './App.module.scss';
import cx from 'classnames';
import { ImageContainer, TopBar, Button } from 'components';
import { IMAGES_BATCH, LAYOUT } from 'consts';
import { pickRandom } from './helpers';

const App = () => {
  	const [images, setImages] = useState([]);
  	const [error, setError] = useState(null);
  	const [imagesBatch, setImagesBatch] = useState([]);
  	const [layout, setLayout] = useState(LAYOUT.ROW);

  	const refreshImagesBatch = useCallback(() => {
  		const randomBatch = pickRandom(images, IMAGES_BATCH);
    	setImagesBatch(randomBatch);
  	}, [images]);


  	useEffect(() => {
    	(async() => {
    		try {
      			const response = await apiService.getImages();
        		setImages(() => response);
    		} catch(err) {
      			setError(err.toString());
    		}
    	})();
  	}, []);

  	useEffect(() => {
  		refreshImagesBatch();
  	},[images, refreshImagesBatch])

  	if(error) {
    	return <div className={styles.error}>{error}</div>
  	}

  	return (
    	<div className={styles.main}>
    		<TopBar 
    			onLayoutChange={(layout) => setLayout(layout)} 
    			layout={layout}
    		/>
          	<div className={cx(styles.imagesContainer, {[styles.columnLayout]: layout === LAYOUT.COLUMN})}>
       		{ 
       			imagesBatch.map(image => 
       				<ImageContainer 
       					key={image.url} 
              			src={image.url} 
              			description={image.description}
              			likes={image.likes}
            		/>
         	)}
			</div> 
			<div className={styles.bottomBar}>
				<Button  onClick={() => refreshImagesBatch()}>
	      	  		Refresh
	      		</Button>
      		</div>
		</div>
	);
}

export default App;
