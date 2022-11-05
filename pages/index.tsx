import React from 'react'
import Head from 'next/head'
import VideoFeed from '../components/VideoFeed/index'
import styles from '../styles/Home.module.scss'
import getVideos from '../services/getVideos'
import { VideosResult, Videos } from './types'
import { GetStaticProps } from 'next'

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
export default Home
