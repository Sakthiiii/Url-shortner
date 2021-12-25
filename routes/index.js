const express = require('express');
const router= express.Router();

const Url = require("../model/url");
router.get('/:code', async (req,res)=> {
    try {
        console.log(req.params.code);
        const url = await Url.findOne({ urlCode: req.params.code });
        if (url) {
          url.clicks++;
          url.save();
          return res.redirect(url.longUrl);
        } else {
          return res.status(404).json('No url found');
        }
      } catch (err) {
        console.error(err);
        res.status(500).json('Server error...');
      }
    });
    
    module.exports = router;