import React from 'react'
import './styles.css'
import CountUp from 'react-countup';
import cn from 'classnames'

export default function Card(props) {
    return (
        <article className={cn("card", props.className)}>
            <div className="alignElements">
              <p className="title">{props.title}</p>
              <h4 className="cases"><CountUp start={0} end={props.cases} duration={2.75} separator="." /></h4>
              <p className="title">{new Date(props.date).toDateString()}</p>
              <p>{props.subTitle}</p>
            </div>
          </article>
    )
}