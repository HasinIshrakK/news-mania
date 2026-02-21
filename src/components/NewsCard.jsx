import { Link } from 'react-router'

function NewsCard({ article }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{article.title}</h2>

        <p className="text-sm text-gray-500">
          {article.creator?.[0] || 'Unknown'} •{' '}
          {new Date(article.pubDate).toLocaleDateString()} •{' '}
          {article.source_id}
        </p>

        <p className="line-clamp-3">{article.description}</p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/news/${article._id}`} className="btn btn-primary btn-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard