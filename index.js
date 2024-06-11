import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})


app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server is listening at ${port}.`);
});
