fetch('favorites.json')
  .then(response => response.json())
  .then(data => {
    const favoritesList = document.getElementById('favoritesList');
    data.forEach(subreddit => {
      const listItem = document.createElement('div');
      listItem.classList.add('subreddit-item');

      const icon = document.createElement('img');
      icon.src = subreddit.icon;
      icon.alt = subreddit.name;
      listItem.appendChild(icon);

      const link = document.createElement('a');
      link.textContent = subreddit.name;
      link.href = subreddit.link;
      link.target = '_blank';
      listItem.appendChild(link);

      favoritesList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error loading favorites:', error);
  });
