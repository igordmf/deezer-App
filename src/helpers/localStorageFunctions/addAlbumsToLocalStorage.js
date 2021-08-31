function addAlbumsToLocalStorage(selectedAlbum) {
  const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
  if(favoritesAlbums) {
    if(favoritesAlbums.some((album) => album.id === selectedAlbum.id)) return;
    const newFavoritesAlbums = [...favoritesAlbums, selectedAlbum];
    localStorage.setItem('favoritesAlbums', JSON.stringify(newFavoritesAlbums));
  } else {
    localStorage.setItem('favoritesAlbums', JSON.stringify([selectedAlbum]));
  }
}

export default addAlbumsToLocalStorage;