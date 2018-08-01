const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post('/api/messages', bodyParser.json(), (req, res) => {
    // TODO: Validate the field types

    if(req.body.trackingNumber === null) {
      return res.status(400).json({
        message: 'Required',
        reason: 'ValidationError'
      })
    }

    // TODO: Store the message

    return res.sendStatus(204);
});

app.listen(8080);
