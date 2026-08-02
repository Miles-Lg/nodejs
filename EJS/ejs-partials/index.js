import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs")

// Step 1: Render the home page "/" index.ejs
app.get("/", (req, res) => {
  res.render("index")
})

// Step 2: Make sure that static files are linked to and the CSS shows up.
app.use(express.static("public"))

// Step 3: Add the routes to handle the render of the about and contact pages.
// Hint: Check the nav bar in the header.ejs to see the button hrefs
app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})

// Step 4: Add the partials to the about and contact pages to show the header and footer on those pages.






app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
