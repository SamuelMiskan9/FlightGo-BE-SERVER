
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import FileUpload from "express-fileupload";
dotenv.config();
const app = express();
 
// app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);
// Create table
(async () => {
    await db.sync();
})();
app.listen(process.env.PORT, ()=> console.log(`server is running`))