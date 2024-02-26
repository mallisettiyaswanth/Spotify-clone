import styled from 'styled-components';
import Button from './Button';

const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 6rem;
  font-size: 1rem
`;

function ButtonGroup({ prop1, prop2, size, variation, fun1, fun2 }) {
  return (
    <ButtonGrp>
      <Button variation={variation && variation} onClick={() => fun1 && fun1()} size={size}>
        {prop1}
      </Button>
      <Button variation={variation && variation} onClick={() => fun2 && fun2()} size={size}>
        {prop2}
      </Button>
    </ButtonGrp>
  );
}

export default ButtonGroup;
