export interface VideoFeedProps {
    listOfVideos: []
}

export interface VideoToShow {
    id: number,
    video: string,
}

export type Videos = VideoFeedProps["listOfVideos"] | []