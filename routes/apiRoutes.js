var db = require('../models');

module.exports = (app) => {
  // get all equipment
  app.get('/api/equipment', (req, res) => {
    db.Equipment.findAll({
      include: [ models.Plugin ]
    }).then((equipment) => {
      res.json(equipment);
    })
  })
  
  // get all clients
  app.get('/api/clients', (req, res) => {
    db.Client.findAll({}).then((clients) => {
      res.json(clients);
    });
  });

  //
  //
  // admin 
  //
  //
  // just a preliminary skeleton, our admin functionality will live here and in a client side js file with the event listeners
  app.post('/contact', (req, res) => {
    db.Contact.create(req.body).then((dbContact) => {
      res.json(dbContact);
    });
  });

  app.post('/equipment/admin', (req, res) => {
    db.Equipment.create(req.body).then((equipment) => {
      res.json(equipment); // return result and append html on client side via jQuery
                           // would be nice if this was a preview where the changes could be undone or edited 
    });
  })

  app.put('/equipment/admin', (req, res) => {
    db.Equipment.update({
      x: y,
      where: {
        id: req.body.id
      }
    }).then((equipment) => {
      res.json(equipment); // "
    });
  })

  app.delete('/equipment/admin', (req, res) => {
    db.Equipment.destroy({
      where: {
        x: y
      }
    }).then((equipment) => {
      res.json(equipment); // "
    });
  });

  app.post('/clients/admin', (req, res) => {
    db.Client.create(req.body).then((dbExample) => {
      res.json(clients); 
    });
  });

  app.put('/clients/admin', (req, res) => {
    db.Client.update({
      x: y,
      where: {
        id: req.body.id
      }
    });
  });

  app.delete('/clients/admin', (req, res) => {
    db.Client.destroy({ 
      where: { 
        id: req.body.id 
      } 
    }).then((clients) => {
      res.json(clients);
    });
  });
};
