import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

function Layout({ children, home }) {
  const [term, setTerm] = useState('')

  return (
    <div>
      <header>
        <h1 className='font-bold text-2xl p-3 font-mono'>ESG Metrics</h1>
      </header>

      <div className={home ? 'my-32' : 'my-10'}>
        <input type='text' onChange={(e) => setTerm(e.target.value)} value={term}
          placeholder='Search by company and press enter ↵'
          className='p-2 block mx-auto text-xl w-3/4 border-2 border-slate-600 rounded-2xl'></input>
        <Link href={`/${term}`}>
          <a className='p-2 block w-20 mx-auto bg-slate-400 rounded-md'>Search</a>
        </Link>
      </div>

      {children}

      <footer className={styles.footer}>
        Made with ❤️
      </footer>
    </div>
  )
}

export default Layout