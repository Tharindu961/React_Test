const express = require('express');
const cors = require('cors');

const app = express();

app.listen(4000, () => {
    console.log('Product server listening on port 4000')
});