document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search');
  const playButton = document.querySelector('.click');
  const clearButton = document.querySelector('.clear');
  const player = document.querySelector('.player');

  function play(url) {
    const selectedRoute = routes[0]; // 只有一个解析线路，直接使用第一个
    if (url) {
      player.src = selectedRoute.url + encodeURIComponent(url);
    }
  }

  playButton.addEventListener('click', function () {
    play(searchInput.value);
  });

  clearButton.addEventListener('click', function () {
    searchInput.value = '';
    player.src = '';
  });

  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      play(searchInput.value);
    }
    if (event.key === 'Escape') {
      searchInput.value = '';
    }
  });
});
