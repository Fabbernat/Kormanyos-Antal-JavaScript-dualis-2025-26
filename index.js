 import express from "express";

 let PORT = 3000;
app = express()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

