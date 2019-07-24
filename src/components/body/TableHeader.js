import React from 'react';
import Departures from "./Departures";
import './TableHeader.css';
import Arrivals from "./Arrivals";

function TableHeader(props) {
  return (
    <div className='schedule'>
      <div className='dep-arr'>
        <div className={props.tab === 'departures' ? 'active' : 'notActive'}
             onClick={props.getDepart}>
          DEPARTURES
        </div>
        <div className={props.tab === 'departures' ? 'notActive' : 'active'}
             onClick={props.getArrival}>
          ARRIVALS
        </div>
      </div>
      <div>
        <div className='day'>
          <span className={props.day === 'yesterday' ? 'activeDay' : ''}
                onClick={() => props.changeDate(-1)}>
            YESTERDAY
          </span>
          <span className={props.day === 'today' ? 'activeDay' : ''}
                onClick={() => props.changeDate(0)}>
            TODAY
          </span>
          <span className={props.day === 'tomorrov' ? 'activeDay' : ''}
                onClick={() => props.changeDate(1)}>
            TOMORROW
          </span>
        </div>
        <table className='table'>
          <thead>
            <tr className='table-title'>
              <th>Terminal</th>
              {props.tab === 'departures'
                ? <th>Gate</th>
                : null
              }
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
          {props.tab === 'departures'
            ? <Departures dep={props.dep} date={props.date}/>
            : <Arrivals arr={props.arr} date={props.date}/>
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableHeader;
