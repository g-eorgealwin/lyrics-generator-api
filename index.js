const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Example endpoint for generating lyrics
app.post('/generate-lyrics', (req, res) => {
    const { prompt } = req.body;

    // Here you would have logic to generate lyrics based on the prompt.
    // This is just a placeholder response.
    const lyrics = `Generated lyrics for: ${prompt}`;
    res.json({ lyrics });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
