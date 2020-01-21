import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding: right: 20px;

`;



const Container = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
};


export default Container;