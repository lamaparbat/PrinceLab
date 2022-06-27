import React from 'react';
import styles from '../../styles/Podcast/podcast_list.module.css';
import ReplayIcon from '@mui/icons-material/Replay';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AiOutlineExpandAlt } from 'react-icons/ai';

//custom progress bar
const ProgressBar = () => {
  return (
    <div className='d-flex mx-3 w-100 align-items-center'>
      <div className="progress w-75">
        <div className={"progress-bar "+styles.progessBar} role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div> 
      <span className='mx-3'>00:00</span>
    </div>
  )
}

//custom card container
const PodcastCard = ({ thumbnail, title, date, desc }) => {
  return (
    <div className={styles.podcast_card + " my-3"}>
      <img src={thumbnail} className="mr-3" height={"180px"} width={"300px"} alt="podcast_thumbnail" />
      <div className={styles.podcast_card_content + " p-2 py-3"}>
        <h4>{title}</h4>
        <p id={styles["podcast_card_content--date"]}>{date}</p>
        <p id={styles["podcast_card_content--desc"]}>{desc}</p>
        <div className={styles.podcast_card_content_footer + " mt-4"}>
          <ReplayIcon className='mr-3' />
          <PlayArrowIcon className='mx-3' />
          <RefreshIcon className='mx-3' />
          <ProgressBar />
        </div>
      </div>
    </div>
  )
}


//podcast hostinger component
const PodcastHoster = () => {
  // guest component
  const Guest = ({guest_img1, guest_name1, guest_img2, guest_name2}) => {
    return (
      <div className={styles.hosterContainer_guestcontainer_guest + " d-flex align-items-center"}>
        <div>
          <img src={guest_img1} className="rounded-circle" alt="host1_img" height="150px" width="140px" />
          <h4>{guest_name1}</h4>
        </div>
        <AiOutlineExpandAlt className="mx-4" id={styles["hosterContainer_guestcontainer_guest_connector"]} />
        <div>
          <img src={guest_img2} className="rounded-circle" alt="host1_img" height="150px" width="140px" />
          <h4>{guest_name2}</h4>
        </div>
      </div>
 )
  }
  
  return (
    <div className={styles.hosterContainer + " py-4 d-flex flex-column align-items-center py-5"}>
      <h4>Host for the series</h4><br/><br/>
      <div className={styles.hosterContainer_guestcontainer}>
        <Guest
          guest_img1={"/assets/ceo.png"}
          guest_img2={"/assets/ceo.png"}
          guest_name1={"Prince Singh"}
          guest_name2={"Bibek Gurung"}
        />
      </div>
    </div>
  )
}


function PodcastList() {
  return (
    <div className={styles.list_container}>
      <h3>Episodes</h3>
      <PodcastCard
        thumbnail={"/assets/ai2.png"}
        title="Episode 1: A new beginning"
        date="June 8, 2022 / 00:45:00 / 0 likes"
        desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like..."
      />
      <PodcastCard
        thumbnail={"/assets/earth.png"}
        title="Episode 1: A new beginning"
        date="June 8, 2022 / 00:45:00 / 0 likes"
        desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like..."
      />
      <PodcastCard
        thumbnail={"/assets/map.png"}
        title="Episode 1: A new beginning"
        date="June 8, 2022 / 00:45:00 / 0 likes"
        desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like..."
      />
      <PodcastCard
        thumbnail={"/assets/space.png"}
        title="Episode 1: A new beginning"
        date="June 8, 2022 / 00:45:00 / 0 likes"
        desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like..."
      />
      <PodcastCard
        thumbnail={"/assets/tour.png"}
        title="Episode 1: A new beginning"
        date="June 8, 2022 / 00:45:00 / 0 likes"
        desc="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like..."
      />
<br/><br/>
      <PodcastHoster />
    </div>
  )
}

export default PodcastList
