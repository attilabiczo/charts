import * as React from "react";
const HistogramIcon = require('../images/histogram.svg');

export class Histogram extends React.Component<{}, {}> {
    render() {
        return <img src={HistogramIcon} className="chart-icon" alt="histogram icon" title="Histogram" />;
    }
}
