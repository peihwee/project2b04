const connection = require("../db");

module.exports.getAllInventory = function(req, res, next)
{
    const sql = "SELECT * FROM message";
    const value = [];
    
    connection.promise().query(sql, value)
    .then(([rows,fields]) => {
        console.log(rows);
        res.json(rows);
    })
    .catch((error) => {
        res.send(error);
    });
}

module.exports.getInventoryByID = function(req, res, next)
{
    res.send("getInventoryByID");
}

module.exports.addInventory = function(req, res, next) {

    const sql = "INSERT INTO message (`message`, `userId`) VALUES (?, ?)";
    const value = [req.body.message, req.body.userId];

    connection.promise().query(sql, value)
    .then(([rows,fields]) => {
        console.log(rows);
        res.json(rows);
    })
    .catch((error) => {
        res.send(error);
    });
};
