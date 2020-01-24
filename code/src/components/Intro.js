import React from 'react'
import { useSelector } from 'react-redux'

export const Intro = () => {
  const isScanning = useSelector((state) => state.ui.isScanning)

  return (
    <>
      {!isScanning && (
        <div className='intro-text'>
          <p>
            By 2020, new recycling targets will start to apply. In order for
            Sweden to be able to reach the new goals, we must be better at
            sorting out the packages. It is an important part of creating a more
            sustainable society where we as consumers can make a big difference.
          </p>
          <p>
            Scan your product and see what packaging material is used, and it
            will be easier for you to recycle it correctly. Together we can
            reach the 2020 goal and make the world a better place!
          </p>
        </div>
      )}
    </>
  )
}
