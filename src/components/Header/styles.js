import styles from 'styled-components/native'

export const HeaderItem = styles.View`
align-items:center
flex-direction: row
justify-content: space-between
padding: 30px 30px 0px 30px
`;

export const Icon = styles.Image.attrs({
    resizeMode: 'contain'
})`
width: 18px
height: 18px
`;