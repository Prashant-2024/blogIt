import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
var newBlog;
app.use(express.static("public"));


function addBlog(req, res, next) {
  newBlog = req.body["blog"];
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(addBlog);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    console.log(newBlog);
  res.render("index.ejs", { blogs: newBlog });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server is listening at ${port}.`);
});
