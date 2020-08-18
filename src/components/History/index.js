import React from 'react';

import { AntDesign, Foundation } from '@expo/vector-icons';
import { HeaderHistoryIcon, ContainerHystory, HeaderHistory, TextHistory, Content } from "./styles"
import { Animated } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';



const History = () => {

    const translateY = new Animated.Value(0)
    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                },
            }
        ],
        {
            useNativeDriver: true
        }
    )
    function onHandlerStateChanged(event) {
        console.log(event);


    }

    return (
        <Content>
            <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged} >
                <ContainerHystory styles={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [0, 380],
                            outputRange: [0, 380],
                            extrapolate: "clamp"
                        }),
                    }]
                }}>
                    <HeaderHistoryIcon>
                        <AntDesign name="up" color="#6F8099" size={25} />
                    </HeaderHistoryIcon>
                    <HeaderHistory>
                        <TextHistory>Histórico</TextHistory>
                        <Foundation name="graph-pie" color="#081C81" size={30} />
                    </HeaderHistory>
                </ContainerHystory>
            </PanGestureHandler>
        </Content>
    );
}


export default History;
