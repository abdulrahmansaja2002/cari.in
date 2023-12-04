import { data } from "./search";

export default function handler(req, res) {
  const { id } = req.query;
  const article = data[parseInt(id)];
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
}
