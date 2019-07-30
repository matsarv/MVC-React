import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import CarList from './components/CarList';

export default () => (
    <Layout>
        <Route exact path='/' component={CarList} />
    </Layout>
);


