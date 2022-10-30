import {useTranslation} from 'react-i18next'

import EmblemCard from './EmblemCard'

const EmblemList = () => {
  const {t} = useTranslation()
  const abilities: AbilityType[] = t('abilities', {returnObjects: true})
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})

  return (
    <ul className='flex flex-wrap gap-4 justify-center'>
      {abilities.map((ele, i) => (
        <EmblemCard
          key={i}
          ability={ele}
          pokemon={pokemonList[parseInt(ele.id) - 1]}
        />
      ))}
    </ul>
  )
}

export default EmblemList
