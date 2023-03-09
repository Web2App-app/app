import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import Info from './info'
import Github from './github'
import Title from './title'
import Bold from './bold'
import Subtitle from './subtitle'
import Code from './code'
import InlineCode from './inlineCode'
import ExternalRedirect from '../ExternalRedirect'
import SEO from '../seo'
import '../../styles/katex.css'

const components = {
  ExternalRedirect,
  Info,
  Github,
  Link,
  Title,
  Subtitle,
  code: Code,
  inlineCode: InlineCode,
  Bold,
  SEO
}

export default function MDX({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
