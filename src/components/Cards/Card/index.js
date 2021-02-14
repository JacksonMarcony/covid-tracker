import React from 'react'
import './styles.css'
import cn from 'classnames'

export default function Card(props) {
    return (
        <article className={cn("card", props.className)}>
            <div className="alignElements">
              <p>{props.title}</p>
              <h4>{props.cases}</h4>
              <p>{props.date}</p>
              <p>{props.subTitle}</p>
            </div>
          </article>
    )
}