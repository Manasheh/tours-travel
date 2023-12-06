import React from 'react'
import Home from './Home'
import Travel from './Travel'
import Price from './Price'
import { Route, Routes } from 'react-router-dom'

function Pages({price, setPrice, places, setPlaces}) {
  return (
    <Routes> 
        <Route path='/' and element = {<Home />}/>
        <Route path='/travel' and element = {<Travel price = {price} setPrice = {setPrice} places = {places} setPlaces={setPlaces} />} />
        <Route path='/price' and element = {<Price price = {price} places={places}/>} />
    </Routes>
  )
}

export default Pages