import React from "react";
import Informacion from '../componentsChoice/Information'

export default function AllChoiceInformation(props) {

  return (
    <Informacion isMyChoice={false} id={props.match.params.id} />
  );
}