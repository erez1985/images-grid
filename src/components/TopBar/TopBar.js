import React from 'react';
import { Button, Icon } from 'components';
import styles from './TopBar.module.scss';
import { oneOf, func } from 'prop-types';
import { LAYOUT } from 'consts';

const TopBar = ({ layout, onLayoutChange, onRefresh }) => {
	return <div className={styles.main}>
      	<Button
      		type={Button.types.icon} 
        	active={layout === LAYOUT.COLUMN}
        	onClick={() => onLayoutChange(LAYOUT.COLUMN)}
      	>
        	<Icon name={Icon.names.RowsLayout} />
      	</Button>
      
      	<Button
        	active={layout === LAYOUT.ROW}
        	type={Button.types.icon}
        	onClick={() => onLayoutChange(LAYOUT.ROW)}
      	>
        	<Icon name={Icon.names.ColumnsLayout} />
      	</Button>



    </div>	
}

TopBar.propTypes = {
	layout: oneOf(Object.values(LAYOUT)),
	onLayoutChange: func,
	onRefresh: func
}

export default TopBar;
