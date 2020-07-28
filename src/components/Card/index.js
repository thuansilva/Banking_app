import React from 'react';

import {
    Carrousel, Scroll, Itemheader, Cash, Card,
    Value, Text, Footer, TextData, CardCredit, CardType,
    Icon
} from './styles'



const CardScroll = () => (
    <Carrousel>
        <Scroll>
            <Card>
                <Itemheader>
                    <Icon source={require('../../assets/apple.png')} />
                    <Icon source={require('../../assets/area.png')} />
                </Itemheader>
                <Cash>
                    <Value>R$ 7.500 </Value>
                    <CardType>Platinium Pluss</CardType>
                </Cash>
                <Footer>
                    <Icon source={require('../../assets/masblanc.png')} />
                    <Carrousel>
                        <TextData>Valido até</TextData>
                        <Text>12/22</Text>
                    </Carrousel>
                </Footer>
            </Card>

            <CardCredit>
                <Itemheader>
                    <Icon source={require('../../assets/master.png')} />
                    <Icon name="signal" size={19} color="#081c81" />
                </Itemheader>
                <Cash>
                    <Value colortextsecundary >R$ 12.500 </Value>
                    <CardType colortextterciary>Standard</CardType>
                </Cash>
                <Footer>
                    <Carrousel>
                        <TextData colortextcizna={true}>Valido até</TextData>
                        <Text colortextprimary>11/24</Text>
                    </Carrousel>
                </Footer>
            </CardCredit>
        </Scroll>
    </Carrousel>

);

export default CardScroll;