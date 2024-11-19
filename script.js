document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundAudio");
    const iconPlay = document.getElementById("iconPlay");
    const iconMute = document.getElementById("iconMute");

    // Function to play audio
    function playAudio() {
        audio.play();
        iconPlay.style.display = "none"; // Hide play icon
        iconMute.style.display = "block"; // Show mute icon
    }

    // Function to mute audio
    function muteAudio() {
        audio.pause();
        iconMute.style.display = "none"; // Hide mute icon
        iconPlay.style.display = "block"; // Show play icon
    }

    // Add event listeners
    iconPlay.addEventListener("click", playAudio);
    iconMute.addEventListener("click", muteAudio);
});
