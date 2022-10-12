import React, { useEffect, useState, useCallback } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PropTypes from 'prop-types'
import Slider from "react-slick"
import Modal from '../Modal'
import Video from '../Video'
import sliderSettings from './config'

const VideoFeed = ({ listOfVideos }) => {
    const [openModal, setOpenModal] = useState(false)
    const [videos, setVideos] = useState([])

    const handleVideos = useCallback(() => {
        setVideos(listOfVideos)
    }, [listOfVideos])

    useEffect(() => {
        if (!videos.length && Boolean(listOfVideos)) {
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
                    {videos && videos.map(videoToShow => (
                        <Video key={videoToShow.id} videoToShow={videoToShow} handleModal={handleModal} />
                    )
                    )}
                </Slider>
            </div>
            {openModal && <Modal closeModal={handleModal} />}
        </>
    )
}


VideoFeed.propTypes = {
    listOfVideos: PropTypes.array.isRequired
}

export default VideoFeed
