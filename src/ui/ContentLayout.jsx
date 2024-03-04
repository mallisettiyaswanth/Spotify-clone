import { GrDownload, GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Searchbar from '../features/Search/SearchBar';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';
import { HiBellAlert } from 'react-icons/hi2';

const DisplayLayout = styled.main`
  background-color: var(--color-grey-bgc);
  border-radius: 10px;
  flex-grow: 1;
  width: 100%;
  height: 97vh;
  overflow: hidden;
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
`;

const Directions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const CustomUl = styled.ul`
  min-height: 3rem;
  width: 10rem;
  position: absolute;
  right: 20px;
  top: 60px;
  border-radius: 3px;
  background-color: #282828;
  color: white;
  list-style: none;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  & li:hover {
    background-color: #3b3a3a;
  }

  & li {
    width: 100%;
    height: 2.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
  }
`;

function ContentLayout({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const windowSize = useWindowSize();

  const userImage = JSON.parse(sessionStorage.getItem('obj'))?.imageUrl;

  const handleBack = () => navigate(-1);
  const handleNext = () => navigate(1);

  const [toolBarOpen, setHandleTookBar] = useState(false);
  const displaySizes = useWindowSize();

  function handleToolBar() {
    console.log('toolBarOpen');
    setHandleTookBar((state) => !state);
  }

  function handleLogOut() {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <DisplayLayout>
      <StyledNav>
        {displaySizes.width > 400 && (
          <ButtonGroup
            fun1={handleBack}
            fun2={handleNext}
            prop1={<GrFormPrevious />}
            prop2={<GrFormNext />}
            variation="dark"
          />
        )}
        {pathname.startsWith('/search') && <Searchbar />}
        <Directions>
          {windowSize.width > 650 && (
            <Button variation="dark" size="medium">
              <GrDownload /> <span>Install App</span>
            </Button>
          )}
          <ButtonGroup
            prop1={<HiBellAlert />}
            variation="dark"
            size="medium"
            fun2={handleToolBar}
            prop2={<img style={{ height: '30px', borderRadius: '50%' }} src={userImage} />}
          />
        </Directions>
        {toolBarOpen && (
          <CustomUl>
            <li onClick={handleLogOut}>Log out</li>
          </CustomUl>
        )}
      </StyledNav>
      {children}
    </DisplayLayout>
  );
}

export default ContentLayout;
