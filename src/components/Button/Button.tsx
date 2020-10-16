import React from 'react';
import './Button.sass';

type ButtonTypes = {
	text: String;
};

const Button: React.FC<ButtonTypes> = ({ text }) => {
	return (
		<>
			<button className='button'>{text}</button>
		</>
	);
};

export default Button;
