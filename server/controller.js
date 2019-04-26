module.exports = {
  getAll(req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_all_houses()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
  },

  addListing(req, res) {
    const dbInstance = req.app.get('db');
    const {name, address, city, state, zip} = req.body;
 
    dbInstance.create_listing([name, address, city, state, zip])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
  },

  deleteListing(req, res) {
    const dbInstance = req.app.get('db');
    const { id } = req.params

    dbInstance.delete_listing([id])
    .then(() => res.sendStatus(200))
    .catch(err => res.send(err))
  }
}