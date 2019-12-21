import React from "react";
import Information from '../componentsMission/Information'

export default function AllMissionsInformation(props) {

  return (
    <Information isMyMission={false} id={props.match.params.id}></Information>
  );
}
