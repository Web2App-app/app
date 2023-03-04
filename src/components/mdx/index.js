import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import Info from './info'
import Iframe from './iframe'
import Github from './github'
import Title from './title'
import Bold from './bold'
import Subtitle from './subtitle'
import Code from './code'
import InlineCode from './inlineCode'
import InlineCard from '../inlineCard'
import InlineBoxLink from '../inlineBoxLink'
import ExternalRedirect from '../ExternalRedirect'
import SEO from '../seo'
import '../../styles/katex.css'

const components = {
  ExternalRedirect,
  Info,
  Github,
  Link,
  Iframe,
  Title,
  Subtitle,
  InlineCard,
  InlineBoxLink,
  code: Code,
  inlineCode: InlineCode,
  Bold,
  SEO
}

export default function MDX({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
