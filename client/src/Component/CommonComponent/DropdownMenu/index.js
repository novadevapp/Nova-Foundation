import React from 'react';
import Footer from '../Footer'
import "./style.css";

export default () => {

    const [selection,setSelection] = React.useState("footer")


    const redirectOnSelect = (e) => {
        setSelection(e.target.value);
      }

    return (
      <>
        <div className="select-container">
        <select onChange={redirectOnSelect}>
  <option value="information">Information & Suggestions</option>
  <option value="stories">Stories</option>
  <option value="suggestions">What people said</option>
</select>
</div>
 {selection === "footer" ? <Footer/> : null}
  </>  )}