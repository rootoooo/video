document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search');
  const playButton = document.querySelector('.click');
  const clearButton = document.querySelector('.clear');
  const player = document.querySelector('.player');
  const routeList = document.querySelector('.list');

  function play(url) {
    const selectedRoute = routes.find(route => route.name === currentRoute);
    player.src = selectedRoute.url + url;
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

  // Add routes to the route list
  routes.forEach(route => {
    const li = document.createElement('li');
    li.textContent = route.name;
    li.addEventListener('click', function () {
      currentRoute = route.name;
      document.querySelector('.route .title').textContent = currentRoute;
      routeList.style.display = 'none';
    });
    routeList.appendChild(li);
  });

  let currentRoute = routes[0].name;
  document.querySelector('.route .title').textContent = currentRoute;
});
