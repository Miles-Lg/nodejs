import express from "express"

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some en text</em>"
  }

  res.render("index", data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})