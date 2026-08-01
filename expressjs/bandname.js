import express from "express"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express()
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))
let bandName

app.use(express.urlencoded({ extended: true }))

/*
  Just wanted to use this function in order to practice "custom middleware"
  I could have put the bandName directly in the app.post(...)
 */
function logger(req, res, next) {
  bandName = req.body["name"] + req.body["surname"]
  next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post('/submit', (req, res) => {
  res.send(`
    <h1>Band Name:</h1>
    <p>${bandName} 🔥</p>
    `)
})

app.use(logger)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})