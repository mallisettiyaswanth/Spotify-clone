import styled from 'styled-components';
import LoginHeader from '../ui/LoginHeader';
import data from './../../public/phoneNumbers.json';
import { MenuItem, Select } from '@mui/material';
import Input from '../ui/Input';
import { FormButton, InputDiv } from '../ui/Loginform';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ui/ErrorMessage';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { Captcha } from '../authentication/firebase';



const PhoneNumberDiv = styled.div`
  height: 87.5vh;
  background-color: #121212;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-roboto-100);
`;


const PhoneNumberForm = styled.form`
  height: 100%;
  width: 60%;
  padding: 3rem 5rem;
  display: flex;
  align-items: start;
  gap: 1rem;
  display: flex;
  align-content: center;
  justify-content: start;
  flex-direction: column;
  font-weight: bold;
    font-family: 'Figtree', sans-serif;
  & ${Input} {
    width: 35rem;
    position: relative;
  }


`;

const NumberSignUpPage = () => {

  const {register, handleSubmit, formState : {errors}} = useForm();
  

  function PhoneNumberSubmit(data) {
    Captcha();
  }


  return (
    <>
      <LoginHeader />
      <PhoneNumberDiv>
        <PhoneNumberForm onSubmit={handleSubmit(PhoneNumberSubmit)}>
          <div style={{width : "100%", display : "flex", height : "10rem", alignItems : "center", justifyContent: "center"}}>

          <Select style={{ border: '1px solid white', color: 'white', width: '10rem', height: "3rem" }} defaultValue="+91" {...register("countryCode", {
            required : {
              value : true,
              message: "Select country code"
            }
          })}>
            {data.map((doc, _) => {
              return (
                doc.dial_code !== undefined && (
                  <MenuItem key={doc.id} value={doc.dial_code || ''} >
                    {doc.dial_code}
                  </MenuItem>
                )
                );
              })}
          </Select>
          <InputDiv style={{position: "relative", top: "-15px", fontFamily : "serif", minWidth: "fit-content"}} >
            <label htmlFor='phoneNumber' style={{textAlign: "center",fontFamily: "var(--font-roboto-100)"}}>Enter your phone Number</label>
            <Input type='text' name='phoneNumber' id='phoneNumber' placeholder="Phone Number" {...register("phoneNumber", {
              required: {
                value: true,
                message: "please enter phone number"
              },
              pattern:{
                value:  /\(?\b\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}\b/,
                message: "Enter valid phone number"
              },
            }
            )} />
            {errors.phoneNumber && <ErrorMessage errorMessage={errors?.phoneNumber.message} />}
          </InputDiv>

            </div>
          <div style={{alignSelf : "end", width: "10rem"}}>
          <FormButton style={{letterSpacing : "0", width: "100%" }}>Next</FormButton>
          </div>
        </PhoneNumberForm>
      </PhoneNumberDiv>
    </>
  );
};

export default NumberSignUpPage;
