import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import ReactHighcharts from "react-highcharts";
import HighChartConfig from "./HighChartConfig";
import HighChartsTheme from "./HighChartsTheme";

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

const HighCharts = (props) => {
    return(
        <div className="Highcharts">
            <ReactHighcharts config={HighChartConfig(props.history)}/>
        </div>
    )
};

export default HighCharts;