import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='col-span-4 relative overflow-hidden h-screen py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12'>
      <nav>
        <ul>
          <li>
            <Link to='/compose'>Compose</Link>
          </li>
          <li>
            <Link to='/sent'>Sent</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
