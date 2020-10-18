import React from 'react';

export type HeaderTypes = {
	text: String;
};

export const Header: React.FC<HeaderTypes> = ({ text }) => {
	return (
		<>
			<header className='Header'>{text}</header>
		</>
	);
};