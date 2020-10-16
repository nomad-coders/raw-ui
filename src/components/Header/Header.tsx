import React from 'react';

type HeaderTypes = {
	text: String;
};

const Header: React.FC<HeaderTypes> = ({ text }) => {
	return (
		<>
			<header className='Header'>{text}</header>
		</>
	);
};

export default Header;
