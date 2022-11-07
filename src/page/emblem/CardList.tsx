import {useTranslation} from 'react-i18next'

import {useAppSelector} from '../../store/hook'
import Card from './Card'

const CardList = () => {
  const {cards} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const characters: string[] = t('search_options.characters', {
    returnObjects: true,
  })

  return (
    <ul className='flex flex-wrap justify-center gap-4 pb-8
    custom-463:justify-between custom-1153:justify-start'>
      {cards.map((ele, i) => (
        <Card key={i}
          card={ele}
          pokemonName={pokemonList[parseInt(ele.id) - 1].name}
          props={
            ele.positive.length ?
              characters![ele.positive[0] as number] :
              undefined
          }
          cons={
            ele.negative.length ?
              characters![ele.negative[0] as number] :
              undefined
          } />
      ))}
      {/* {cards.map((ele, i) => {
        // if (i < 10) {
        return (
          <Card
            key={i}
            card={ele}
            pokemonName={pokemonList[parseInt(ele.id) - 1].name}
            props={
              ele.positive.length
                ? characters[ele.positive[0] as number]
                : undefined
            }
            cons={
              ele.negative.length
                ? characters[ele.negative[0] as number]
                : undefined
            }
          />
        );
        // }
      };)} */}
    </ul>
  )
}

export default CardList
