import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="text-xl font-bold px-4">News Dashboard</a>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout