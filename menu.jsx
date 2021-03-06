/**
* @Author: Layne Faler <laynefaler>
* @Date:   11-05-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 11-10-2016
*/

import React from 'react';
import { Router, Route, Link } from 'react-router';

var MenuList = [
  // enter menu items
];

var MenuElements = MenuList.map(function(e,i,a) {
  var link = e.replace(/[^a-zA-Z]/g, '').toLowerCase();
  if (e === "Home") link = "";
  return (
    <li>
      <Link to={"/" + link}>{e}</Link>
    </li>
  );
});

var Menu = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <ul>
          { MenuElements }
        </ul>
      </div>
    );
  }
});

module.exports = Menu;
