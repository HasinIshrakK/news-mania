import { useParams } from 'react-router'

function NewsDetails() {
  const { id } = useParams()

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">News Article {id}</h1>
      <p>
        Full news content will be displayed here once backend integration is done.
      </p>
    </div>
  )
}

export default NewsDetails