import React from 'react';
import { string } from 'prop-types';
import * as svgList from './svg';

const names = {};

Object.keys(svgList).forEach(svgName => {
	names[svgName] = svgName;
});

const Icon = ({name, width, height, color}) => {
	const SvgIcon = svgList[name];

	return SvgIcon ? <SvgIcon width={width} height={height} fill={color} /> : null;
}

Icon.propTypes = {
	width: string, 
	height: string, 
	name: string,
	color: string
}

Icon.defaultProps = {
	width: '14px',
	height: '14px',
	color: 'white'
}

Icon.names = names;

export default Icon;
