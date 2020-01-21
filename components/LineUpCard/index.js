import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    max-width: 300px;
`;
const Image = styled.img`
    margin: 15px;
    object-fit: cover;
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
`;

const Description = styled.div`
    text-align: center
`;

const Title = styled.h3 `
    text-weight: 500;
    font-size: 12px;
`;

const Price = styled.h3 `
    font-weight: 300;
    font-size: 12px;
`;

const LineUpCard = ({productInfo}) => {
    return(
        <Container>
            <Image src={productInfo.images[0].src}/>
            <Description>
                <Title>{productInfo.title}</Title>
                <Price>{productInfo.variants[0].price} €</Price>
            </Description>
        </Container>        
    );
};

LineUpCard.propTypes = { 
    productInfo: PropTypes.object, 
} 

export default LineUpCard;