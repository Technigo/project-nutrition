import React from 'react'

export const MoreInfo = () => {
  return (
    <div className='more-info-container'>
      <div className='more-info-box'>
        <div className='picture'></div>
        <div className='text-box'>
          <h3>Where to go?</h3>
          <p>
            There is a lot of places where you can recycle metal, carton, news
            paper and glass!
          </p>
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
      <div className='more-info-box'>
        <div className='stats'></div>
      </div>
    </div>
  )
}

//kolla varför "void" bråkar, och att sidan funkar ändå
