import React from 'react';
import './App.css'
import { Container, Row, Col, Spinner, Button, Image, Card, CardText } from 'react-bootstrap'
import data from './data.json';
import axios from 'axios';
import { toast } from 'react-toastify';
import CardComp from './components/CardComp';

function App() {

  const [isLoading, setIsLoading] = React.useState(false);
  //const [pokemons, setPokemons] = React.useState([]);

  const pokemons = data;
  const loadData = async () => {
    setIsLoading(true);
    const response = data
    setTimeout(() => setIsLoading(false), 2000);
    console.log(response);
  }

  // const loadData = async () => {
  //   setIsLoading(true);
  //   const response = await axios('https://api.pokemontcg.io/v2/cards');
  //   if (response.status === 200) {
  //     if (response.data.data.length > 0) {
  //       setIsLoading(false);
  //       const data = response.data.data;
  //       setPokemons(data);
  //     } else {
  //       setIsLoading(false);
  //       toast.error('No data for you')
  //     }
  //   } else {
  //     setIsLoading(false);
  //     toast.error('Error while loading the data')
  //   }
  // }



  return (
    <>
      <Container >
        <Row style={{ borderBottom: '2px solid #696969' }}>
          <Col xs={10} style={{ display: 'flex', justifyContent: 'center', color: '#696969' }}><h1>POKEMON CARDS</h1></Col>
          <Col xs={2} style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
            {
              isLoading ? <Spinner animation="border" variant="success" />
                : <Button onClick={loadData} variant='success' style={{ border: 'none', borderRadius: '25rem' }}>Load Data</Button>
            }
          </Col>
        </Row>
        <br />
        <br />
        <Row >
          {
            pokemons.map(item => {
              return (
                <CardComp item={item} />
              )

            })
          }
        </Row>
      </Container>
    </>
  )
}

export default App


