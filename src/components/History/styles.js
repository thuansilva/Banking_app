import styles from "styled-components/native";
import { Animated } from "react-native";

export const Content = styles.View`

z-index: 1

`;

export const ContainerHystory = styles(Animated.View)`
background-color: #fff
border-radius: 15px
padding: 15px
margin: 0 20px
height: 80%
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
`;

export const TextHistory = styles.Text`
font-size: 21px
color: #081C81
font-weight: bold
`;
export const ContainerItems = styles.View`
margin-top: 5px
flex-direction: row
align-items:center
height:80px
`;
export const ContainerImage = styles.Image.attrs({
  resizeMode: "contain",
})`
height: 60%
width: 30%

`;
export const ContainerService = styles.View`
flex-direction : column
max-height: 40%
width:145px

`;
export const NameService = styles.Text`
font-size: 21px
color: #081C81
font-weight: bold`;

export const DataService = styles.Text`
font-size: 11px
color: #6F8099
font-weight: bold`;

export const Price = styles.Text`
font-size: 21px
color: #030710
font-weight: bold
`;
export const Simbol = styles.Text`
font-size: 21px
color: #6F8099
font-weight: bold
`;
