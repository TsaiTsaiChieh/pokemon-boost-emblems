import {useAppSelector} from '../store/hook'
import EmblemCard from './EmblemCard'

const EmblemList = () => {
  const {cards} = useAppSelector((state) => state.pokemon)

  return (
    <ul className='flex flex-wrap gap-4 justify-center'>
      {cards.map((ele, i) => (
        <EmblemCard
          key={i}
          card={ele}
        />
      ))}
    </ul>
  )
}

export default EmblemList
