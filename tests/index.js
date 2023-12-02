const Spotify = require('../dist/Spotify').default
const spotify = new Spotify({
    clientId: '807e85346820457383209823a23b9bdc',
    clientSecret: '8ffc86b22f944a4b97fe6f59bed16aff'
})
const fs = require('fs-extra')

const links = {
    artist: 'https://open.spotify.com/artist/7ky9g1jEjCsjNjZbYuflUJ?si=2To3fmc-T9KuyyrQ-Qp5KQ',
    album: 'https://open.spotify.com/album/3u3WsbVPLT0fXiClx9GYD9?si=pfGAdL3VRiid0M3Ln_0DNg',
    song: 'https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab',
    playList: 'https://open.spotify.com/playlist/37i9dQZEVXbLRLeF2cVSaP?si=9f8081dcdca64cfe'
}
;(async () => {
    console.log('START')
    const playList = await spotify.getTracksFromPlaylist(links.playList)
    console.log(playList)
})()

// spotify.verifyCredentials().then(() => {
//     Promise.all([
//         spotify.getTrack(links.song),
//         spotify.getAlbum(links.album),
//         spotify.getArtistAlbums(links.artist)
//     ]).then(console.log)
// })
