import React from 'react';

import "./style.css";

export default () => {
    const redirectOnSelect = (e) => {
        console.log(`/${e.target.value}`);
      }

    return (

        <select onChange={redirectOnSelect}>
  <option value="information">Information & Suggestions</option>
  <option value="stories">Stories</option>
  <option value="suggestions">What people said</option>
</select>
    )}