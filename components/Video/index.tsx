import React, { useEffect, useRef, useState } from 'react'
import { VideoProps } from './types'
import { useVideoOnScreen } from '../../hooks/useVideoOnScreen'
import styled from "./video.module.scss"

const Video = ({ videoToShow, handleModal }: VideoProps) => {

    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    }

    const isVisibile = useVideoOnScreen(options, videoRef)

    const onVideoPlayOnScreen = () => {
        if (playing) {
            if (videoRef.current != null) videoRef.current['pause()']
            setPlaying(!playing)
        } else {
            if (videoRef.current != null) videoRef.current['play()']
            setPlaying(!playing)
        }
    }

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play()
                setPlaying(true)
            }
        }
        else {
            if (playing) {
                videoRef.current.pause()
                setPlaying(false)
            }
        }
    }, [playing, isVisibile])

    return (
        <>
            <video
                ref={videoRef}
                onClick={onVideoPlayOnScreen}
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
    )
}

export default Video
