import NewsCard from '../components/NewsCard'

const mockArticles = [
  {
    _id: '1',
    title: 'AI is transforming industries',
    creator: ['John Doe'],
    pubDate: '2026-02-20',
    source_id: 'TechCrunch',
    description: 'Artificial Intelligence continues to reshape global markets...',
  },
  {
    _id: '2',
    title: 'Global markets rally',
    creator: ['Jane Smith'],
    pubDate: '2026-02-19',
    source_id: 'Bloomberg',
    description: 'Stock markets are experiencing strong recovery...',
  },
]

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockArticles.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  )
}

export default Dashboard