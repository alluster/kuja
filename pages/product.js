import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container'
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Gx from '@tgrx/gx';
import Layout from '../layouts/layout';

const Image = styled.img`
    min-width: 100%;
    object-fit: cover;
    min-height: 70vh;
`;

const InfoContainer = styled.div`
    padding: 0px 40px 40px 40px;
`;
const Title = styled.h3`

`;

const Price = styled.h4`
    font-weight: 300;
    font-size: 14px;
`;
const DescriptionTitle = styled.h3`

`;

const Description = styled.h3`
    font-weight: 300;
    font-size: 14px;
`;
const Product = () => {
    return(
        <Layout title="product">
            <Container>
                <Gx col={6} >
                    <Image src='/sideboard.png'/>     
                </Gx>
                <Gx col={6}>
                    <InfoContainer>
                        <Title>
                            Kujatuoli  
                        </Title>
                        <Price>
                            300€
                        </Price>
                        <DescriptionTitle>
                            About
                        </DescriptionTitle>
                        <Description>
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Description>
                        <DescriptionTitle>
                            Details
                        </DescriptionTitle> 
                        <Description>
                            <ul>
                                <li>
                                    Material: wood
                                </li>
                            </ul>
                        </Description>
                        <Button text={"ADD TO CART"}>

                        </Button>
                    
                    </InfoContainer>
                </Gx>
            </Container>
        </Layout>
       
    );
};

Product.prototype = {
    text: PropTypes.string
}

export default Product;