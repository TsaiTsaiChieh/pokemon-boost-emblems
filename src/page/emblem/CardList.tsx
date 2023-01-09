import {useTranslation} from 'react-i18next'

import {useIntersect} from '../../hooks/useIntersect'
import {useAppSelector} from '../../store/hook'
import {Card} from './Card'

const CardList = () => {
  const {cards} = useAppSelector((state) => state.pokemon)
  const [uids, lastItemRef] = useIntersect(cards)
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})

  return (
    <ul
      className='flex flex-wrap justify-center gap-4 pb-8
      custom-481:justify-between'
    >
      {uids.map((uid, i) => {
        // should not render before arr state update finish
        if (uids.length <= cards.length) {
          const card = cards[i]
          const pokemonName = pokemonList[parseInt(card.id) - 1].name
          const ref = i === uids.length - 1 ? lastItemRef : null
          return (
            <Card
              key={uid}
              ref={ref}
              pokemonName={pokemonName}
              card={card}
            />
          )
        }
      })}
    </ul>
  )
}

export default CardList
