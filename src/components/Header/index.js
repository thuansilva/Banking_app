import React from 'react';
import { Icon } from './styles'

import { HeaderItem } from './styles'


const Header = () => (
    <>
        <HeaderItem>
            <Icon source={require('../../assets/quad.png')} />
            <Icon source={require('../../assets/search.png')} />
        </HeaderItem>
    </>

)

export default Header;