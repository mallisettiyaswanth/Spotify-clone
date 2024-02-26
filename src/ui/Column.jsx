import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 380px;
  overflow: hidden;
  flex-shrink: 1;

`;

function Column({ children, openNav }) {
  return <StyledColumn style={openNav ? { width: '95px' } : {}}>{children}</StyledColumn>;
}

export default Column;
