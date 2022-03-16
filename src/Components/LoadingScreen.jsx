import React, { Fragment } from 'react'
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading'

export default function LoadingScreen() {
  return <Fragment>
      <div className="loadingScreen vh-100 d-flex justify-content-center align-items-center text-white">
        <UseAnimations animation={loading} loop={true} size = {100} className = "text-white" strokeColor='white'/>
     </div>
  </Fragment>
}
