import React from 'react'
import styled from 'styled-components'

const StyledBold = styled.b`
    pointer-events: none;
    white-space: wrap;
    overflow-wrap: normal;
`

const Bold = ({ children }) => <StyledBold>{children}</StyledBold>

export default Bold
