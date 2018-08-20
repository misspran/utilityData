import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';

const Routes = ( ) =>
<main>
<Route exact path="/" component={Home} />
<Route exact path="/data" component={App} />
</main>

export default withRouter(Routes);