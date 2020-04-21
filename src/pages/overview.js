import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Overview = () => (
    <Layout>
        <h1>Вино</h1>
        <p>Разновидности вин</p>
        <Link to="/">&larr; на Главную</Link>
    </Layout>
);

export default Overview;