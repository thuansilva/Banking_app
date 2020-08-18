import React from 'react';

import Header from '../components/Header'
import CardScroll from '../components/Card'
import SendMoney from '../components/SendMoney'
import History from '../components/History'
import { Container } from './styles'

const Home = () => (
    <Container >
        <Header />
        <CardScroll />
        <SendMoney />
        <History />
    </Container >

);

export default Home;