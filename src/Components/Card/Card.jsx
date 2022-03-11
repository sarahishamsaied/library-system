import React, { Fragment } from 'react'
import style from '../Card/Card.module.css'
export default function Card({cardTitle,description,icon}) {
  return <Fragment>
      <div className={style.card+" bg-custom"}>
      <h1>{icon}</h1>
        <h3>{cardTitle}</h3>
        <p>{description}</p>
      </div>
  </Fragment>
}
