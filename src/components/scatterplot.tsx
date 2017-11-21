import * as React from "react";
const ScatterPlotIcon = require('../images/scatterplot.svg');

export class ScatterPlot extends React.Component<{}, {}> {
    render() {
        return <img src={ScatterPlotIcon} className="chart-icon" alt="scatterplot icon" title="ScatterPlot" />;
    }
}
