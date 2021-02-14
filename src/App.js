import React, { useEffect, useState } from 'react';
import { fetchCountry } from './services/fetchDatas'


// IMPORT COMPONENTS
import Cards from './components/Cards'
import LogoCovid from "./images/logo.png"
import Chart from './components/Chart'

import './App.css';



function App(){
    const [load, setLoad] = useState(false)
    
    const changeDataApi = async () => {
        const res = await fetchCountry('brazil')
        console.log('resee',res)
        setLoad(res)
    }

    useEffect(() => {
        changeDataApi() 
    }, [])

    if(!load) {
        return (
        <h1>LOADING...</h1>
        )
    } else {
        return (
            <>
            <div className="container">
                <header>
                <img src={LogoCovid} alt="logo"/>
                </header>
    
                <section className="cards-container">
                <Cards data={load} />
                </section>

                <section className="chart-container">

                <Chart />
                </section>
            </div>

           
            </>
        )
    }

}

export default App;
