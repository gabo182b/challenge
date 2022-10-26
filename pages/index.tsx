import Head from 'next/head'
import PropTypes from 'prop-types'
import VideoFeed from '../components/VideoFeed/index'
import styles from '../styles/Home.module.scss'
import getVideos from '../services/getVideos'
import { GetStaticProps } from 'next'

export interface VideosResult {
  id:    number;
  video: string;
}

export interface Videos {
  videos: []
}

export const getStaticProps: GetStaticProps = async (context) => {
  const videos: VideosResult = await getVideos()

  return {
    props: { videos }
  }
}

const Home = ({ videos }: Videos ) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyerra challenge</title>
        <meta name="description" content="VideoFeed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {videos && <VideoFeed listOfVideos={videos} />}
    </div>
  )
}

Home.propTypes = {
  videos: PropTypes.array.isRequired
}

export default Home
