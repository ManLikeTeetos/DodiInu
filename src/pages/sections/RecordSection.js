import "../../styles/Records.css";
import Search from "../../styles/assets/vectors/search_btn.svg";
import Calendar from "../../styles/assets/vectors/calendar.svg";
import Filter from "../../styles/assets/vectors/filter_icon.svg";
import Edit from "../../styles/assets/vectors/edit.svg";
import Delete from "../../styles/assets/vectors/delete.svg";
import { useContract } from "../../hooks/useContract";
import CountDown from "../../components/CountDown";
import { currentSeconds } from "../../Helpers";

export default function Records() {
  const { stakes, claim } = useContract();


	function convertSecondsToDateTime(timestamp) {
		// Convert timestamp to milliseconds
		const milliseconds = timestamp * 1000;
		// Create a new Date object
		const dateObject = new Date(milliseconds);

		// Extract date components
		const day = dateObject.getDate();
		const month = dateObject.getMonth() + 1; // Months are zero indexed
		const year = dateObject.getFullYear();

		// Format date as "DD/MM/YYYY"
		const formattedDate = `${day}/${month}/${year}`;

		// Extract time components
		const hours = dateObject.getHours();
		const minutes = dateObject.getMinutes();
		const seconds = dateObject.getSeconds();

		// Format time as "HH:MM:SS"
		const formattedTime = `${hours}:${minutes}:${seconds}`;

		return { staked_date: formattedDate, stake_timestamp: formattedTime };
	}





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
                />
              </div>
              <span className="record-cal-text">
                April 10, 2024 - April 20, 2024
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
          {stakes.map((stake, i) => {
			  const { staked_date, stake_timestamp } = convertSecondsToDateTime(stake.staked_time);
				return (
					<div key={i} className="record-tab-content">
					<div className="serial">
						<input type="checkbox" className="tab-checkbox" />
					</div>
					<div className="tab-date"> {staked_date} </div>
					<div className="tab-transtype-content">Staking </div>
					<div className="tab-amount">{stake.amount}</div>
					<div className="tab-staketype-content"> 50 Days </div>
					<CountDown duration={Math.floor(stake.deadline - currentSeconds)} />
					<div className="tab-time"> {stake_timestamp} </div>
					<div className="tab-action-cont">
						<button
						disabled={
							+stake.deadline > currentSeconds || stake.balance == 0
						}
						onClick={() => claim(stake.id)}
						className={`record-btn ${
							+stake.deadline > currentSeconds || stake.balance == 0
							? ""
							: "active"
						}`}
						>
						<span className="stake-btn-txt">CLAIM</span>
						</button>
						{/* <div className="action-div">
						<img className="action-icon" src={Edit} alt="edit" />
						</div>
						<div className="action-div">
						<img className="action-icon" src={Delete} alt="delete" />
						</div> */}
					</div>
					</div>
				);
			})}
        </div>
      </div>
    </div>
  );
}
