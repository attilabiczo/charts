import React, { Component } from 'react';
import Charts from 'cxncharts';

class Hello extends Component {

    render() {
        return (
            <div>
                <span>Hello Charts</span>
                <ul>
                    <li><Charts.Histogram /></li>
                    <li><Charts.ScatterPlot /></li>
                </ul>
            </div>

        );
    }

}

export default Hello;
