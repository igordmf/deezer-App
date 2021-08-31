export function removeMusicFromLocalStorage(selectedTrack) {
  const favoritesMusics = JSON.parse(localStorage.getItem('favoritesMusics'));
  const newFavoritesMusics = favoritesMusics.filter((music) => music.id !== selectedTrack.id);
  localStorage.setItem('favoritesMusics', JSON.stringify(newFavoritesMusics));
}

export function removeAlbumFromLocalStorage(selectedAlbum) {
  const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
  const newFavoritesAlbums = favoritesAlbums.filter((album) => album.id !== selectedAlbum.id);
  localStorage.setItem('favoritesAlbums', JSON.stringify(newFavoritesAlbums));
}

export function removeArtistFromLocalStorage(selectedArtist) {
  const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
  const newFavoritesArtists = favoritesArtists.filter((artist) => artist.id !== selectedArtist.id);
  localStorage.setItem('favoritesArtists', JSON.stringify(newFavoritesArtists));
}