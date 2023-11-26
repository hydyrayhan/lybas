import LineChart from "./charts/LineChart";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


import {
	lineChartDataTotalSpent,
	lineChartOptionsTotalSpent,
} from "./charts/chartsVar";
import { t } from "i18next";



export default function TotalSpent({ className }) {
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11)
	});

	const handleValueChange = newValue => {
		console.log("newValue:", newValue);
		setValue(newValue);
	};

	return (
		<div className={"bg-white p-5 shadow-lybas-1 rounded-lg " + className}>
			<div className="graphic-header flex justify-between items-center">
				<div className="graphic-header_money">
					<div className="text-3xl font-bold">0 TMT</div>
					<div className="text-lybas-gray">{t('overalRevenue')}</div>
				</div>
				<div className="graphic-header_date relative border rounded-lg">
					<Datepicker value={value} onChange={handleValueChange} showShortcuts={true} primaryColor={"blue"} />
				</div>
			</div>
			<LineChart
				chartData={lineChartDataTotalSpent}
				chartOptions={lineChartOptionsTotalSpent}
			/>
		</div>
	);
}
