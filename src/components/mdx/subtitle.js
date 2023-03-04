import React from 'react'
import styled from 'styled-components'

const StyledSubtitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  // margin-bottom: 16px;
  // margin: 2rem 0 4rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  // max-width: 900px;
  // @media (max-width: 960px) {
  //   width: 100%;
  //   font-size: 3rem;
  //   line-height: 4.5rem;
  //   margin: 2rem 0 2rem 0;
  //   max-width: 600px;
  // }
  // @media (max-width: 375px) {
  //   width: 100%;
  //   font-size: 2rem;
  //   line-height: 3.5rem;
  //   margin: 2rem 0 4rem 0;
  //   font-weight: 400;
  // }
`

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>

export default Subtitle
