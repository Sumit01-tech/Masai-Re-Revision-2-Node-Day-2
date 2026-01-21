module.exports = (req, res, next) => {
    if (req.cookies.auth === "true") {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
};
