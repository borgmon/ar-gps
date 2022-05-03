window.addEventListener('load', () => {
    var videoPlayer = new AVideoPlayer();
    var videoEl = document.getElementById("video-container")
    var camera = document.querySelector("a-camera")


    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition, error, { enableHighAccuracy: true });
        function showPosition(position) {
            console.log(position)
            videoEl.setAttribute("gps-entity-place", buildGPSEntity(position.coords.latitude, position.coords.longitude))
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
    }
    camera.addEventListener("gps-camera-update-positon", () => getLocation())
})

function buildGPSEntity(lat, long) {
    return "latitude: " + lat + "; longitude: " + long
}