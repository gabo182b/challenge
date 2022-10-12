import Head from 'next/head'
import PropTypes from 'prop-types'
import VideoFeed from '../components/VideoFeed'
import styles from '../styles/Home.module.scss'
import getVideos from '../services/getVideos'

export async function getStaticProps(context) {
  const videos = await getVideos()

  return {
    props: { videos }
  }
}

const Home = ({ videos }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyerra challenge</title>
        <meta name="description" content="VideoFeed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoFeed listOfVideos={videos} />
    </div>
  )
}

Home.propTypes = {
  videos: PropTypes.array.isRequired
}

export default Home
