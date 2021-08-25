function removeFromLocalStorage(selectedTrack) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const newFavorites = favorites.filter((favorite) => favorite.id !== selectedTrack.id);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
}

export default removeFromLocalStorage;