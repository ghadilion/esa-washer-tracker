const express = require("express");
const cors = require("cors");
const app = express();
const port = 5005;

app.use(
   cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: false,
   })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
   res.setHeader("Cache-Control", "no-cache");
   res.setHeader("Content-Type", "text/event-stream");
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Connection", "keep-alive");
   res.flushHeaders(); // flush the headers to establish SSE with client

   let counter = 0;
   let interValID = setInterval(() => {
      counter++;
      if (counter >= 10) {
         clearInterval(interValID);
         res.end(); // terminates SSE session
         return;
      }
      res.write(`data: ${JSON.stringify({ num: counter })}\n\n`); // res.write() instead of res.send()
   }, 1000);

   // If client closes connection, stop sending events
   res.on("close", () => {
      console.log("client dropped me");
      clearInterval(interValID);
      res.end();
   });
});

app.post("/", (req, res) => {
   console.log(req.body);
   res.send(req.body);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
