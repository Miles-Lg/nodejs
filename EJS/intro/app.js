import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
// app.set("view engine", "ejs");


app.get("/submit", (req, res) => {
  let today = new Date().getDay()
  let type = "a weekday"
  let advice = "it's time to work hard"

  if (today === 0 || today === 6) {
    type = "the weekend"
    advice = "it's time to have fun"
  }

  res.render("index.ejs", {
    time: type,
    toDo: advice
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})