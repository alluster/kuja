import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import Container from '../components/Container'
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Gx from '@tgrx/gx';
import Layout from '../layouts/layout';
import Client from '../connect-shopify';
import Loader from 'react-loader-spinner';

const Image = styled.img`
    min-width: 100%;
    object-fit: cover;
    min-height: 70vh;
`;

const LoaderContainer = styled.div`
    text-align: center;
    vertical-align: middle; 
    min-height: 70vh;
    margin-top:25%;
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
    const router = useRouter();
    const [image, setProductImage] = useState("")
    const [info, setProductInfo] = useState([])
    useEffect(() => {
        Client.product.fetch(router.query.id)
        .then((product) => {
            setProductInfo(product)
            console.log(product);
            setProductImage(product.images[0].src)
          });
    }, [])
    return(
        <Layout title="product">
            <Container>
                <Gx col={6} >
                    {
                        image ?
                        <Image src={image} alt="Image" />
                        :
                        <LoaderContainer>
                            <Loader
                                type="Oval"
                                color="#000000"
                                height={50}
                                width={50}
                                timeout={3000} //3 secs
                            />
                        </LoaderContainer>
                       
                    }
                </Gx>
                <Gx col={6}>
                    <InfoContainer>
                        <Title>
                            {info.title  || "No title available" } 
                        </Title>
                        <Price>
                            {/* {info.variants[0].price} */}
                        </Price>
                        <DescriptionTitle>
                            About
                        </DescriptionTitle>
                        <Description>
                            {info.description || "No description available"}                        
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