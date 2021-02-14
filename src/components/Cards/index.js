import React from 'react'
import Card from './Card'
import styles from './styles.module.css'

export default function Cards(props) {
  console.log('pops',props.data)
    return (
        <>
        <Card
            className={styles.confirmed}
            title="Confirmados"
            cases={props.data["confirmed"]}
            date={props.data["updated_at"]}
            subTitle="Pessoas confirmados do covid19"
          />
        <Card
            className={styles.infected}
            title="Infectados"
            cases={props.data["cases"]}
            date={props.data["updated_at"]}
            subTitle="Pessoas infectadas pelo covid19"
          />
          <Card
            className={styles.recovered}
            title="Curados"
            cases={props.data["recovered"]}
            date={props.data["updated_at"]}
            subTitle="Pessoas curadas do covid19"
          />
          <Card
            className={styles.deaths}
            title="Mortes"
            cases={props.data["deaths"]}
            date={props.data["updated_at"]}
            subTitle="Pessoas mortas pelo covid19"
          />
        </>
    )
}