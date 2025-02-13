import express from "express";
import cors from "cors";

import { userRoute } from "./routes/user.routes";
import { productRoute } from "./routes/product.routes";
import bodyParser from "body-parser";
import { searchRoute } from "./routes/search.routes";
import { basketRoute } from "./routes/basket.routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/search", searchRoute);
app.use("/basket", basketRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
