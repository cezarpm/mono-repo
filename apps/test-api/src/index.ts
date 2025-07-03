import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Habilita CORS para todas as origens (ideal para dev)
app.use(cors());

interface Book {
  id: number;
  title: string;
  author: string;
}

const books: Book[] = [
  { id: 1, title: "O Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "Código Limpo", author: "Robert C. Martin" },
];

app.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
