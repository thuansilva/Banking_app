import styles from "styled-components/native"
import { Animated } from "react-native"

export const Content = styles.View`
max-height: 500px
flex: 1
z-index: 2

`;

export const ContainerHystory =  styles(Animated.View)`
flex: 1
z-index: 1
background-color: #fff
position: absolute
border-radius: 15px
padding: 15px
margin: 0 20px
height: 100%
left: 0
right: 0
top: -90px
`;

export const HeaderHistoryIcon = styles.View`
flex-direction: row
justify-content: center
`;

export const HeaderHistory = styles.View`
flex-direction: row
justify-content: space-between
`

export const TextHistory = styles.Text`
font-size: 15px
color: #081C81
font-weight: bold
`;