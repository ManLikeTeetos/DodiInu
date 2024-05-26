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

export default function Records({ showMore }) {
  const {transactions, claim, stakes } = useContract();

  ///dummy data for test

  // const dummyTransactions = {
  //   "1": {
  //     id: 1,
  //     amount: 859499,
  //     balance: 23445454,
  //     staked_time: 1704067200,
  //     deadline: 1708699200,
  //     duration: 180,
  //     transaction_type: "reward"
  //   },
  //   "2": {
  //     id: 2,
  //     amount: 123456,
  //     balance: 987654,
  //     staked_time: 1704153600,
  //     deadline: 1708780800,
  //     duration: 120,
  //     transaction_type: "claim"
  //   },
  //   "3": {
  //     id: 3,
  //     amount: 567890,
  //     balance: 123456,
  //     staked_time: 1704988800,
  //     deadline: 1715683200,
  //     duration: 300,
  //     transaction_type: "stake"
  //   }
  // };

  //  const [transactions, setTransactions] = useState(dummyTransactions);
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

  //dropdown
  const [filterType, setFilterType] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const options = [
    { value: "All", displayText: "All" },
    { value: "claim", displayText: "Claim", color: "red" },
    { value: "stake", displayText: "Staking", color: "white" },
    { value: "reward", displayText: "Reward", color: "green" }
  ];

  




  const [filteredStakes, setFilteredStakes] = useState(
    Object.values(transactions)
  );

  //const [filteredStakes, setFilteredStakes] = useState([]);

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

    let newFilteredStakes = Object.values(transactions).filter((stake) => {
      if (!startDate) return true;
      const stakeDate = new Date(stake.staked_time * 1000);
      return stakeDate >= startDate && stakeDate <= endDate;
    });

    // if (filterType !== "All") {
    //   newFilteredStakes = newFilteredStakes.filter(stake => stake.transaction_type === filterType);
    // }
    setFilteredStakes(newFilteredStakes);
  }, [endDate, transactions, startDate]);

  useEffect(() => {
    setFilteredStakes(Object.values(transactions));
  }, [transactions]);

  useEffect(() => {
    if (showMore) {
      const claimTransactions = Object.values(transactions).filter(
        (transaction) => transaction.transaction_type === "reward" //take note to use the same alpha format for Reward
      );
      setFilteredStakes(claimTransactions);
    }
  }, [showMore]);

  useEffect(() => {
    let newFilteredStakes = Object.values(transactions);

    if (searchTerm) {
      newFilteredStakes = newFilteredStakes.filter(
        (stake) =>
          stake.transaction_type
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStakes(newFilteredStakes);
  }, [searchTerm, transactions]);

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
           
            <input
                className="search-records"
                type="text"
                placeholder="Search Records"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
              <div className="custom-dropdown">
                <div
                  className="custom-dropdown-selected"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                
                  {options.find(options => options.value === filterType).displayText}
                 
                </div>
                {isDropdownOpen && (
                  <div className="custom-dropdown-options">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className="custom-dropdown-option"
                        style={{ color: option.color }}
                        onClick={() => {
                          setFilterType(option.value); // Update filter type immediately
                          // Apply filter immediately
                          let newFilteredStakes = Object.values(transactions);
                          if (option.value !== "All") {
                            newFilteredStakes = newFilteredStakes.filter(
                              (stake) => stake.transaction_type === option.value
                            );
                          }
                          setFilteredStakes(newFilteredStakes);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option.displayText}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
            <div className="tab-date"> Date </div>
            <div className="tab-transtype">Transaction Type </div>
            <div className="tab-amount"> Amount </div>
            <div className="tab-cntdown"> Countdown</div>
            <div className="tab-time"> Time </div>
            <div className="tab-action"> Action </div>
          </div>
          {filteredStakes.map((stake, i) => {
            const { staked_date, stake_timestamp } = convertSecondsToDateTime(
              stake.staked_time
            );

            let transactionTypeClass = ""; // Default class
            switch (stake.transaction_type) {
              case "reward":
                transactionTypeClass = "reward-type";
                break;
              case "claim":
                transactionTypeClass = "claim-type";
                break;
              case "stake":
                transactionTypeClass = "staking-type";
                break;
              default:
                break;
            }

            const isStaking = stake.transaction_type === "stake";
            const countdownClassName = isStaking ? "" : "grey-countdown";
            const formatstakeamount = Number(stake.amount)
              .toFixed(3)
              .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            return (
              <div key={i} className="record-tab-content">
                <div className="tab-date"> {staked_date} </div>
                <div
                  className={`tab-transtype-content ${transactionTypeClass}`}
                >
                  {stake.transaction_type}
                </div>
                <div className="tab-amount">
                  {formatstakeamount}
                </div>
                <CountDown
                  duration={Math.floor(stake.deadline - currentSeconds)}
                  className={countdownClassName}
                />
                <div className="tab-time"> {stake_timestamp} </div>
                <div className="tab-action-cont">
                  {stake.transaction_type === "stake" ? (
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
                  ) : (
                    "" // Render nothing if transaction type is not "staking"
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
