
import {useForm} from "react-hook-form";
import styled from "styled-components";
import ErrorMessage from './ErrorMessage';
import { Link } from "react-router-dom";
import Input from "./Input";

const StyledForm = styled.form`
    min-height: 27rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 3rem;
    gap: 1.2rem;
    font-family: var(--font-roboto-100);
    @media (max-width: 650px) {
        padding: 1rem 1.5rem ;
    }
    `;




export const InputDiv = styled.div`
    width: 60%;
    min-height: 6rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    gap: .5rem;
    & ${Input} {
        width: 100%;
    }

    @media (max-width: 650px) {
        width: 100%;   
    }
    
    `;

export const FormButton = styled.button`
    height: 3rem;
    width: 22rem;
    background-color: #1ed760;
    border: none;
    outline: none;
    border-radius: 30px;
    font-weight: bolder;
    letter-spacing: 1px;
    
    &:hover {
        scale: 1.02;
        font-weight: 1000;
    }

    @media (max-width: 650px) {
        width: 18rem;
    }
`
 const CustomLink = styled(Link)`
    color: grey;
    font-family: var(--font-roboto-100);
    
    &:hover {
        color: #1ed760;
    }
`


const LoginForm = ({OnSubmit}) => {
    const {register, handleSubmit, formState : {errors}} = useForm();


        return <StyledForm onSubmit={handleSubmit(OnSubmit)}>
            <InputDiv>
                <label htmlFor="email">Email or User Name</label>    
                <Input placeholder="Email or User Name" name='email' id='email'
                style={errors.email ? {border : "2px solid red"} : {}}
                {...register("email", {
                    required: {
                        value : true,
                        message : "Please enter your Spotify username or email address."
                    }
                })} />
                {errors?.email ? <ErrorMessage errorMessage={errors?.email.message} /> : ""}
            </InputDiv>
            <InputDiv>
                <label htmlFor="password">Password</label>
                <Input  placeholder="Password" name="password" id="password"
                style={errors.password ? {border : "2px solid red"} : {}}
                {...register("password", {
                    required: {
                        value : true,
                        message: "Please enter your password."
                    }
                })} />
                {errors?.password ? <ErrorMessage errorMessage={errors?.password.message} /> : ""}
            </InputDiv>
            <FormButton type='submit' >Log In</FormButton>
            <CustomLink to="#" >Forgot Your Password?</CustomLink>
        </StyledForm>
    };

export  {LoginForm as default, CustomLink};