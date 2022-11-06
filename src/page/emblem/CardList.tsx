import {useAppSelector} from '../../store/hook'
import Card from './Card'

const CardList = () => {
  const {cards} = useAppSelector((state) => state.pokemon)

  return (
    <ul className='flex flex-wrap justify-around gap-4 py-8'>
      {cards.map((ele, i) => (
        <Card
          key={i}
          card={ele}
        />
      ))}
    </ul>
  )
}

export default CardList
