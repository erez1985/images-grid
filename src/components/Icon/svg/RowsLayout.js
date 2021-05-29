import React from 'react';
import { string } from 'prop-types';

const RowsLayout = ({ width, height, fill}) => {
	return <svg 
		fill={fill}
		viewBox="0 0 24 24"
		height={height}  
		width={width}>
			<path d="m23 0h-22c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/><path d="m23 9h-22c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/><path d="m23 18h-22c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
	</svg>
}



RowsLayout.propType = {
	width: string, 
	height: string, 
	fill: string
}


export default RowsLayout; 