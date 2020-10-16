import React from 'react';
import { Button, Input } from './atoms';

const App = () => {
  return (
    <>
      <Input type="email"></Input>
      <Input type="password"></Input>
      <Button text="I'm a button!"></Button>
    </>
  );
}

export default App;
