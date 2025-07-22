import React, { Fragment } from 'react'
import SliderPage from './SliderPage'
import MidSection from './MidSection'
import { useSelector } from 'react-redux'

function HomePage() {
  const count = useSelector((state) => state.counter.value)
  return (
    <Fragment>
      <h1>{count}</h1>
      <SliderPage />
      <MidSection />
    </Fragment>
  )
}

export default HomePage