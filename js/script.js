window.addEventListener('load', () => {
    var videoPlayer = new AVideoPlayer();
    var videoEl = document.getElementById("video-container")


    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            console.log(position)
            videoEl.setAttribute("gps-entity-place", buildGPSEntity(position.coords.latitude, position.coords.longitude))
        }
    }
    getLocation()
})

function buildGPSEntity(lat, long) {
    return "latitude: " + lat + "; longitude: " + long
}