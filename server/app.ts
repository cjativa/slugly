import * as express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 4000;
const buildPath = path.join(__dirname, '../build');

app.use(express.json());
app.use(express.static(buildPath));


app.get('/*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server listening on port', port);
});