const express = require('express');
const app = express();

const port = 3000;

// route
app.get('/', (req, res) => {
    res.status(404).send('page not found');
});

// export app for testing
module.exports = app;

// run server only if manually started
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
