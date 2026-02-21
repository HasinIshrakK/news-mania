import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSingleNews } from "../services/api";

function NewsDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await getSingleNews(id);
        setArticle(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!article) return <p className="text-center mt-10">Article not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-lg rounded-xl mt-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <p className="opacity-70 mb-2">
        {article.creator?.join(", ") || "Unknown"} •{" "}
        {new Date(article.pubDate).toDateString()} • {article.source_id}
      </p>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="rounded-lg mb-4"
        />
      )}

      <p className="leading-7">{article.content || article.description}</p>

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline mt-6"
      >
        View Original Source
      </a>
    </div>
  );
}

export default NewsDetails;