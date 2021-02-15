import React, { useEffect, useState } from 'react';
import { fetchCountry } from './services/fetchDatas'


// IMPORT COMPONENTS
import Cards from './components/Cards'
import LogoCovid from "./images/logo.png"
import Chart from './components/Chart'

import DropDown from './components/DropDown'

import './App.css';



function App(){
    const [load, setLoad] = useState(false)
    

    const changeDataApi = async (country) => {
        const res = await fetchCountry(country)
        console.log('resssssssee',res)
        setLoad(res)
    }

    useEffect(() => {
        changeDataApi('brazil') 
    }, [])

    if(!load) {
        return (
        <h1>LOADING...</h1>
        )
    } else {
        return (
            
            <div className="container">
                <header>
                    <img src={LogoCovid} alt="logo"/>
                </header>
    
                <section className="cards-container">
                    <Cards data={load} />
                </section>

                <DropDown changeDataApi={changeDataApi} />

                <section className="chart-container">
                    <Chart data={load} />
                </section>
            </div>

           
        )
    }

}

export default App;
