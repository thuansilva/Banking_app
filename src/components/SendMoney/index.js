import React from 'react'
import { CardPeople, Text, ScrollPeople, People, NamePeople, Around, Photo } from './styles'

import Icon from '@expo/vector-icons/FontAwesome5';


const SendMoney = () => (
    <>
        <CardPeople>
            <Text>Enviar dinheiro para</Text>
            <ScrollPeople>
                <People colortextprimary>
                    <Around>
                        <Icon name="plus" color="#FFFFFF" size={35} ></Icon>
                    </Around>

                </People>
                <People>
                    <Photo source={{ uri: "https://uploads.spiritfanfiction.com/fanfics/historias/201908/fanfic-brawl-stars-17254174-140820190041.png" }} />
                    <NamePeople>Brow</NamePeople>
                </People>
                <People>
                    <Photo source={{ uri: "https://i.pinimg.com/originals/0c/69/fe/0c69fe657a50ea8e00ca817131e9ce35.png" }} />
                    <NamePeople>Spike</NamePeople>
                </People>
                <People>
                    <Photo source={{ uri: "https://i.pinimg.com/originals/aa/06/1d/aa061db0729fe459d266c1226b72c2f1.png" }} />
                    <NamePeople>Leon</NamePeople>
                </People>
                <People>
                    <Photo source={{ uri: "https://i.pinimg.com/originals/b9/6d/3c/b96d3cc40a07de2397c551ec8d5fd376.png" }} />
                    <NamePeople>Nita</NamePeople>
                </People>
                <People>
                    <Photo source={{ uri: "https://i.pinimg.com/originals/98/e7/48/98e748cb3e10c4a8dc9a3bb2bbde812f.png" }} />
                    <NamePeople>Poco</NamePeople>
                </People>
            </ScrollPeople>
        </CardPeople>
    </>

);

export default SendMoney;