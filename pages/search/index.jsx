import { search, article_type } from "@/api/article";
import Gamming from "@/components/svg/Gamming";
import Physics from "@/components/svg/Physics";
import Programmer from "@/components/svg/Programmer";
import Math from "@/components/svg/Math";
import { toTitle } from "@/utils/article";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState({
    total: 0,
    docs: [],
    time: 0
  }); // [seconds]
  const [input, setInput] = useState(""); // [seconds
  const [loading, setLoading] = useState(true);
  const fetchSearchResults = async (query) => {
    // fetch search results
    setLoading(true)
    // const res = await fetch(`/api/search?query=${query}`);
    const res = await search(query);
    const results = await res.json();
    setSearchResults(results);
    setLoading(false)
  };
  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
      setInput(query);
    }
  }, [query]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <div className="flex py-6">
        <div className="text-blue-500 text-4xl px-8">
          <Link href="/">Cari.in</Link>
        </div>
        <form action="/search" method="get" className="w-2/4 flex">
          <label className="relative block w-full">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-2 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block h-11 rounded-full w-full  bg-transparent border-2 py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="query"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </form>
      </div>
      <hr />
      <div className="ps-40 p-5">
        <small className="py-5">
          About {searchResults.total} results ({searchResults.time} seconds)
        </small>
        <div>
          <p className="text-xl">Displays results for {query}</p>
        </div>
        <div className=" w-7/12">
          {searchResults.docs.map((result, i) => (
            <div className="w-full py-2" key={i}>
              <div className="flex items-center">
                {result.type === article_type.GAMING ? (
                  <Gamming width="40" />
                ) : result.type === article_type.MATH ? (
                  <Math width="40" />
                ) : result.type === article_type.PHYSICS ? (
                  <Physics width="40" />
                ) : result.type === article_type.PROGRAMMERS ? (
                  <Programmer width="40" />
                ) : null}
                <div className="flex flex-col justify-center items-start ps-2">
                  <span className="p-0 m-0">{toTitle(result.type)}</span>
                  <small className="p-0">{window.location.origin}</small>
                </div>
              </div>
              <Link href={`/article/?id=${result.id}`} className="hover:underline">
                {" "}
                <p className="truncate text-2xl">
                  {result.title}
                </p>
              </Link>
              <p className=" w-full line-clamp-3 text-slate-300">
                {result.text}
              </p>
              {result.tags.map((tag, i) => (
                <p
                  key={i}
                  className="text-slate-600 bg-slate-400 rounded-full inline-block px-2 m-1 text-xs"
                >
                  {tag}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
