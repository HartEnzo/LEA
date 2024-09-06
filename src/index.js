const express = require("express")
const estudante_router = require("./routes/routes.estudantes.js")
const aluguel_router = require("./routes/routesaluguel.js")
const livros_router = require("./routes/routeslivro.js")
const app = express()
const port = 5000

app.use(express.json())


app.use("/aluguel", aluguel_router)
app.use("/estudande", estudante_router)
app.use("/livros", livros_router)


app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})