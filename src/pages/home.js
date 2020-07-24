import React from 'react';
import {
    Container, Carrousel, Scroll, Itemheader, Cash, Card,
    Value, Text, Footer, TextData, CardCredit, CardType
} from './styles'
import Icon from '@expo/vector-icons/FontAwesome5';

import Header from '../components/Header';

const Home = () => (
    <Container >
        <Header />
        <Carrousel>
            <Scroll>
                <Card>
                    <Itemheader>
                        <Icon name="apple" size={19} color="#FFFFFF" />
                        <Icon name="signal" size={19} color="#FFFFFF" />
                    </Itemheader>
                    <Cash>
                        <Value>R$ 7.500 </Value>
                        <CardType>Platinium Pluss</CardType>
                    </Cash>
                    <Footer>
                        <Icon name="cc-mastercard" size={19} color="#FFFFFF" />
                        <Carrousel>
                            <TextData>Valido até</TextData>
                            <Text>12/22</Text>
                        </Carrousel>
                    </Footer>
                </Card>

                <CardCredit>
                    <Itemheader>
                        <Icon name="cc-mastercard" size={19} color="#081c81" />
                        <Icon name="signal" size={19} color="#081c81" />
                    </Itemheader>
                    <Cash>
                        <Value colortextsecundary >R$ 12.500 </Value>
                        <CardType colortextterciary>Standard</CardType>
                    </Cash>
                    <Footer>
                        <Carrousel>
                            <TextData>Valido até</TextData>
                            <Text colortextprimary>11/24</Text>
                        </Carrousel>
                    </Footer>
                </CardCredit>


            </Scroll>

        </Carrousel>

    </Container >

);
export default Home;