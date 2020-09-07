import React from 'react';

function CalendarEventElement(props) {
  console.log(props);
  return <li>{props.i + props.event}</li>;
}

export default CalendarEventElement;
