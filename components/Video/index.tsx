import React from "react"
import PropTypes from 'prop-types'
import styled from "./video.module.scss"

type videoToShow = {
    video: string
}

export interface VideoProps {
    videoToShow: videoToShow
    handleModal: React.MouseEventHandler<HTMLButtonElement>
}

const Video = ({videoToShow, handleModal }: VideoProps) => (
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
)

Video.propTypes = {
    videoToShow: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired
}

export default Video
