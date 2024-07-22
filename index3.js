import express from 'express'; 
import data from './data/MOCK_DATA.json' assert { type: 'json' };

const app = express(); 

const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/read", (req, res) => {
    res.json(data);
});

app.post("/create", (req, res) => {
    const newData = req.body;
    // Here, you might want to add logic to handle the new data, such as saving it to a file or database
    res.json({
        message: "Data received successfully",
        data: newData
    });
});

app.put("/update", (req, res) => {
    res.send('Updating a new record');
});

app.delete("/delete", (req, res) => {
    res.send('Deleting a new record');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
