import styled, { css } from 'styled-components'

const ButtonStyles = css`
  padding: 0.85rem 0.85rem;
  text-decoration: none;
  border-radius: 20px;
  display: inline-block;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: ${({ outlined }) => (outlined ? 'default' : 'default')};
  width: fit-content;
  text-decoration: none;
  width: 100%;
  backdrop-filter: blur(4px);
  :hover {
    transform: scale(1);
    border: ${({ theme }) => `1px solid ${theme.buttonBorderHover}`};
  }
  background-color: ${({ outlined, theme }) => (outlined ? theme.cardBG : theme.backgroundColor)};
  color: ${({ theme }) => theme.textColor};
  border: ${({ outlined, theme }) => (outlined ? `1px solid ${theme.buttonBorder}` : `1px solid ${theme.buttonBorder}`)};
`

export const Button = styled.a`
  ${ButtonStyles};
`

export default Button
