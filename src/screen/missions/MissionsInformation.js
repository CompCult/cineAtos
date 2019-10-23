import React, { useEffect, useState } from 'react'
import MissionsApi from './MissionsApi.js'
//import { useLocation } from "react-router-dom";
function MissionsInformation(props) {

  const [missions, setMissions] = useState()
  const id = props.match.params.id
  // let location = useLocation();
  //console.log(location.pathname)
  useEffect(() => {

    MissionsApi.getMissionsInformationApi(id)
      .then(res => {
        const missions = res.data
        setMissions(missions)
      })

  }, [id])

  console.log(missions)

  return (
    <div>


    </div>
  )
}

export default MissionsInformation