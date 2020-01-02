import React from "react";
import Information from '../componentsMission/Information'

export default function MissionsInformation(props) {

  return (
    <Information isMyMission={true} id={props.match.params.id}></Information>
  );
}
