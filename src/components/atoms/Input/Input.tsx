import React from 'react';
import './Input.sass';

type InputTypes = {
	type: string;
};

const Input: React.FC<InputTypes> = ({ type }) => {
	return (
		<>
			<input type={type} className='re-c-input' />
		</>
	);
};

export default Input;
