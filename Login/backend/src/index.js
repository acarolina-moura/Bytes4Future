const express = require ("express")
const app = express()
const PORT = 3030;
const routes = require('./routes');


app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, ()=>
    {console.log(`Listening on PORT ${PORT}`)
})