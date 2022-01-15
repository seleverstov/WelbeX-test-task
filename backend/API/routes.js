const express = require('express');
const router = express.Router();
const getData = require('./getData');
const addNewRow = require('./addNewRow');
const getCount = require('./getCount');
const filterData = require('./filterData');
router.get('/api/getData', (req, res) => {
    getData(req.query).then(data => {
        res.json(data);
    });
});
router.get('/api/getCount', (req, res) => {
    getCount().then(data => {
        res.json(data);
    });
});
router.get('/api/filterData', (req, res) => {
    console.log(req.query);
    filterData(req.query).then(data => {
        res.json(data);
    });
});
router.post('/api/addNewRow/', (req, res) => {
    addNewRow(req.body).then(response => {
        if (response) res.json({result: true});
    });
});
module.exports = router;
