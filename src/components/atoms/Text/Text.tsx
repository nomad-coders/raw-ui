import React from 'react';
import './Text.scss';


export type TextTypes = {
	text: string;
	color?: string;
};

export const Text: React.FC<TextTypes> = ({ text, color }) => {
	const classNames = color ? `re-c-text re-c-text--${color}` : 're-c-text';

	return (
		<>
			<p className={classNames}>{text}</p>
		</>
	);
};