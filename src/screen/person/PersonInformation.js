import React, { useEffect, useState } from 'react'
import PersonApi from './PersonApi.js'

function PersonInformation(props) {


  const [person, setPerson] = useState()

  useEffect(() => {
    const id = props.match.params.id

    PersonApi.getPersonInformationApi(id)
      .then(res => {
        const person = res.data
        setPerson(person)
      })

  })

  console.log(person)

  return (
    <div>


    </div>
  )
}

export default PersonInformation