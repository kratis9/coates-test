import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export function Layout() {
  return (
    <div className='bg-red-50'>
      <main className='overflow-hidden'>
        <section className='relative bg-white' aria-labelledby='mailer'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <div className='grid grid-cols-12'>
                <Nav />
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
