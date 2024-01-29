const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/:pathParam?", (req, res) => {
  try {
    const queryParam = req.query.queryParam;
    const pathParam = req.params.pathParam;

    return res.status(200).json({
      info: "success",
      query_param: queryParam || null,
      path_param: pathParam || null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "something went wrong" });
  }
});

app.post("/", (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: "json data should be an array." });
    }

    res.status(200).json({
      info: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ info: "something went wrong" });
  }
});

app.listen(port, () => console.log(`server is listening on ${port}`));
