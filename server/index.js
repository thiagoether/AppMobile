
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bditens",
})

app.post("/", (req, res) =>{

    let p_maior = req.param('p_maior');
    let p_menor = req.param('p_menor');
    let alt = req.param('alt');
    let larg = req.param('larg');

    let SQL = "INSERT INTO NewTable ( p_maior, p_menor, alt, larg ) VALUES ('"+p_maior+"', '"+p_menor+"', '"+alt+"', '"+larg+"')";
                                                                   

    db.query(SQL, (err, result) => {
        console.log(err);
        res.send(result);
    })
})

app.get("/", (req, res) =>{

    let SQL = "select * from NewTable";

    db.query(SQL, (err, result) => {
        console.log(result);
        res.send(result);
    })
})

app.delete("/", (req, res) =>{

    let id = req.param('id');
    let SQL = "DELETE from	NewTable where id='"+id+"'";

    db.query(SQL, (err, result) => {
        console.log(result);
        res.send(result);
    })
})


app.listen(3001, () => {
    console.log("rodando servidor");
});