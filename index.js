const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.post('/reverse-url', async (req, res) => {
    const { url } = req.body;
     console.log(`Reversing URL: ${url}`);
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
       
        const response = await axios.get(url);
        console.log(`Received response with status: ${response.data}`);
        res.json({ data: response.data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to reverse URL' });
    }
});

app.get('/', (req, res) => {
    res.send('Reverse Data Builder API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});