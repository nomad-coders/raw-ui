import React from 'react';
import { Text } from '../../atoms';
import { Icon } from '../../atoms';

export type LinkTypes = {
	text: string;
	leftIcon?: string;
	rightIcon?: string;
};

export const Link: React.FC<LinkTypes> = ({ text, leftIcon, rightIcon }) => {
	return (
		<>
			{leftIcon && <Icon icon='dot'></Icon>}
			<Text text={text} color='dark'></Text>
			{rightIcon && <Icon icon='dot'></Icon>}
		</>
	);
};