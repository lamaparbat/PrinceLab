import React from 'react';
import styles from '../../styles/Podcast/podcast_list.module.css';

//custom card container
const PodcastCard = () => {
 return (
  <div className={styles.card}>
   <img src={"/assets/steve.png"} height={"100px"} width={"200px"} />
  </div>
)
}

function PodcastList() {
  return (
    <div className={styles.list_container}>
    <h3>Episodes</h3>
    <div>
     <PodcastCard />
    </div>
    </div>
  )
}

export default PodcastList
