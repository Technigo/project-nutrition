import React from 'react'

export const MoreInfo = () => {
  return (
    <div className='more-info-container'>
      <div className='find-recycling'>
        <div className='picture'></div>
        <div className='text-box'>
          <h3>Where to go?</h3>
          <p>There is a lot of places jadfkladfklasdkfj</p>
          <button
            className='more-info-button'
            type='button'
            onClick={(e): void => {
              e.preventDefault()
              window.location.href = 'https://www.ftiab.se/173.html'
            }}>
            Find recycling spot
          </button>
        </div>
      </div>
      <div className='stats'></div>
    </div>
  )
}

//kolla varför
