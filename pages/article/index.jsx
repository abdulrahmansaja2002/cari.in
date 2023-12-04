import Gamming from "@/components/svg/Gamming";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  const fetchArticle = async (id) => {
    const res = await fetch(`/api/article?id=${id}`);
    const article = await res.json();
    setArticle(article);
  };

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  return (
    <div className="dark:bg-zinc-900 min-h-screen">
      <div className="text-blue-500 text-4xl px-8 pt-3">
        <Link href="/">
          Cari.in
        </Link>
      </div>
      <div className="  w-screen flex flex-col items-center">
        <div className=" w-3/5">
          <div className="flex items-center px-1 py-5">
            <Gamming width="50" />
            <div className="flex flex-col justify-center items-start ps-2">
              <span className="p-0 m-0 text-2xl">Gamming</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold pb-5">{article?.title}</h1>
            <p className="text-xl">
              {article?.text} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Officia rem nisi atque quis eius alias
              dignissimos nulla facere fugit! Quae doloribus itaque ex, minima
              pariatur adipisci ab ullam dolor ipsam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium quaerat eaque aut.
              Dolores nostrum, repellat quaerat aut soluta beatae unde
              cupiditate eveniet itaque tenetur provident, qui accusamus
              veritatis exercitationem iste. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sequi, ab rerum iste in adipisci
              nostrum placeat commodi et porro, at fuga repellat vero, impedit
              error eaque soluta qui? Culpa, tenetur.
            </p>
            <div className="py-3">
              tags:
              <span className="ps-2">tag1</span>
              <span className="ps-2">tag2</span>
              <span className="ps-2">tag3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
