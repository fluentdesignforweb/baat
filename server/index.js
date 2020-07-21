const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());


//routes

//create a todo
app.post("/contacts", async(req, res) => {
    try {
        
        const contact = req.body;
        const newContact = await pool.query(
            "INSERT INTO contacts (uname, balance) VALUES($1, $2) RETURNING *", 
            [contact.name, contact.balance]
       );
        res.json(newContact.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})

//get all todos
app.get("/contacts", async(req, res) =>{
    try {
        const allContacts = await pool.query("SELECT * FROM contacts"); 
        res.json(allContacts.rows);
    } catch (error) {
        console.error(error);
    }
})

//get specific todo
app.get("/contacts/:uname", async (req, res) =>{
    try {
        
        console.log(req.params);
        const { uname } = req.params;
        const todo = await pool.query("SELECT * FROM contacts WHERE uname = $1", [uname]);
        res.json(todo.rows[0]);

    } catch (err) {
        console.log(err);
    }
})

//update todo
app.put("/todos/:id", async (req, res) =>{
    try {
        
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1  WHERE todo_id = $2;", 
            [description, id]
        );
        res.json("It got Updated");

    } catch (err) {
        console.log(err.message);
    }
})


//delete a todo
app.delete("/contacts/:uname", async (req, res) => {
    try {
        const { uname } = req.params;
        const deleteContact = await pool.query(
            "DELETE FROM contacts WHERE uname=$1",
            [uname]
        );

        res.json("It was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () =>{
    console.log("server has started on port 5000");
})