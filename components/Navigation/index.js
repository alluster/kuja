import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Link from 'next/link';
import Gx from '@tgrx/gx';


const LinkText = styled.h3`
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
`;

const NavContainer = styled.div`
    text-align: center;
    margin-bottom: 30px;
`


const Navigation = () => {
    return(
        <Container>
            <NavContainer>
                <Gx col={3}>
                    <Link href="/product">
                        <a>
                        <LinkText>Collection</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                        <LinkText>Custom</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                            <LinkText>About</LinkText> 
                        </a>
                    </Link>
                </Gx>
                <Gx col={3}>
                    <Link href="/">
                        <a>
                            <LinkText>Studio</LinkText> 
                        </a>
                    </Link>
            </Gx>
        </NavContainer>
        </Container>

    );
};


export default Navigation;