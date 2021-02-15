import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { fetchCountries } from '../../services/fetchDatas'

import styles from './styles.module.css'

export default function DropDown({ changeDataApi }) {
    const [countries, setCountries] = useState([])

    const defaultOption = 'Brazil'


    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
          }
          fetchAPI()
    }, [])

    return (
        <div className={styles.dropDownContainer}>
            <Dropdown 
                options={countries}  
                value={defaultOption} 
                onChange={e => {
                    changeDataApi(e.value)
                }}
                placeholder="Select an option" 
            />
        </div>
    )
}
