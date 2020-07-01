import React from 'react'
import { Trans, translate } from 'react-i18next'

const UpdateAvailable = () => {
  return (
    <div className='fixed bottom-0 w-100 tc'>
      <div className='dib f5 lh-copy avenir ph4 pv3 white bg-green br2 br--top'>
        <Trans i18nKey='UpdateAvailable.paragraph1'>
          A new version of IPLD Explorer is available,{' '}
          <button
            className='ma0 pa0 button-reset pointer underline link white fw5 bg-transparent bn'
            onClick={() => window.location.reload()}
          >
            please reload
          </button>
        </Trans>
      </div>
    </div>
  )
}

export default translate('explore')(UpdateAvailable)
