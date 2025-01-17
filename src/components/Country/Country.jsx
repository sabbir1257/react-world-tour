import React from 'react';
import './Country.css'
const Country = ({ country }) => {
     const { name, flags, population, area } = country;
     console.log(country)
     return (
          <div className='country'>
               <h3>{name?.common}</h3>
               <img src={flags.png} alt="" />
               <p>Population: {population}</p>
               <p>Area: {area}</p>
          </div>
     );
};

export default Country;