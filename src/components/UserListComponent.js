import React from 'react';

const color1 = "#FFE4C4";
const color2 = "#8FBC8F";

// Funktionen returnerar färg beroende på om status är true eller false.
function UserListComponent(props){
return  (<li style= {{color: props.color ? color1 : color2}}>
  <span>{props.children}</span>
  </li>)
}

export default UserListComponent;
