import React from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';

import { HeaderItem } from './styles'


const Header = () => (
    <>
        <HeaderItem>
            <Icon name="ellipsis-v" size={18} color="#FFFFFF" />
            <Icon name="search" size={18} color="#FFFFFF" />
        </HeaderItem>
    </>

)

export default Header;