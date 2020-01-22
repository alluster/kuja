import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const FooterContent = styled.div`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkMagenta};
    bottom: -600px;
    width: 100%;
    height: 600px;
    margin-top: 100px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
       margin-top: 50px;
       height: 600px;

    }
`;

const Footer = () => {
    return(
        <FooterContent>
            <Container>
                <h1>
                    Kuja Shop
                </h1>
            </Container>
        </FooterContent>
    );
};


export default Footer;