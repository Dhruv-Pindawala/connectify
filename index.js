const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors = {
        origin: "*", //allow access from all origins
        methods: ["GET", "POST"] //access control allow methods are mentioned here
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000; // default port is 5000

app.get("/", (req, res) => {
    res.send("Server is active.");
});

server.listen(PORT, () => console.log(`Server listening via port ${PORT}`));