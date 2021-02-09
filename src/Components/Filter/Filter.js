
import React from 'react';
import classes from './Filter.module.css'
import { Link } from 'react-router-dom'; 

const Filter =(props) => (

    <div>
        <label>Sort by: </label>
        <select onChange = {e => props.change(e.target.value)} className = {classes.DropDown}>
            <option value = '0'>None</option>
            <option value = '1'>Price: Low To High</option>
            <option value = '2'>Price: High to Low</option>
            <option value = '3'>Alphabetical: A to Z</option>
            <option value = '4'>Alphabetical: Z to A</option>

        </select>

    </div>

);


export default Filter;