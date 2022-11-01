import Header from './components/Header'
import Emblem from './page/Emblem'

const App = () => {
  return (
    <div
      className='bg-light-4 dark:bg-dark-1 min-h-screen
    bg-texture w-full relative'
    >
      <Header />
      {/* <div
        id='gloss'
        className='w-full h-478 fixed bg-gloss'
      ></div> */}
      <Emblem />
    </div>
  )
}

export default App
