import React, { useEffect, useState, useCallback} from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { VideoFeedProps, Videos, VideoToShow } from './types'
import Slider from "react-slick"
import Modal from "../Modal/index"
import Video from "../Video/index"
import sliderSettings from './config'

const VideoFeed = ({ listOfVideos }: VideoFeedProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [videos, setVideos] = useState<Videos>([])

    const handleVideos = useCallback(() => {
        setVideos(listOfVideos)
    }, [listOfVideos])

    useEffect(() => {
        if (!videos?.length && Boolean(listOfVideos)) {
            handleVideos()
        };
    }, [handleVideos, listOfVideos, videos])

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <>
            <div>
                <Slider {...sliderSettings}>
                    {videos && videos.map((videoToShow: VideoToShow) => (
                        <Video
                            handleModal={handleModal} 
                            key={videoToShow.id} 
                            videoToShow={videoToShow} 
                        />
                    )
                    )}
                </Slider>
            </div>
            {openModal && <Modal closeModal={handleModal} />}
        </>
    )
}

export default VideoFeed
