import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Gx from '@tgrx/gx';


const LinkText = styled.h3`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    :hover {
        cursor: pointer;
    }
`;

const NavContainer = styled.div`
    text-align: center;
`;


const TopNavigation = () => {
    return(
        <NavContainer>
             <Gx col={10}>
                
            </Gx>
            <Gx col={1}>
                <Link href="/product">
                    <a>
                       <LinkText>Basket</LinkText> 
                    </a>
                </Link>
            </Gx>
            <Gx col={1}>
                <Link href="/product">
                    <a>
                       <LinkText>Account</LinkText> 
                    </a>
                </Link>
            </Gx>
           
        </NavContainer>
    );
};


export default TopNavigation;