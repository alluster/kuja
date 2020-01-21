import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 40px; 
`;

const Hero = () => {
    return(
        <Container>
            <Title>
                 Kuja Shop
            </Title>
        </Container>
    );
};


export default Hero;