import Image from 'next/image'
import Header from './components/header'
import MainBody from './components/app'
export default function Home () {
  return (
    <>
      <div className='app'>
        <Header />
        <MainBody />
      </div>
    </>
  )
}
