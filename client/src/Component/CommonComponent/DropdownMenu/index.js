import React from 'react';

import "./style.css";

export default () => {

    const [selection,setSelection] = React.useState("information")

    React.useEffect(() => {
     console.log(selection) ; 
      }, [selection]);

    const redirectOnSelect = (e) => {
        setSelection(e.target.value);
      }

    return (
        <div className="select-container">
        <select onChange={redirectOnSelect}>
  <option value="information">Information & Suggestions</option>
  <option value="stories">Stories</option>
  <option value="suggestions">What people said</option>
</select>
</div>
    )}