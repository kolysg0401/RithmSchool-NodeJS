const express = require('express');
const { Pet } = require('../models');
const router = express.Router();


router
  .route('')
  .get((req, res, next) => {
    return Pet.find().then(pets => {
      return res.render('index', { pets });
    }).catch(err => {
      return next(err);
    });
  })
  .post((req, res, next) => {
    return Pet.create(req.body).then(pet => {
      return res.redirect('/');
    }).catch(err => {
      return next(err);
    });
  });

router
  .route('/new')
  .get((req, res, next) => {
    return res.render('new');
  });

router
  .route('/:id')
  .get((req, res, next) => {
    return Pet.findById(req.params.id).then(pet => {
      return res.render('show', { pet });
    }).catch(err => {
      return next(err);
    });
  })
  .patch((req, res, next) => {
    return Pet.findByIdAndUpdate(req.params.id, { $set: {name: req.body.name}}).then(pet => {
      return res.redirect('/');
    }).catch(err => {
      return next(err);
    });
  })
  .delete((req, res, next) => {
    return Pet.findByIdAndRemove(req.params.id).then(pet => {
      return res.redirect('/');
    }).catch(err => {
      return next(err);
    });
  });


router
  .route('/:id/edit')
  .get((req, res, next) => {
    return Pet.findById(req.params.id).then(pet => {
      return res.render('edit', { pet });
    }).catch(err => {
      return next(err);
    });
  });


module.exports = router;
















