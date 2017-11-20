import React, { Component } from 'react';
import HistogramIcon from '../images/histogram.svg';

class Histogram extends Component {

    render() {
        return (
            <img src={HistogramIcon} className="chart-icon" alt="histogram icon" title="Histogram" />
        );
    }

}

export default Histogram;
