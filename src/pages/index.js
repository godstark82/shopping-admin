import Header from './components/header'
import MainBody from './components/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from './components/footer'

export default function Home () {
  const router = useRouter()
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn != 'true') {
      router.push('/screens/auth/login')
    }
  }, [router])
  return (
    <>
      <div className='app'>
        <Header activeItem='overview' />
        <MainBody />
        <Footer />
      </div>
    </>
  )
}
