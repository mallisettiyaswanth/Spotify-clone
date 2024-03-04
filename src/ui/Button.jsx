import styled, { css } from 'styled-components';

const variations = {
  transparent: css`
    background-color: hsl(0deg 0% 7.45%);
    color: var(--color-grey-100);
  `,
  clean: css`
    background-color: #fff;
    color: black;
  `,
  dark: css`
    background-color: #000;
    color: white;
  `,
  next: css`
    background-color: green;
    color: black;
  `
};

const Button = styled.button`
  color: white;
  font-family: var(--font-roboto-100);
  border: none;
  outline: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bolder;
  max-width: fit-content;
  position: relative;
  min-height: 40px;
  min-width: 40px;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 1.1rem;
  margin: 6px 10px;

  ${(props) => variations[props?.variation]}

  ${(props) => {
    if (props.group === 'search') {
      return css`
        &:hover : {
        }
        background-color: hsl(0deg 0% 13.73%);
      `;
    }
  }}

  ${(props) => {
    if (props.auth === 'auth')
      return css`
        min-width: 20rem;
        min-height: 2rem;
        font-size: 1rem;
        background-color: transparent;
        border-radius: 30px;
        border: 1px solid #ffffff47;
        color: #fff;

        &:hover {
          border: 2px solid #ffffff88;
        }

        &:active {
          border: 3px solid #fff;
        }
      `;
  }}
  ${(props) => {
    if (props.disabled === true) {
      return css`
        cursor: not-allowed;
      `;
    }
  }}
`;

Button.defaultProps = {
  size: 'small',
  variation: 'transparent',
  disabled: false
};

export default Button;
