import styled from "styled-components";

const Input = styled.input`
    height: 3rem;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid #ffffffb5;
    color: #fff;
    padding: 0 .8rem;
    outline: none;
    font-size: 1rem;
    &:hover {
        border: 2px solid #ffffff88;
    }
    
    &:focus {
        border: 3px solid #fff;
    }
    
    &::placeholder {
        font-family: var(--font-roboto-100);
        color: #ffffff80
    }

`;

export default Input;