import scrollTo from 'gatsby-plugin-smoothscroll'
export { wrapRootElement } from './src/apollo/wrapper'

export function onRouteUpdate({ location }) {
  if (location.hash) {
    scrollTo(location.hash)
  } else {
    window.scroll(0, 0)
  }
}
