import { useDocumentTitle } from '@uidotdev/usehooks';
import { useEffect } from 'react';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setUser } from '../Context/UserContext';
import { SignInWithEmailAndPassword, SignWithGoogleAccount } from '../authentication/firebase';
import Button from '../ui/Button';
import LoginHeader from '../ui/LoginHeader';
import LoginForm from './../ui/Loginform';

const LoginDiv = styled.div`
  height: 70rem;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
  display: flex;
  padding: 3rem 0;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const Card = styled.div`
  height: 65rem;
  width: 45rem;
  border-radius: 10px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 5rem 1rem;
  gap: 1rem;
  & h1 {
    font-size: 3rem;
    font-family: 'Figtree', sans-serif;
    font-weight: 900;

    @media (max-width: 650px) {
      font-size: 2rem;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 80rem;
  }
`;

const Hr = styled.hr`
  width: 80%;
  margin: 1rem 0;
  border: 0.05px solid #dadada12;
`;

const LoginButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20rem;
`;

const Login = () => {
  useDocumentTitle('Login - Spotify');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/home');
    }
  }, []);

  async function handleSignInWithGoogle() {
    const obj = await SignWithGoogleAccount();
    dispatch(setUser(obj));
    localStorage.setItem('accessToken', obj.accessToken);
    sessionStorage.setItem('obj', JSON.stringify({ ...obj, accessToken: undefined }));
    if (obj.accessToken !== '') {
      navigate('/home');
    }
  }

  async function OnSubmit(data) {
    const obj = await SignInWithEmailAndPassword(data);
    dispatch(setUser(obj));
    localStorage.setItem('accessToken', obj.accessToken);
    sessionStorage.setItem('obj', JSON.stringify({ ...obj, accessToken: undefined }));
    if (obj.accessToken !== '') {
      navigate('/home');
    }
  }

  return (
    <>
      <LoginHeader />
      <LoginDiv>
        <Card>
          <h1>Log in to Spotify</h1>
          <LoginButtons>
            <Button style={{ minHeight: '50px' }} auth="auth" onClick={handleSignInWithGoogle}>
              <GrGoogle style={{ position: 'absolute', left: '1.5rem', fontSize: '1.3rem' }} />
              <span>Continue with Google</span>
            </Button>
            <Button style={{ minHeight: '50px', color: '#ffffff69' }} disabled={true} auth="auth">
              <BsFacebook style={{ position: 'absolute', left: '1.5rem', fontSize: '1.3rem' }} />
              <span>Continue with Facebook</span>
            </Button>
            <Button style={{ minHeight: '50px', color: '#ffffff69' }} disabled auth="auth">
              <BsApple style={{ position: 'absolute', left: '1.5rem', fontSize: '1.3rem' }} />
              <span>Continue with Apple</span>
            </Button>
            <Button
              onClick={() => navigate('/login/phone')}
              style={{ minHeight: '50px', color: '#ffffff69' }}
              disabled
              auth="auth">
              <span>Continue with Phone Number</span>
            </Button>
          </LoginButtons>
          <Hr />
          <LoginForm OnSubmit={OnSubmit} />
          <Hr />
        </Card>
      </LoginDiv>
    </>
  );
};

export default Login;
