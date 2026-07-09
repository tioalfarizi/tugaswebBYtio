const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Selamat Datang di Praktikum Pemrograman Dasar</h1>");

    } else if (req.url === "/profil") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Profil Mahasiswa</h1>");

    } else if (req.url === "/mata-kuliah") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Mata Kuliah</h1>");

    } else if (req.url === "/kontak") {

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Kontak</h1>");

    } else {

        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Halaman Tidak Ditemukan</h1>");

    }

});

server.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});