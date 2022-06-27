import { style } from '@mui/system';
import React from 'react';
import styles from '../styles/Podcast/podcast.module.css';
import Intro from '../Components/Podcast/Intro';
import SeriesNav from '../Components/Podcast/SeriesNav';
import PodcastList from '../Components/Podcast/PodcastList';

const podcast = ({ test_data }) => {
  return (
    <div className={style.podcast_container}>
    <Intro />
    <SeriesNav />
    <PodcastList />
    </div>
  )
}

export default podcast
