import React from 'react';
import Informacion from '../componentsChoice/Information'

export default function ChoiceInformation(props) {

  return (
    <Informacion isMyChoice={true} id={props.match.params.id} />
  );
}
