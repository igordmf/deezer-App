export const localStorageFunctions = {
  addAlbumsToLocalStorage: (selectedAlbum) => {
    const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
    if(favoritesAlbums) {
      if(favoritesAlbums.some((album) => album.id === selectedAlbum.id)) return;
      const newFavoritesAlbums = [...favoritesAlbums, selectedAlbum];
      localStorage.setItem('favoritesAlbums', JSON.stringify(newFavoritesAlbums));
    } else {
      localStorage.setItem('favoritesAlbums', JSON.stringify([selectedAlbum]));
    }
  },
  addArtistsToLocalStorage: (selectedArtist) => {
    const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
    if(favoritesArtists) {
      if(favoritesArtists.some((artist) => artist.id === selectedArtist.id)) return;
      const newFavoritesArtists = [...favoritesArtists, selectedArtist];
      localStorage.setItem('favoritesArtists', JSON.stringify(newFavoritesArtists));
    } else {
      localStorage.setItem('favoritesArtists', JSON.stringify([selectedArtist]));
    }
  },
  addMusicsToLocalStorage: (selectedTrack) => {
    const favoritesMusics = JSON.parse(localStorage.getItem('favoritesMusics'));
    if(favoritesMusics) {
      if(favoritesMusics.some((music) => music.id === selectedTrack.id)) return;
      const newFavorites = [...favoritesMusics, selectedTrack];
      localStorage.setItem('favoritesMusics', JSON.stringify(newFavorites));
    } else {
      localStorage.setItem('favoritesMusics', JSON.stringify([selectedTrack]));
    }
  },
  removeMusicFromLocalStorage: (selectedTrack) => {
    const favoritesMusics = JSON.parse(localStorage.getItem('favoritesMusics'));
    const newFavoritesMusics = favoritesMusics.filter((music) => music.id !== selectedTrack.id);
    localStorage.setItem('favoritesMusics', JSON.stringify(newFavoritesMusics));
  },
  removeAlbumFromLocalStorage: (selectedAlbum) => {
    const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
    const newFavoritesAlbums = favoritesAlbums.filter((album) => album.id !== selectedAlbum.id);
    localStorage.setItem('favoritesAlbums', JSON.stringify(newFavoritesAlbums));
  },
  removeArtistFromLocalStorage: (selectedArtist) => {
    const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
    const newFavoritesArtists = favoritesArtists.filter((artist) => artist.id !== selectedArtist.id);
    localStorage.setItem('favoritesArtists', JSON.stringify(newFavoritesArtists));
  }
}
