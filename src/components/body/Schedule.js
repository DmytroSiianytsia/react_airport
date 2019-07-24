import React, {Component} from 'react';
import TableHeader from "./TableHeader";

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loaded: false,
      tab: 'departures',
      date: this.getDate(),
      day: 'today'
    };

    this.load = this.load.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getDepart = this.getDepart.bind(this);
    this.getArrival = this.getArrival.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  load() {
    return fetch(`https://api.iev.aero/api/flights/${this.state.date}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          loaded: true
        });
      });
  }

  getDate(num = 0) {
    const date = new Date();
    date.setDate(date.getDate() + num);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  changeDate(num) {
    this.setState({
      date: this.getDate(num),
      day: (num === 0) ? 'today' : (num === 1) ? 'tomorrov' : 'yesterday'
    });
  }

  getDepart() {
    this.setState({
      tab: 'departures'
    });
  }

  getArrival() {
    this.setState({
      tab: 'arrivals'
    });
  }

  componentDidMount() {
    this.getDate();
    this.load();
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className='table'>
          <TableHeader arr={this.state.data.body.arrival} dep={this.state.data.body.departure}
                       getDepart={this.getDepart} getArrival={this.getArrival} getDate={this.getDate}
                       date={this.state.date} tab={this.state.tab} changeDate={this.changeDate}
                       day={this.state.day}/>
        </div>
      );
    } else {
      return <p className='loading'>loading...</p>
    }
  }
}

export default Schedule;
