const replayMode = {
    no: Symbol(),
    singleSong: Symbol(),
    singleAlbum: Symbol(),
    randomSong: Symbol(),
    randomAlbum: Symbol(),
}

const vm = new Vue({
    el: '#app',
    data: {
        addAlbum: {
            title: '',
            artist: '',
            cover: '',
            songs: [
                {
                    title: '',
                    file: '',
                }
            ],
            addSong: 
            {
                title: '',
                file: null,
            },
        },
        addSongs: {
            album: 0,
            songs: [
                {
                    title: '',
                    file: '',
                }
            ]
        },
        albums: [
            {
                title: '',
                artist: '',
                cover: '',
                songs: [
                    {
                        title: '',
                        file: '',
                    }
                ]
            }
        ],
        playlist: [

        ],
        config:{
            playing: {
                album: 0,
                songs: 0,
            },
            replayMode: replayMode.no,
            sound: 50
        },
    }
})