function toggleMute(videoId, buttonId) {
    const iframe = document.getElementById(videoId);
    const button = document.getElementById(buttonId);
    
    // Check if the video is currently muted
    if (iframe.src.includes("mute=1")) {
        iframe.src = iframe.src.replace("&mute=1", ""); // Unmute the video
        button.textContent = "Mute"; // Update button text
    } else {
        iframe.src += "&mute=1"; // Mute the video
        button.textContent = "Unmute"; // Update button text
    }
}