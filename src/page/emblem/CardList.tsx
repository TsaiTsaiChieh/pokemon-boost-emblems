import {useAppSelector} from '../../store/hook'
import Card from './Card'

const CardList = () => {
  const {cards} = useAppSelector((state) => state.pokemon)

  return (
    <ul className='flex flex-wrap justify-center gap-4 pb-8
    custom-463:justify-between'>
      {cards.map((ele, i) => (
        <Card key={i} card={ele} />
      ))}
    </ul>
  )
}

export default CardList
