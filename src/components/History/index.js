import React from 'react';

import { AntDesign, Foundation } from '@expo/vector-icons';
import { HeaderHistoryIcon, ContainerHystory, HeaderHistory, TextHistory, Content } from "./styles"
import { Animated } from 'react-native'
import { PanGestureHandler,State } from 'react-native-gesture-handler';

const History = () => {
    let offset= 0;

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
        let opened = false;
        

         if(event.nativeEvent.oldState == State.ACTIVE){
             const {translationY}= event.nativeEvent;
             offset +=translationY
    
             if(translationY >= 50){
                 opened =true;
             }else{
                 translateY.setValue(offset);
                 translateY.setOffset(0);
                offset = 0;
             }

             Animated.timing(translateY,{
                toValue:opened ? 200: 0,
                duration: 200,
                useNativeDriver:true,
            }).start(()=>{
                offset = opened ? 200 : 0
                translateY.setOffset(offset);
                translateY.setValue(0);
              
            });
         }

    }

    return (
        <Content>
            <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandlerStateChanged} >
                <ContainerHystory style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [-350,0, 300],
                            outputRange: [-50,0, 200],
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
