import React from 'react';

function Arrivals(props) {
  return props.arr.map(flight => {
    if (new Date(flight.timeArrShedule).getDate() === +props.date.slice(0,2)){
      return (
        <tr key={flight.ID} className='row'>
          <td>{flight.term}</td>
          <td>{flight.timeArrShedule.slice(11,16)}</td>
          <td>{flight['airportFromID.name_en']}</td>
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

export default Arrivals;
