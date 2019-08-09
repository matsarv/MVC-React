import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import CarList from './components/CarList';
import About from './components/About';

export default () => (
    <Layout>
        <Route exact path='/' component={CarList} />
        <Route path="/about" component={About} />
    </Layout>
);


