import React from 'react';
import './Icon.scss';

export type IconTypes = {
	icon: string;
};

export const Icon: React.FC<IconTypes> = ({ icon }) => {
	return (
		<>
			<i></i>
		</>
	);
};