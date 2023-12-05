import { getArticleById, article_type } from "@/api/article";
import Gamming from "@/components/svg/Gamming";
import Physics from "@/components/svg/Physics";
import Programmer from "@/components/svg/Programmer";
import Math from "@/components/svg/Math";
import { toTitle } from "@/utils/article";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchArticle = async (id) => {
    // const res = await fetch(`/api/article?id=${id}`);
    setLoading(true);
    const res = await getArticleById(id);
    const article = await res.json();
    setArticle(article);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="dark:bg-zinc-900 min-h-screen">
      <div className="text-blue-500 text-4xl px-8 pt-3">
        <Link href="/">Cari.in</Link>
      </div>
      <div className="  w-screen flex flex-col items-center">
        <div className=" w-3/5">
          <div className="flex items-center px-1 py-5">
            {article?.type === article_type.GAMING ? (
              <Gamming width="50" />
            ) : article?.type === article_type.MATH ? (
              <Math width="50" />
            ) : article?.type === article_type.PHYSICS ? (
              <Physics width="50" />
            ) : article?.type === article_type.PROGRAMMERS ? (
              <Programmer width="50" />
            ) : null}
            <div className="flex flex-col justify-center items-start ps-2">
              <span className="p-0 m-0 text-2xl">
                {article?.type && toTitle(article?.type)}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold pb-5">{article?.title}</h1>
            <p className="text-xl">{article?.text}</p>
            <div className="py-3">
              tags:{" "}
              {article?.tags.map((tag, i) => (
                <span key={i} className="ps-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
