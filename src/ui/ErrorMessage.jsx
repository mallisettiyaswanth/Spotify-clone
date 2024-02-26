import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';

const P = styled.p`
    color: red;
    font-size: 1.1rem;

`

const ErrorDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: .5rem;
    font-family: var(--font-roboto-100);
`



const ErrorMessage = ({errorMessage}) => {
    return (
        <ErrorDiv>
        <AiFillInfoCircle style={{color :"#e0686f", fontSize: "1.1rem", alignSelf: "start", marginTop : "4px" }} />
        <p>{errorMessage}</p>
        </ErrorDiv>
    );
};

export default ErrorMessage;