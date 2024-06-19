const getVideos = async () => {
    try {
        let response = await fetch("https://api.pexels.com/videos/search?query=LivingRoom&orientation=portrait&size=medium", {
            headers: {
                Authorization: "Vmv2CGru4PPuWlHns023jBFi8D0vHPSirV3Vv85UM0e5XCYTylC6cQ1C"
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
        console.log(error.message)
        return []
    }
}

export default getVideos
