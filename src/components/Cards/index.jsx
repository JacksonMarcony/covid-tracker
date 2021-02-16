import React from 'react'
import Card from './Card'
import styles from './styles.module.css'

export default function Cards(props) {
  console.log('pops',props.data)
    return (
      <section className="cards-container">
        <Card
            className={styles.confirmed}
            title="Confirmed"
            cases={props.data["confirmed"]}
            date={props.data["updated_at"]}
            subTitle="Number of confirmed cases from COVID-19."
          />
        <Card
            className={styles.infected}
            title="Infected"
            cases={props.data["cases"]}
            date={props.data["updated_at"]}
            subTitle="Number of active cases from COVID-19."
          />
          <Card
            className={styles.recovered}
            title="Recovered"
            cases={props.data["recovered"]}
            date={props.data["updated_at"]}
            subTitle="Number of recoveries from COVID-19."
          />
          <Card
            className={styles.deaths}
            title="Deaths"
            cases={props.data["deaths"]}
            date={props.data["updated_at"]}
            subTitle="Number of deaths caused by COVID-19."
          />
        </section>
    )
}