import React from 'react'
import { CardPeople, Text, ScrollPeople, People, NamePeople, Around } from './styles'

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
                    <NamePeople>Maria</NamePeople>
                </People>
                <People>
                    <NamePeople>Maria</NamePeople>
                </People>
                <People>
                    <NamePeople>Maria</NamePeople>
                </People>
                <People>
                    <NamePeople>Maria</NamePeople>
                </People>
                <People>
                    <NamePeople>Maria</NamePeople>
                </People>
            </ScrollPeople>
        </CardPeople>
    </>

);

export default SendMoney;