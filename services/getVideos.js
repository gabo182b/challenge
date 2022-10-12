const getVideos = async () => {
    try {
        let response = await fetch("https://api.pexels.com/videos/search?query=LivingRoom&orientation=portrait&size=medium", {
            headers: {
                Authorization: "563492ad6f917000010000015c3e970b3f104e1ba71af907a6c3c8d2"
            }
        })
        let resp = await response.json()
        return resp.videos.map((v, i) => {
            return {
                id: i,
                video: v.video_files[0].link
            }
        })
    } catch (error) {
        console.log(error)
        return []
    }
}

export default getVideos
