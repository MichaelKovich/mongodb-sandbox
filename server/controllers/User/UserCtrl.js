const User = require('./User');

module.exports = {
  addUser(req, res) {
    new User(req.body).save((err, user) => {
      // could just make the function below into a helper function since it's so often repeated
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  },
  getUsers(req, res) {
    User.find((err, user) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  },
  getUser(req, res) {
    User.findOne({_id: req.params.id}, (err, user) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  },
  updateUser(req, res) {
    // by default, it's looking for an id as the first argument
    // if anything in the req.body is not in the schema, it will be disregarded
    // will return the old version of the user
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  },
  deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  },
};
