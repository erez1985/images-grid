import React from 'react';
import { string } from 'prop-types';

const ColumnsLayout = ({ width, height, fill}) => {
	return <svg 
	enableBackground="new 0 0 24 24" 
	height={height} 
	viewBox="0 0 24 24" 
	fill={fill}
	width={width}>
		<path d="m1 0c-.552 0-1 .448-1 1v22c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-22c0-.552-.448-1-1-1z"/><path d="m23 0h-5c-.552 0-1 .448-1 1v22c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-22c0-.552-.448-1-1-1z"/><path d="m8.5 1v22c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-22c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1z"/>
	</svg>
}

ColumnsLayout.propType = {
	width: string, 
	height: string, 
	fill: string
}


export default ColumnsLayout; 