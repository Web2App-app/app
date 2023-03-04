import React from 'react'
import ApplicationContextProvider, { Updater as ApplicationContextUpdater } from '../contexts/Application'

export function wrapRootElement({ element }) {
  return (
    <ApplicationContextProvider>
      <ApplicationContextUpdater />
      {element}
    </ApplicationContextProvider>
  )
}
