const express = require('express');
const router = express.Router();

// Exemplo de rota inicial
router.get('/', (req, res) => {
    res.json({ message: 'API do gbcc!' });
});

module.exports = router;
