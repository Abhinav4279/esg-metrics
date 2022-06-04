import styles from '../styles/Home.module.css'

function Layout({ children }) {
  return (
    <div>
      <header>
        <h1 className='font-bold text-2xl'>ESG Metrics</h1>
      </header>

      <input type='text' placeholder='Search company and press enter ↵'></input>
      
      {children}

      <footer className={styles.footer}>
        Made with ❤️
      </footer>
    </div>
  )
}

export default Layout