function addMusic() {
    const youtubeLink = document.getElementById("youtube-link").value;
    const videoId = extractVideoId(youtubeLink);
    if (videoId) {
        const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        document.getElementById("music-list").innerHTML += embedCode;
        document.getElementById("youtube-link").value = "";
    } else {
        alert("Por favor, insira um link válido do YouTube.");
    }
}

function extractVideoId(url) {
    const regex = /(?:\/embed\/|watch\?v=|\/\d\/|\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}