function addMusicsToLocalStorage(selectedTrack) {
  const favoritesMusics = JSON.parse(localStorage.getItem('favoritesMusics'));
  if(favoritesMusics) {
    if(favoritesMusics.some((music) => music.id === selectedTrack.id)) return;
    const newFavorites = [...favoritesMusics, selectedTrack];
    localStorage.setItem('favoritesMusics', JSON.stringify(newFavorites));
  } else {
    localStorage.setItem('favoritesMusics', JSON.stringify([selectedTrack]));
  }
}

export default addMusicsToLocalStorage;