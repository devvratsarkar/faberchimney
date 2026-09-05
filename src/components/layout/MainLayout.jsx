import { Outlet } from 'react-router-dom'
import PrimaryHeader from './header/PrimaryHeader.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-svh bg-cream text-black">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
