import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"
import { type } from "os"

inquirer
  .prompt([
    {
      message: "Type ing your URL: ",
      name: "URL"
    }
  ])
  .then(answer => {
    const url = answer.URL
    const qr_img = qr.image(url)
    qr_img.pipe(fs.createWriteStream("qr_img.png"))

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err
      console.log("The file has been saved")
    })
  })
  .catch(error => {
    if (error.isTtyError) {
      console.log("prompt couldn't be rendered int he current environment")
    } else {
      console.error("Something else went wrong", error)
    }
  })