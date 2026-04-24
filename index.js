const express = require('express');
const app = express();

const port = 3000;

// home route
app.get('/', (req, res) => {
    res.send('WELCOME TO CLOUD CI/CD APP 🚀');
});

// health check route (important in companies)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 404 handler (must be last)
app.use((req, res) => {
    res.status(404).send('page not found');
});

// export for testing
module.exports = app;

// run only if manual start
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
