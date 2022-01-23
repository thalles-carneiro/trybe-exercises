module.exports = (io, current) => {
  io.on('connection', (socket) => {
    socket.on('likePost', () => {
      current.likes += 1;

      io.emit('updateLikes', current.likes);
    });

    socket.on('starPost', () => {
      current.stars += 1;
      socket.broadcast.emit('updateStars', current.stars);
    });
  });
};
