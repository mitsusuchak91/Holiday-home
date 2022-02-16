import React from 'react';
import './Host.css';
import { useHistory } from "react-router-dom";
import { Button, ButtonBase } from "@material-ui/core";
//import VideoPlayer from 'react-video-js-player';

function Host() {
    const history = useHistory();
  return (
     <div className='host'>
     <div className='Host_header'>
      <h2>
          Try hosting on Holiday Home
      </h2>
      <h3>
      Join us. We will help you every step of the way.
      </h3>
      <Button variant="btn btn-success" onClick={() => history.push('/login')}>Let's go!</Button>
      {/*<VideoPlayer src= "https://youtu.be/2uxzTEx7PMU" height="420"/>*/}
  </div>
  </div>
  );
};

export default Host;

