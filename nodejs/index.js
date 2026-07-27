const fs = require("fs")

fs.writeFile("test.txt", "Hello from the backend", (err) => {
  if (err) throw err
  console.log("File saved successfully")
})

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err
  console.log(data)
})
