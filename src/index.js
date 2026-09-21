import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
  override: true,
});
let myport = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(myport, () => {
      console.log(`Example app listing on port http://localhost:${myport}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  });
