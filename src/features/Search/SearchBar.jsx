import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Search = styled.input.attrs({ type: 'text' })`
  height: 100%;
  width: 100%;
  background-color: hsl(0deg 0% 14.12%);
  outline: none;
  border: none;
  border-radius: 50px;
  padding: 5px 2.7rem;
  color: white;
  &:focus {
    border: 2px solid white;
  }
`;

const SearchDiv = styled.div`
  height: 100%;
  min-width: 350px;
  position: relative;
`;

const CloseButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  color: white;
  cursor: pointer;
  border-radius: 100px;
  padding: 5px;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function Searchbar() {
  const [search, setSearch] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearch(() => e.target.value);
    const param = e.target.value.split(' ').join('+');
    navigate(`search/${param}`);
    if (!e.target.value) {
      navigate('/search');
    }
  }

  return (
    <SearchDiv>
      <AiOutlineSearch
        style={{ position: 'absolute', fontSize: '1.5rem', top: '1rem', left: '1rem' }}
      />
      <Search
        type="text"
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder="What do you eant to listen to?"
      />
      {search && (
        <CloseButton
          onClick={() => {
            navigate('/search');
            setSearch(() => '');
          }}>
          <AiOutlineClose />
        </CloseButton>
      )}
    </SearchDiv>
  );
}

export default Searchbar;
