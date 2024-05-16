import React, { useState, useEffect } from "react";
import "../../styles/Records.css";
import Search from "../../styles/assets/vectors/search_btn.svg";
import Calendar from "../../styles/assets/vectors/calendar.svg";
import Filter from "../../styles/assets/vectors/filter_icon.svg";
import Edit from "../../styles/assets/vectors/edit.svg";
import Delete from "../../styles/assets/vectors/delete.svg";
import { useContract } from "../../hooks/useContract";
import CountDown from "../../components/CountDown";
import { currentSeconds } from "../../Helpers";

// Date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Records() {
	const { stakes, claim } = useContract();

	// const stakes = {
	// 	"1": { amount: 859499, balance: 23445454, staked_time: 1704067200, deadline: 1708699200, duration: 180 }, // First record
	// 	"2": { amount: 123456, balance: 987654, staked_time: 1704153600, deadline: 1708780800, duration: 120 }, // Second record
	// 	"3": { amount: 567890, balance: 123456, staked_time: 1704988800, deadline: 1715683200, duration: 300 } // Third record
	// };



	function convertSecondsToDateTime(timestamp) {
		const milliseconds = timestamp * 1000;
		const dateObject = new Date(milliseconds);

		const day = dateObject.getDate();
		const month = dateObject.getMonth() + 1;
		const year = dateObject.getFullYear();
		const formattedDate = `${day}/${month}/${year}`;

		const hours = dateObject.getHours();
		const minutes = dateObject.getMinutes();
		const seconds = dateObject.getSeconds();

		const formattedTime = `${hours}:${minutes}:${seconds}`;

		return { staked_date: formattedDate, stake_timestamp: formattedTime };
	}

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [filteredStakes, setFilteredStakes] = useState(Object.values(stakes));


	const handleCalendarFilter = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setShowDatePicker(false); // Hide date picker after selecting end date
	};



	const formatSelectedDate = (date) => {
		if (!date) return "";
		return date.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	useEffect(() => {
		if (!endDate) return; // Only filter stakes if endDate is selected

		const newFilteredStakes = Object.values(stakes).filter((stake) => {

			if (!startDate) return true;
			const stakeDate = new Date(stake.staked_time * 1000);
			return stakeDate >= startDate && stakeDate <= endDate;
		});
		setFilteredStakes(newFilteredStakes);
	}, [endDate, stakes, startDate]);

	return (
		<div className="record">
			<div className="record-header">Trade Records</div>
			<div className="record-subheader">
				View your DODI records and transactions.
			</div>
			<div className="record-body">
				<div className="record-filter">
					<div className="record-search">
						<div className="record-innersearch">
							<img className="record-icon" src={Search} alt="search" />
						</div>
						<span className="search-records">Search Records</span>
					</div>
					<div className="record-cal">
						<div className="record-innercal">
							<div className="record-cal-div">
								<img
									className="record-cal-icon"
									src={Calendar}
									alt="Calendar"
									onClick={() => setShowDatePicker(!showDatePicker)}
								/>
							</div>
							<span className="record-cal-text">
								{formatSelectedDate(startDate)} - {formatSelectedDate(endDate)}
							</span>
						</div>
						<div className="record-cal-filter">
							<div className="filter-div">
								<img className="record-cal-icon" src={Filter} alt="filter" />
							</div>
							<span className="record-cal-text">Filters</span>
						</div>
					</div>
				</div>
				{showDatePicker && (
					<DatePicker
						selected={startDate}
						onChange={handleCalendarFilter}
						startDate={startDate}
						endDate={endDate}
						showMonthDropdown
						showYearDropdown
						selectsRange
						inline
					/>
				)}
				<div className="record-tab-body">
					<div className="record-tab-header">
						<div className="serial">
							<input type="checkbox" className="tab-checkbox" />
						</div>
						<div className="tab-date"> Date </div>
						<div className="tab-transtype">Transaction Type </div>
						<div className="tab-amount"> Amount </div>
						<div className="tab-staketype"> Staking Type</div>
						<div className="tab-cntdown"> Countdown</div>
						<div className="tab-time"> Time </div>
						<div className="tab-action"> Action </div>
					</div>
					{filteredStakes.map((stake, i) => {
						const { staked_date, stake_timestamp } = convertSecondsToDateTime(
							stake.staked_time
						);
						return (
							<div key={i} className="record-tab-content">
								<div className="serial">
									<input type="checkbox" className="tab-checkbox" />
								</div>
								<div className="tab-date"> {staked_date} </div>
								<div className="tab-transtype-content">Staking </div>
								<div className="tab-amount">{stake.amount}</div>
								<div className="tab-staketype-content"> 50 Days </div>
								<CountDown
									duration={Math.floor(stake.deadline - currentSeconds)}
								/>
								<div className="tab-time"> {stake_timestamp} </div>
								<div className="tab-action-cont">
									<button
										disabled={
											+stake.deadline > currentSeconds || stake.balance == 0
										}
										onClick={() => claim(stake.id)}
										className={`record-btn ${+stake.deadline > currentSeconds || stake.balance == 0
												? ""
												: "active"
											}`}
									>
										<span className="stake-btn-txt">CLAIM</span>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
