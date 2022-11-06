import {ReactNode} from 'react'

interface Props {
  children: ReactNode
}
const WholeWrapper = ({children}: Props) => {
  return (
    <div className='bg-light-4 dark:bg-dark-1 min-h-screen
    bg-texture w-full relative'>
      {children}
    </div>
  )
}

export default WholeWrapper
