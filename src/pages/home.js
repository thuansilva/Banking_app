import React from 'react';
import { Container } from './styles'
import Icon from '@expo/vector-icons/FontAwesome5';

import Header from '../components/Header';
import CardScroll from '../components/Card'
import SendMoney from '../components/SendMoney'

const Home = () => (
    <Container >
        <Header />
        <CardScroll />
        <SendMoney />
    </Container >

);
export default Home;