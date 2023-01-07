import clsx from 'clsx'

import {useAppSelector} from '../store/hook'

const Loading = () => {
  const {isDarkMode} = useAppSelector((state) => state.persist)
  const CN = clsx(
    'w-full h-screen flex justify-center',
    {'bg-light-4': !isDarkMode},
    {'bg-dark-1': isDarkMode},
  )

  return (
    <div className={CN}>
      <img src='favicon.svg' className='w-11 animate-spin' />
    </div>
  )
}

export default Loading
