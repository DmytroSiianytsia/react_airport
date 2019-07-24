import React  from 'react';
import './Departures.css';

function Departures(props) {
 return  props.dep.map(flight => {
    if (new Date(flight.timeDepShedule).getDate() === +props.date.slice(0,2)){

      return (
          <tr key={flight.ID} className='row'>
            <td>{flight.term}</td>
            <td>{flight.gateNo}</td>
            <td>{flight.timeDepShedule.slice(11,16)}</td>
            <td>{flight['airportToID.name_en']}</td>
            <td>{flight.status}</td>
            {flight.airline === undefined
              ? <td>no data found</td>
              : <td className='airline'>
                  <img className='airlineLogo' src={flight.airline.en.logoSmallName} alt='logo'/>
                  <p>{flight.airline.en.name}</p>
                </td>
            }
            {flight['carrierID.IATA'] === undefined
              ? <td>no data found</td>
              : <td>{`${flight['carrierID.IATA']}${flight.fltNo}`}</td>
            }
          </tr>
      );
    }
  });
}

export default Departures;
