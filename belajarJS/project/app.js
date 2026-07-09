const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end(`
            <h1>Server Informasi Kampus</h1>
            <p>Selamat Datang di Server Informasi Kampus.</p>
        `);

    } else if (req.url === "/profil") {
        res.end(`
            <h1>Profil Kampus</h1>
            <p>Nama Kampus : Universitas Contoh</p>
            <p>Alamat : Jakarta</p>
        `);

    } else if (req.url === "/mata-kuliah") {
        res.end(`
            <h1>Mata Kuliah</h1>
            <ul>
                <li>Pemrograman Dasar</li>
                <li>Basis Data</li>
                <li>Jaringan Komputer</li>
            </ul>
        `);

    } else if (req.url === "/kontak") {
        res.end(`
            <h1>Kontak</h1>
            <p>Email : info@kampus.ac.id</p>
            <p>Telepon : 0812-3456-7890</p>
        `);

    } else if (req.url === "/tentang") {
        res.end(`
            <h1>Tentang</h1>
            <p>Mini Project Node.js Server Informasi Kampus.</p>
        `);

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>404</h1>
            <p>Halaman tidak ditemukan.</p>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});