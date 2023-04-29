const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(
   cors({
      origin: "http://localhost:3000",
      methods: ["GET"],
      allowedHeaders: ["Content-Type"],
      credentials: false,
   })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let washTimes = [6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000]; // initial wash times set as 60 mins
function updateWashTimes({ machine_timers }){
   washTimes = machine_timers;
}

// app.get("/", (req, res) => {
//    res.setHeader("Cache-Control", "no-cache");
//    res.setHeader("Content-Type", "text/event-stream");
//    res.setHeader("Access-Control-Allow-Origin", "*");
//    res.setHeader("Connection", "keep-alive");
//    res.flushHeaders(); // flush the headers to establish SSE with client

//    // server sends updated wash times to client every 5 seconds
//    const sendUpdatedTimes = setInterval(() => {
//       res.write(`data: ${JSON.stringify({ updatedTimes: washTimes })}\n\n`); // res.write() instead of res.send()
//    }, 5000);

//    // If client closes connection, stop sending events
//    res.on("close", () => {
//       console.log("SSE connection closed by client !");
//       clearInterval(sendUpdatedTimes);
//       res.end();
//    });
// });

app.get("/", (req, res) => {
   res.status(200).json({ data: washTimes });
})

app.post("/", (req, res) => {
   console.log(res.body);
   updateWashTimes(req.body);
   res.send("ok"); // closing response without sending unnecessary data
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
