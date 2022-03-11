import React, { Fragment } from 'react'
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading2'

export default function LoadingScreen() {
  return <Fragment>
      <div className="loadingScreen  d-flex justify-content-center align-items-center text-white">
      <UseAnimations animation={loading} size={56} wrapperStyle={{ padding: 100 }} className = {"bg-primary"} />
        <UseAnimations animation={loading} loop={true} size = {72} className = "text-white" strokeColor='white'/>
     </div>
  </Fragment>
}
