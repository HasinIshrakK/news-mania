import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Filters from "../components/Filters";
import { getNews } from "../services/api";

function Dashboard() {
    const [filters, setFilters] = useState({});
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const res = await getNews(filters);
            setNews(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [filters]);

    return (
        <div>
            <Filters setFilters={setFilters} />

            {loading && <p className="text-center mt-6">Loading news...</p>}

            {!loading && news.length === 0 && (
                <p className="text-center mt-6">No articles found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {news.map((article) => (
                    <NewsCard key={article._id} article={article} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;