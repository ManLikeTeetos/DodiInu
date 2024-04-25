import "../../styles/Records.css"
import Search from "../../styles/assets/vectors/search_btn.svg"
import Calendar from "../../styles/assets/vectors/calendar.svg"
import Filter from "../../styles/assets/vectors/filter_icon.svg"
import Edit from "../../styles/assets/vectors/edit.svg"
import Delete from "../../styles/assets/vectors/delete.svg"



export default function Records(){
	return(
		<div className="record">
			<div className="record-header">
				Trade Records
			</div>
			<div className="record-subheader">
				View your DODI records and transactions.
			</div>
			<div className="record-body">
				<div className="record-filter">
					<div className="record-search">
						<div className="record-innersearch">
							<img className="record-icon" src={Search} alt="search" />
						</div>
						<span className="search-records">
							Search Records
						</span>
					</div>
					<div className="record-cal">
						<div className="record-innercal">
							<div className="record-cal-div">
								<img className="record-cal-icon" src={Calendar} alt="Calendar" />
							</div>
							<span className="record-cal-text">
								April 10, 2024 - April 20, 2024
							</span>
						</div>
						<div className="record-cal-filter">
							<div className="filter-div">
								<img className="record-cal-icon" src={Filter} alt="filter" />
							</div>
							<span className="record-cal-text">
								Filters
							</span>
						</div>
					</div>
				</div>
				<div className="record-tab-body">
					<div className="record-tab-header">
						<div className="serial">
							<input type="checkbox" className="tab-checkbox"/>
						</div>
						<div className="tab-date"> Date </div>
						<div className="tab-transtype">Transaction Type </div>
						<div className="tab-amount"> Amount </div>
						<div className="tab-staketype"> Staking Type</div>
						<div className="tab-cntdown"> Countdown</div>
						<div className="tab-time"> Time </div>
						<div className="tab-action"> Action </div>
					</div>
					<div className="record-tab-content">
						<div className="serial">
							<input type="checkbox" className="tab-checkbox" />
						</div>
						<div className="tab-date"> 1/02/2023 </div>
						<div className="tab-transtype-content">Staking </div>
						<div className="tab-amount"> 97.00 </div>
						<div className="tab-staketype-content"> 10 Days </div>
						<div className="tab-cntdown">
							<div className="stake-count-in">
								<span className="stake-count-txt">
									--
								</span>
								<span className="stake-count-title">
									Days
								</span>
							</div>
							<div className="stake-count-divider">
								:
							</div>
							<div className="stake-count-in">
								<span className="stake-count-txt">
									--
								</span>
								<span className="stake-count-title">
									Hours
								</span>
							</div>
							<div className="stake-count-divider">
								:
							</div>
							<div className="stake-count-in">
								<span className="stake-count-txt">
									--
								</span>
								<span className="stake-count-title">
									Minutes
								</span>
							</div>
							<div className="stake-count-divider">
								:
							</div>
							<div className="stake-count-in">
								<span className="stake-count-txt">
									--
								</span>
								<span className="stake-count-title">
									Seconds
								</span>
							</div>
						</div>
						<div className="tab-time"> 19:22:23 </div>
						<div className="tab-action-cont">
							<div className="action-div">
								<img className="action-icon" src={Edit} alt="edit"/>
							</div>
							<div className="action-div">
								<img className="action-icon" src={Delete} alt= "delete" />
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
}