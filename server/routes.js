const {
  addUser, getUsers, getUser, updateUser, deleteUser,
} = require('./controllers/User/UserCtrl');

module.exports = function routes(app) {
  app.get('/api/users', getUsers);
  app.get('/api/users/:id', getUser);
  app.post('/api/users', addUser);
  app.put('/api/users/:id', updateUser);
  app.delete('/api/users/:id', deleteUser);
};
