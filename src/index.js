import dotenv from "dotenv";
dotenv.config({
  path: "./.env/",
  override: true,
});
let myusername = process.env.database;
console.log(myusername);
console.log("Start of backend");
