import React, { useState } from 'react'; 
import { string } from 'prop-types';
import styles from './ImageContainer.module.scss';
import { Icon } from 'components';
import cx from 'classnames';

const ImageContainer =({ src, likes, description }) => {
	const [hovered, setHovered] = useState(false);

	return <div 
		className={styles.main}
		onMouseEnter={() => setHovered(true)}
		onMouseLeave={() => setHovered(false)}
		>
		
		{src ? <img 
			alt={description}
			src={src} 
			width={'auto'} 
			height={'auto'}
			className={styles.image}
		/> : <span>Loading...</span> }

		<div className={cx(styles.data, {[styles.hovered]: hovered})}>
			<span className={styles.description}>
				{description}
			</span>

			<div className={cx(styles.likesContainer) }>
				<Icon name={Icon.names.Heart} className={styles.likesIcon} />
				<span className={styles.likes}>
					{likes}
				</span>
			</div>
		</div> 
		

	</div>
}

ImageContainer.propTypes = {
	src: string,
	likes: string,
	description: string
}

export default ImageContainer; 
