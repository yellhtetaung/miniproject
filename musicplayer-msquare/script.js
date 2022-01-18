const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];

const tracks = [
    {trackId: "music/track1.mp3", title: "December Night - Lin Nat"},
    {trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw"},
    {
        trackId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein"
    },
    {trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing"}
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + " . "+ tracks[i].title;
    trackTag.textContent = title;
    playlistContainerTag.append(trackTag);
}