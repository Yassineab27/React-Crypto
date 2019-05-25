import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import ReactHighcharts from "react-highcharts";
import HighChartConfig from "./HighChartConfig";
import HighChartsTheme from "./HighChartsTheme";

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

const HighCharts = () => {
    return(
        <div className="Highcharts">
            <ReactHighcharts config={HighChartConfig()}/>
        </div>
    )
};

export default HighCharts;