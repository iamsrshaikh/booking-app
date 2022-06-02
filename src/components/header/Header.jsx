import {
  faBed,
  faCalendarDay,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [destination, setDestination] = useState(' ');
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [optionData, setOptionsData] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const dateHandler = () => {
    setOpenDate((prev) => !prev);
    setShowOption(false);

  }

  const optionHandler = () => {
    setShowOption((prev) => !prev);
    setOpenDate(false);
  }

  const handleOption = (name , operation) => {
    setOptionsData((prev) =>{
      return{
        ...prev,
        [name]: operation=== 'i' ? optionData[name]+ 1 : optionData[name]-1
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels' , {state: {destination, date, optionData}})

  }
  return (
    <div className={styles.header}>
      <div className={type==='list' ? `${styles.listHeaderContainer} ${styles.headerContainer}` : styles.headerContainer}>
        <div className={styles.headerList}>
          <div className={`${styles.headerListItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        { type !== 'list' &&
         <>
         <h1 className={styles.headerTitle}>
            A lifetime of discounts? It's Genius. Book Through Mobile
          </h1>
          <p className={styles.headerDesc}>
            Get rewarded for your travels – unlock instant savings of 10% or more
            with a free BookTM.com account
          </p>

          <button className={styles.headerBtn}>Sign in/ Register</button>

          <div className={styles.headerSearch}>
            <div className={styles.headerSearchItem}>
              <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
              <input
                type="text"
                placeholder="where are you going? "
                className={styles.headerSearchInput}
                onChange={(e) =>  setDestination(e.target.value)}
              />
            </div>

            <div className={styles.headerSearchItem}>
              <FontAwesomeIcon
                icon={faCalendarDay}
                className={styles.headerIcon}
                onClick={dateHandler}
              />
              <span className={styles.headerSearchText} onClick={dateHandler}>
                {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
              </span>
              {
                openDate && <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={styles.dateRange}
                  minDate={new Date()}
                />
              }


            </div>

            <div className={styles.headerSearchItem}>
              <FontAwesomeIcon icon={faPerson} className={styles.headerIcon}  onClick={optionHandler} />
              <span className={styles.headerSearchText}  onClick={optionHandler}>
                {`${optionData.adult} adult . ${optionData.children} children . ${optionData.room} room`}
              </span>
          { showOption && <div className={styles.options}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Adult</span>
                  <div className={styles.optionCounter}>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('adult', 'd')} disabled={optionData.adult <=1}>-</button>
                    <span className={styles.optionCounterNumber}>{optionData.adult}</span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('adult', 'i')}>+</button>
                  </div>  
                </div>

                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Children</span>
                  <div className={styles.optionCounter}>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('children', 'd')} disabled={optionData.children <= 0} >-</button>
                    <span className={styles.optionCounterNumber}>{optionData.children}</span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('children', 'i')}>+</button>
                  </div> 
                </div>

                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Room</span>
                  <div className={styles.optionCounter}>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('room', 'd')} disabled={optionData.room <=1}>-</button>
                    <span className={styles.optionCounterNumber}>{optionData.room}</span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('room', 'i')}>+</button>
                  </div> 
                </div>
              </div> }
            </div> 

            <div className={styles.headerSearchItem}>
              <button className={styles.headerBtn} onClick={handleSearch}>Search</button>
            </div>
          </div> 
          </> }
      </div>
    </div>
  );
};

export default Header;
