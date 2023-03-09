import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Github from '../images/github.inline.svg'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  padding: 2rem;

  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

const StyledFooterLink = styled(Link)`
  margin-left: 16px;
  color: ${({ theme }) => theme.textColor};
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 32px;
  height: 32px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinkSection>
        <p style={{ margin: 0, marginRight: 16 }}>© {new Date().getFullYear()} Web2App.app</p>
        <a href="https://github.com/web2app-app" rel="noopener noreferrer" target="_blank">
          <StyledGithub />
        </a>
        <StyledFooterLink to="/privacy">
          Privacy Policy
        </StyledFooterLink>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}

export default Footer
