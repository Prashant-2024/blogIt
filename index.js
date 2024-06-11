import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
var blogs = [];
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.post("/submit", (req, res) => {
  const { blogTitle, blogContent } = req.body;
  const newBlog = {
    title: blogTitle,
    content: blogContent,
    date: new Date().toDateString(),
  };
  blogs.unshift(newBlog);
  res.redirect("/");
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server is listening at ${port}.`);
});
