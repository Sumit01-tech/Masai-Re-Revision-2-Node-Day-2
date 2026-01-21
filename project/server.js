const express = require("express");
const cookieParser = require("cookie-parser");

const protectedRoutes = require("./routes/protected.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/login", (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return res.status(401).send("Authorization header missing");
    }

    const base64 = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");

    if (username === "admin" && password === "1234") {
        res.cookie("auth", "true", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
        });
        return res.send("Login successful");
    }

    res.status(401).send("Invalid credentials");
});

app.use("/protected", protectedRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
