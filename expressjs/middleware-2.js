import express from "express"
import morgan from "morgan"

const app = express()
const port = 3000

function custom_function(req, res, next) {
  console.log("_" * 15)
  console.log("Req method:", req.method + ". Req url:", req.url)
  next()
}


app.use(custom_function)

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
})

app.post("/submit", (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})



// app.use(morgan("combined"))
// app.use((req, res, next) => {
//   console.log("Request  method:", req.method)
//   next()
// })

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))