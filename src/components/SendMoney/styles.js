import styles from 'styled-components/native';


export const CardPeople = styles.View`
margin-top: 35px

`;

export const Text = styles.Text`
font-size: 20px
color: #ffffff
padding: 0px 0px 25px 10px
align-items: center
text-align: center

`;

export const ScrollPeople = styles.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 5 }

})``;

export const People = styles.View`
width:100px
height: 100px
background-color: ${props => props.colortextprimary ? '#081C81' : '#ffffff'}
border-radius: 10px
margin: 0px 5px
justify-content:center
align-items: center
`;

export const NamePeople = styles.Text`
text-align:center
font-size:16px
color: #081C81
font-weight: bold
`;

export const Around = styles.View`
width: 65%
height: 65%
padding: 2px 2px 2px 2px
border-width: 0.2px
border-radius: 25px
border-color: #ffff
justify-content:center
align-content:center
align-items:center
`;

export const Photo = styles.Image.attrs({
    resizeMode: 'contain',
})`
height: 60%;
width: 60%;
`;
// background-color: #c4c