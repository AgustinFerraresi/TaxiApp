import { useState } from 'react'

import { yourTrips, availableTrips } from './components/data/Data'
import DriverScreen from './components/driverScreen/DriverScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileSettings from './components/profileSettings/ProfileSettings';

import { driver,passanger } from './components/data/Data';


function App() {
  return (
    <>
      <DriverScreen/>
      {/* <ProfileSettings user={driver}/> */}
    </>
  )
}

export default App
