import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighChartConfig from "./HighChartConfig";

const HighCharts = () => {
    return(
        <div className="Highcharts">
            <HighchartsReact highcharts={Highcharts} options={HighChartConfig()}/>
        </div>
    )
};

export default HighCharts;