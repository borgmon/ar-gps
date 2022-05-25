window.addEventListener('load', () => {
    // var videoEl = document.getElementById("video-container")
    var markerEl = document.querySelector("a-marker")
    var videoPlayer = new AVideoPlayer();

    markerEl.addEventListener('markerFound', () => {
        videoPlayer.elVideo.play()
    });

    // setTimeout(() => {
    //     console.log('b')
    //     var videoPlayer = new AVideoPlayer();
    //     videoPlayer.elVideo.play()

    // }, 1000);

    // function getLocation() {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //     function showPosition(position) {
    //         console.log(position)
    //         videoEl.setAttribute("gps-entity-place", buildGPSEntity(position.coords.latitude, position.coords.longitude))
    //     }
    // }
    // getLocation()
})

// function buildGPSEntity(lat, long) {
//     return "latitude: " + lat + "; longitude: " + long
// }
