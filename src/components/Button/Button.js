import React from 'react'; 
import { func, string, bool } from 'prop-types';
import styles from './Button.module.scss';
import cx from 'classnames';

const types =  {
	default: 'default',
	icon: 'icon'
}

const Button = ({onClick, children, type, active, className}) => {
	return <button 
		onClick={onClick} 
		type={type}
		className={cx(className, styles.main, styles[type], {[styles.active]: active})}
	>
		{children}
	</button>
}

Button.types = types;

Button.propTypes = {
	onClick: func,
	type: string,
	active: bool,
	className: string
}

Button.defaultProps = {
	type: types.default 
}

export default Button;