import React from 'react';
import './Input.scss';

export type InputTypes = {
	type: string;
};

export const Input: React.FC<InputTypes> = ({ type }) => {
	return (
		<>
			<input type={type} className='re-c-input' />
		</>
	);
};