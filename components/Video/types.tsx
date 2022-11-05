type videoToShow = {
    video: string
}
export interface VideoProps {
    videoToShow: videoToShow
    handleModal: React.MouseEventHandler<HTMLButtonElement>
}