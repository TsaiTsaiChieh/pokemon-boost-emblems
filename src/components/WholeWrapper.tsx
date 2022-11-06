import {ReactNode} from 'react'

interface Props {
  children: ReactNode
}
const WholeWrapper = ({children}: Props) => {
  return (
    <div className='bg-light-4 dark:bg-dark-1 min-h-screen
    bg-texture w-full relative'>
      <div
        id='gloss'
        className='w-full h-478 fixed bg-gloss'
      />
      {children}
    </div>
  )
}

export default WholeWrapper
