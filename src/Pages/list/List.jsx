import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import {  useLocation, useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

import styles from './List.module.scss';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [optionData, setOptionData] = useState(location.state.optionData)

  const toHotel = () => {
    navigate('/hotels/:id')
  }
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}>
              <label>Destination</label>
              <input type="text" value={destination}  className={styles.inputLs}/>
            </div>

            <div className={styles.lsItem}>
              <label>Check In Date</label>
              <span onClick={() => setOpenDate((prev) => !prev)} className={styles.lsSpan}>{`${format(date[0].startDate, 'dd/MM/yyyy')}`} </span>
              <label>Check Out Date</label>
              <span onClick={() => setOpenDate((prev) => !prev)} className={styles.lsSpan}>{`${format(date[0].endDate, 'dd/MM/yyyy')}`}  </span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}
            </div>

            <div className={styles.lsItem}>
              <label>Options</label>
              <div className={styles.lsOption}>
                <div className={styles.lsOptionsItem}>
                  <span className={styles.lsOptionText}> Min Price <small> per night</small></span>
                  <input type="text" className={styles.lsOptionInput} />
                </div>

                <div className={styles.lsOptionsItem}>
                  <span className={styles.lsOptionText}> Max Price <small> per night</small></span>
                  <input type="text" className={styles.lsOptionInput} />
                </div>

                <div className={styles.lsOptionsItem}>
                  <span className={styles.lsOptionText}> Adult</span>
                  <input type="number" min={1} className={styles.lsOptionInput} placeholder={optionData.adult}/>
                </div>

                <div className={styles.lsOptionsItem}>
                  <span className={styles.lsOptionText}> Children </span>
                  <input type="number" className={styles.lsOptionInput} placeholder={optionData.children} min={0} />
                </div>

                <div className={styles.lsOptionsItem}>
                  <span className={styles.lsOptionText}> Room</span>
                  <input type="number" className={styles.lsOptionInput} placeholder={optionData.room} min={1}/>
                </div>

              </div>
            </div>
            <button onClick={toHotel}>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>

      </div>

    </div >
  )
}

export default List