import React, { Component } from "react";

function PowerBreakdown(props) {
  return <div>{props.isAuthed.powerConsumptionTotal}</div>;
}

export default PowerBreakdown;
