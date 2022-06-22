import React from 'react';
import styles from '../../styles/Podcast/series_nav.module.css';

function SeriesNav() {
  return (
    <div className={styles.nav_container}>
    <button className={'btn btn-success rounded-pill '+styles.nav_btn}>Series 1</button>
    <button className={'btn rounded-pill ' + styles.nav_btn}>Series 2</button>
    <button className={'btn rounded-pill ' + styles.nav_btn}>Series 3</button>
    <button className={'btn rounded-pill ' + styles.nav_btn}>Series 4</button>
    </div>
  )
}

export default SeriesNav
