import styled from 'styled-components';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const PageLayout = styled.div`
  padding: 8px 12px;
  background-color: #121212;
  border-radius: 10px;
`;

const StyledUl = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledLi = styled.li`
  padding: 8px 20px 5px;
  font-size: 1.8rem;
`;

export const Navlink = styled(NavLink)`
  display: flex;
  align-items: end;
  justify-content: start;
  gap: 1.5rem;
  text-decoration: none;
  padding: 4px;
  color: var(--color-grey-100);
  &.active,
  &:hover {
    color: white;
  }
`;

export const Text = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

function PageNav({ openNav }) {
  return (
    <PageLayout>
      <StyledUl>
        <StyledLi>
          <Navlink to="/home">
            <AiFillHome />
            {!openNav && <Text>Home</Text>}
          </Navlink>
        </StyledLi>
        <StyledLi>
          <Navlink to="/search">
            <AiOutlineSearch />
            {!openNav && <Text>Search</Text>}
          </Navlink>
        </StyledLi>
      </StyledUl>
    </PageLayout>
  );
}

export default PageNav;
