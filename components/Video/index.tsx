import React, { useEffect, useRef, useState, useMemo } from 'react'
import { VideoProps } from './types'
import styled from "./video.module.scss"

const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()

    const callbackFunction = entries => {
        const [entry] = entries //const entry = entries[0]
        setIsVisible(entry.isIntersecting)
    }

    const optionsMemo = useMemo(() => {
        return options
    }, [options])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])

    return isVisibile
}

const Video = ({ videoToShow, handleModal }: VideoProps) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    }
    const isVisibile = useElementOnScreen(options, videoRef)

    const onVideoClickOnScreen = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true)
            }
        }
        else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false)
            }
        }
    }, [playing, isVisibile])

    return (
        <>
            <video
                ref={videoRef}
                // autoPlay={visible}
                onClick={onVideoClickOnScreen}
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
