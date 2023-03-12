const express = require('express');
const PORT = 3011;

//express instance
const app = express();

app.listen(PORT, () => 
console.log(`Server started. Listening to ${PORT}`));