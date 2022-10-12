import React from "react"
import PropTypes from 'prop-types'
import styled from "./video.module.scss"

const Video = ({ videoToShow, handleModal }) => (
    <>
        <video
            autoPlay
            className={styled.videoToShow}
            controls={false}
            loop
            muted
        >
            <source
                src={videoToShow.video}
            />
        </video>
        <footer className={styled.footer}>
            <button className={styled.videoButton} onClick={handleModal}>
                Modal
            </button>
        </footer>
    </>
);

Video.propTypes = {
    videoToShow: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired
}

export default Video
