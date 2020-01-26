import React from 'react'

export const Stats = () => {
  return (
    <div className='stats-box'>
      <div className='text-box'>
        <h3>What about that stats?</h3>
        <h4>Recycle goals before and after 2020 (%)</h4>
        <div className='stats'>
          <div className='stats-material'>
            <h5>Recycle material</h5>
            <p>Metal</p>
            <p>Carton</p>
            <p>Plastic</p>
            <p>Glass</p>
            <p>Pantburkar</p>
            <p>PET-flaskor</p>
          </div>
          <div className='stats-before-2020'>
            <h5>Before 2020</h5>
            <p>70</p>
            <p>65</p>
            <p>30</p>
            <p>70</p>
            <p>90</p>
            <p>90</p>
          </div>
          <div className='stats-after-2020'>
            <h5>After 2020</h5>
            <p>85</p>
            <p>85</p>
            <p>50</p>
            <p>90</p>
            <p>90</p>
            <p>90</p>
          </div>
          <div className='stats-2018'>
            <h5>Result 2018</h5>
            <p>84</p>
            <p>82</p>
            <p>46</p>
            <p>93</p>
            <p>81</p>
            <p>83</p>
          </div>
        </div>

        <button
          className='more-info-button'
          type='button'
          onClick={(e) => {
            e.preventDefault()
            window.location.href =
              'https://www.scb.se/hitta-statistik/sverige-i-siffror/miljo/atervinning-av-forpackningar-i-sverige/'
          }}>
          Dig deeper
        </button>
      </div>
    </div>
  )
}

{
  /* <a className='more-info-button' href='https://www.ftiab.se/173.html'>
Find recycling spot
</a> */
}
