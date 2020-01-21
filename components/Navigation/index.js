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

const Navigation = () => {
    return(
        <Container>
            <Gx col={2}>
                <Link prefetch href="/">
                    <a>
                       <LinkText>Collection</LinkText> 
                    </a>
                </Link>
            </Gx>
            <Gx col={2}>
                <Link prefetch href="/">
                    <a>
                    <LinkText>Custom</LinkText> 
                    </a>
                </Link>
            </Gx>
            <Gx col={2}>
                <Link prefetch href="/">
                    <a>
                        <LinkText>About</LinkText> 
                    </a>
                </Link>
            </Gx>
            <Gx col={2}>
                <Link prefetch href="/">
                    <a>
                        <LinkText>Journal</LinkText> 
                    </a>
                </Link>
            </Gx>
            <Gx col={2}>
                <Link prefetch href="/">
                    <a>
                        <LinkText>Studio</LinkText> 
                    </a>
                </Link>
            </Gx>
        </Container>
    );
};


export default Navigation;