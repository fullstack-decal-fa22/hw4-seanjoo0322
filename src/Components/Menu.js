import React, { useState } from 'react';
import Color from './Color';

/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick={props.clickFunc}/>
          <Color color="pink" handleClick={props.clickFunc}/>
          <Color color="blue" handleClick={props.clickFunc}/>
          <Color color="green" handleClick={props.clickFunc}/>
      </div>
    );
}

export default Menu;