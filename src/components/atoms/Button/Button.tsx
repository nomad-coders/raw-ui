import React from 'react';
import './Button.sass';

type ButtonTypes = {
	text: string;
};

const Button: React.FC<ButtonTypes> = ({ text }) => {
	return (
		<>
			<button className='re-c-button'>{text}</button>
		</>
	);
};

export default Button;
