const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())
 const MusicRouters = require("./src/Routers/musicasRouters")

 app.use("/musicas", MusicRouters)

 app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
console.log(`API MVC implementada com sucesso!`);
});