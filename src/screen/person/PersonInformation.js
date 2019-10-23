import React, { useEffect, useState } from 'react'
import PersonApi from './PersonApi.js'
import {
  useLocation
} from "react-router-dom";
function PersonInformation(props) {

  const [person, setPerson] = useState()
  const id = props.match.params.id
  let location = useLocation();
  console.log(location.pathname)
  useEffect(() => {

    PersonApi.getPersonInformationApi(id)
      .then(res => {
        const person = res.data
        setPerson(person)
      })

  }, [id])

  console.log(person)

  return (
    <div>


    </div>
  )
}

export default PersonInformation