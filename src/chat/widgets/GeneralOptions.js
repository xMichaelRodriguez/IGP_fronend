import React from 'react'

import { Options } from './Options'

export const GeneralOptions = (props) => {
  const options = [
    {
      text: '¿Quieres saber cuáles son tus derechos fundamentales?',
      handler: props.actionProvider.handleHumanRights,
      id: 1,
    },
    {
      text: '¿Quieres saber que organizaciones?',
      handler: props.actionProvider.handleOrganizations,
      id: 2,
    },
  ]

  return (
    <div className='container p-3 text-break '>
      <Options actionProvider={options} />
    </div>
  )
}
