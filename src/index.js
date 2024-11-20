require ("dotenv").config();
const express = require ("express");
const app = express();
const {dbConnection}=require ("./database/confing");
const cors =require ("cors")

dbConnection();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("welcome to my API")
});

app.use ("/api/organizacion", require ("./routes/org.routes"));
app.use ("/api/miembros/", require ("./routes/miembros.routes"));
app.use ("/api/noticia/", require ("./routes/noticia.routes"));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor en línea en el ${process.env.PORT}`);
});