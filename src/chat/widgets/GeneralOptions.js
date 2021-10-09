import React from 'react'

import { Options } from './Options'

export const GeneralOptions = (props) => {
  const options = [
    {
      text: '¿Quieres saber cuáles son tus derechos fundamentales?',
      handler: props.actionProvider.handleHumanRights,
      id: 1,
    },
  ]

  return (
    <div className='container p-3 text-break '>
      <Options actionProvider={options} />
    </div>
  )
}
