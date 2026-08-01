import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express()
const port = 3000

const password = "ILoveProgramming"

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
  const userInput = req.body["password"]

  if (userInput !== password) {
    res.sendFile(__dirname + "/public/index.html")
  } else {
    res.sendFile(__dirname + "/public/secrets.html")
    // res.redirect("/") /* both ways are valid */
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})