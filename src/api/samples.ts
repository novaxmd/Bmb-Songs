export const sampleTrack = {
  id: "X0zxHHfs",
  name: "Wangu",
  type: "song",
  year: "2024",
  releaseDate: "2024-12-01",
  duration: 217,
  label: "Tanzania Music Records",
  explicitContent: false,
  playCount: 401865,
  language: "swahili",
  hasLyrics: false,
  lyricsId: null,
  url: "some url",
  copyright: "Rayvanny",
  album: {
    id: "50076157",
    name: "Tanzania Album Collection",
    url: "sample album url",
  },
  artists: {
    primary: [
      {
        id: "1431",
        name: "Rayvanny",
        url: "artist url",
        type: "artist",
        role: "artist",
        image: [],
      },
    ],
    featured: [
      {
        id: "1432",
        name: "Harmonize",
        url: "artist url",
        type: "artist",
        role: "artist",
        image: [],
      },
    ],
    all: [
      {
        id: "1431",
        name: "Rayvanny",
        url: "artist url",
        type: "artist",
        role: "artist",
        image: [],
      },
    ],
  },
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
  ],
  downloadUrl: [
    {
      quality: "48kbps",
      url: "https://aac.saavncdn.com/745/6adf5c70c94e8de892cb34bf52a77d9c_48.mp4",
    },
  ],
};

export const sampleSearchResults = {
  topQuery: {
    results: [
      {
        id: "568648",
        title: "Rayvanny - Tanzania Artist",
        image: [
          {
            quality: "50x50",
            url: "artist url",
          },
          {
            quality: "150x150",
            url: "artist url",
          },
        ],
        url: "some url",
        type: "artist",
        description: "Tanzanian Musician",
        position: 2,
      },
    ],
    position: 0,
  },
  songs: {
    results: [
      {
        id: "Ap1mYWUe",
        title: "Pepeta",
        image: [
          {
            quality: "50x50",
            url: "song image url",
          },
        ],
        album: "Tanzanian Hits",
        url: "some url",
        type: "song",
        description: "Tanzanian Music Hit",
        position: 1,
        primaryArtists: "Rayvanny",
        singers: "Rayvanny",
        language: "swahili",
      },
    ],
    position: 2,
  },
  albums: {
    results: [
      {
        id: "252208",
        title: "Tanzania Collection",
        image: [
          {
            quality: "50x50",
            url: "some url",
          },
          {
            quality: "150x150",
            url: "some url",
          },
        ],
        artist: "Harmonize",
        url: "some url",
        type: "album",
        description: "Tanzanian Album",
        year: "2024",
        songIds:
          "4Em6uaoL, i9ydMSJr, rTpH2eN4, vntXe_9X, j8hvJDPs, Z4rNko0k, y6UMHuY0",
        language: "swahili",
        album: "Tanzania Hits",
        position: 2,
        primaryArtists: "Harmonize",
        singers: "Harmonize",
      },
    ],
    position: 1,
  },
  artists: {
    results: [
      {
        id: "625094",
        title: "Koffi Olomide",
        image: [
          {
            quality: "50x50",
            url: "some url",
          },
          {
            quality: "150x150",
            url: "some url",
          },
        ],
        url: "artist url",
        type: "artist",
        description: "Tanzanian Music Legend",
        position: 1,
      },
    ],
    position: 4,
  },
  playlists: {
    results: [
      {
        id: "48667929",
        title: "Muziki wa Tanzania",
        image: [
          {
            quality: "50x50",
            url: "some url",
          },
          {
            quality: "150x150",
            url: "some url",
          },
        ],
        url: "playlist url",
        type: "playlist",
        language: "swahili",
        description: "Best Tanzanian Music Collection",
        position: 2,
      },
    ],
    position: 3,
  },
};

export const sampleSongQueue = {
  id: "Rzdqqd31",
  name: "Nyimbo za Kila Siku",
  image: false,
  songs: [sampleTrack],
};

export const sampleAlbum = {
  id: "58397429",
  name: "Tanzania Greatest Hits",
  year: "2024",
  releaseDate: "12-10-23",
  songCount: "34141",
  url: "some url",
  primaryArtistsId: "012xafSl qrqWQfx xlze1Q2",
  primaryArtists: "Rayvanny Harmonize",
  featuredArtists: [],
  artists: [],
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
    {
      quality: "150x150",
      url: "image url",
    },
  ],
  songs: [sampleTrack],
};

export const samplePlaylist = {
  id: "ae5fa1Ax",
  userId: "some user id",
  name: "Hits za Tanzania",
  followerCount: "1221",
  songCount: "20",
  fanCount: "14210",
  username: "Tanzania Music Hub",
  firstname: "Tanzania",
  lastname: "Music",
  language: "swahili",
  shares: "1331",
  quality: "",
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
  ],
  url: "some url",
  songs: [sampleTrack],
};

export const sampleArtistInSong = {
  id: "zcA9adw1w",
  name: "Wangu",
  role: "Lead Vocalist",
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
  ],
  type: "song",
  url: "https://aac.saavncdn.com/745/6adf5c70c94e8de892cb34bf52a77d9c_48.mp4",
};

export const sampleUserPlaylist = {
  name: "My Tanzania Music",
  id: 39,
  songs: [sampleTrack],
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
  ],
};

export const sampleArtist = {
  id: "1431",
  name: "Rayvanny",
  url: "artist url",
  type: "artist",
  followerCount: 500000,
  fanCount: "750000",
  role: "artist",
  isVerified: true,
  dominantLanguage: "swahili",
  dominantType: "tanzanian",
  bio: "Tanzanian music artist and producer specializing in contemporary African music",
  dob: null,
  fb: null,
  twitter: null,
  wiki: null,
  availableLanguages: ["swahili", "english"],
  isRadioPresent: true,
  image: [
    {
      quality: "50x50",
      url: "artist-image-url",
    },
    {
      quality: "150x150",
      url: "artist-image-url",
    },
  ],
  topSongs: [],
  topAlbums: [],
  singles: [],
  similarArtists: [],
};

export const samplePlaylistOfList = {
  id: "2312321",
  i: 2,
  userId: "user_01",
  name: "Top 10 Tanzania",
  songCount: "12",
  username: "Tanzania Music Fan",
  firstname: "Tanzania",
  lastname: "Lover",
  language: "swahili",
  image: [
    {
      quality: "50x50",
      url: "image url",
    },
  ],
  url: "playlist url",
  songs: [
    {
      quality: "50x50",
      url: "",
    },
  ],
};
