import React from 'react';
import { Button } from './atoms';
import { Link } from './molecules';

export const App = () => {
	return (
		<>
			<Link text="I'm a button!" rightIcon='dot'></Link>
			<Button label='Button'></Button>
		</>
	);
};