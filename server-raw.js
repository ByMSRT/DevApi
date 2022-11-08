import http from "http";

const server = http.createServer((req, res) => {
    const products = [{
            id: 1,
            name: "Iphone 14 Pro",
            color: "Black",
        },
        {
            id: 2,
            name: "Iphone 13 Pro",
            color: "Blue",
        },
    ];

    if (req.url === "/api/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Route Not Found, you need to go at /api/products",
            })
        );
    }

    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});