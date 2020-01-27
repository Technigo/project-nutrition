import React from 'react'

export const MoreInfo = () => {
  return (
    <div className='more-info-container'>
      <div className='more-info-box'>
        <div className='picture-one'></div>
        <div className='text-box'>
          <h3>Where to go?</h3>
          <p>
            There is a lot of places where you can recycle metal, carton, news
            paper and glass!
          </p>
          <a className='more-info-link' href='https://www.ftiab.se/173.html'>
            Find recycling spot
          </a>
        </div>
      </div>
      <div className='more-info-box'>
        <div className='picture-two'></div>
        <div className='text-box'>
          <h3>Did you know?</h3>
          <p>
            Recycling 5 cans correspond to four hours of computer use and two
            hours of standby time
          </p>
          <a
            className='more-info-link'
            href='http://www.pantamera.nu/wp-content/uploads/2015/05/returpack-miljorapport.pdf'>
            Read more examples
          </a>
        </div>
      </div>
    </div>
  )
}
