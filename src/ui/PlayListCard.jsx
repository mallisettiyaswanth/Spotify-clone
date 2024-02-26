import {  AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import { BiSolidPlaylist } from "react-icons/bi";

const PlayList = styled.div`
  background-color: #121212;
  border-radius: 10px;
  flex-basis: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PlayListHeader = styled.div`
  color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  & span {
    font-size: .9rem;
    font-weight: bolder;
  }

  -webkit-user-select: none;
  user-select: none;

  &:hover {
    color: white;
  }
`;

function PlayListCard({ openNav, setOpenNav }) {
  return (
    <PlayList>
      <PlayListHeader style={openNav ? { flexDirection: 'column', gap: '2rem' } : {}}>
        <Heading>
          <BiSolidPlaylist  onClick={() => setOpenNav()} />
          {!openNav && <span style={{fontSize : ".9rem"}} onClick={() => setOpenNav()}>Your Library</span>}
        </Heading>
        {!openNav ? (
          <ButtonGroup prop1={<AiOutlinePlus />} prop2={<AiOutlineArrowRight />} />
        ) : (
          <Button size="medium">
            <AiOutlinePlus />
          </Button>
        )}
      </PlayListHeader>
    </PlayList>
  );
}

export default PlayListCard;
