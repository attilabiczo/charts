import React, { Component } from 'react';
import ScatterPlotIcon from '../images/scatterplot.svg';

class ScatterPlot extends Component {

    render() {
        return (
            <img src={ScatterPlotIcon} className="chart-icon" alt="scatterplot icon" title="Scatterplot" />
        );
    }

}

export default ScatterPlot;
