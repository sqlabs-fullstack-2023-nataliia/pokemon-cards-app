import React from 'react';
import './App.css'
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
import CardComp from './components/CardComp';

function App() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);

  const loadData = async () => {
    setIsLoading(true);
    const response = await axios('https://api.pokemontcg.io/v2/cards');
    if (response.status === 200) {
      if (response.data.data.length > 0) {
        setIsLoading(false);
        const data = response.data.data;
        setPokemons(data);
      } else {
        setIsLoading(false);
        toast.error('No data for you')
      }
    } else {
      setIsLoading(false);
      toast.error('Error while loading the data')
    }
  }



  return (
    <>
      <Container style={{ minHeight: '100vh' }}>
        <Row style={{ borderBottom: '2px solid #696969' }}>
          <Col xs={10} style={{ display: 'flex', justifyContent: 'center', color: '#696969' }}><h1>POKEMON CARDS</h1></Col>
          <Col xs={2} style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
            {
              isLoading ? <Spinner animation="border" variant="success" />
                : <Button onClick={loadData} variant='success' style={{ border: 'none', borderRadius: '25rem' }}>Load Data</Button>
            }
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          {pokemons.length === 0 ?
            <Col xs={12} style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}><h2 style={{ color: '#696969', fontSize: '70px' }}>No Data Found.</h2></Col>
            :
            pokemons.map(item => {
              return (
                <CardComp key={item.id} item={item} />
              )
            }
            )}

        </Row>

      </Container>
    </>
  )
}

export default App


