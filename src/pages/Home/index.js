import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import axios from '../../services/axios';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get('/products');
    console.log('response => ', response);
  }

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'TESTE',
    });
  }

  return (
    <>
      <Title>HOME</Title>
      <Button onClick={handleClick}> DISPATCH TESTE</Button>
    </>
  );
}