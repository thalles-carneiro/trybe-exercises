const socket = window.io();

const currentLikesElement = document.getElementById('currentLikes');
socket.on('updateLikes', (likes) => {
  currentLikesElement.innerText = likes;
});

const currentStarsElement = document.getElementById('currentStars');
socket.on('updateStars', (stars) => {
  currentStarsElement.innerText = stars;
});

const likeIcon = document.getElementById('likeIcon');
likeIcon.addEventListener('click', () => {
  socket.emit('likePost');
});

const starIcon = document.getElementById('starIcon');
starIcon.addEventListener('click', () => {
  let currentStars = Number(currentStarsElement.innerText);

  currentStarsElement.innerText = currentStars + 1;

  socket.emit('starPost');
});