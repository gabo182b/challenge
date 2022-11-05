import React from 'react'
import { VideoProps } from './types'
import styled from "./video.module.scss"

const Video = ({videoToShow, handleModal }: VideoProps) => {
    return (
    <>
        <video
            autoPlay
            preload='true'
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
)}

export default Video
