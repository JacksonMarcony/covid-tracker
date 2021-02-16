import React, { useEffect, useState } from 'react';
import { fetchCountry } from './services/fetchDatas'


// IMPORT COMPONENTS
import Cards from './components/Cards'
import LogoCovid from "./images/logo.png"
import Infinity from "./images/infinity.svg"
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
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', window.innerWidth)
    }, [])

    if(!load) {
        return (
        <>
            <div className="loading">
                <h1> LOADING...</h1>
                <img src={Infinity} alt="infinity" />
            </div>
        </>
        )
    } else {
        return (
            
            <div className="container">
                <header>
                    <img src={LogoCovid} alt="logo"/>
                </header>
    
                
                    <Cards data={load} />

                <DropDown changeDataApi={changeDataApi} />

                <section className="chart-container">
                    <Chart data={load} />
                </section>
            </div>

           
        )
    }

}

export default App;
