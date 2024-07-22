import express from 'express'; 

const app = express(); 
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello Express JS framework! The minimal framework</h1>');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
