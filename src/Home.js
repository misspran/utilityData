import React from 'react';
import { Button, Header, Message, Container, Icon } from 'semantic-ui-react';
import {Link, Route, withRouter} from 'react-router-dom';
import App from './App'

const Home = () => (
    <div className="landing">
    <Container text>
    <Header
      as='h1'
      content='Solstice Helps You Save with Solar'
      
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        
      }}
    />
    <Header
      as='h2'
      content='Checkout your energy savings'
      
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop:  '1.5em',
      }}
    />
    <Button color='white' size='huge'>
    <Link to="/data">
      View Dashboard
      <Icon name='right arrow' />
      </Link>
    </Button>
  </Container>
  </div>
)

export default Home;