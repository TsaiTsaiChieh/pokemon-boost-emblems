
import {useTranslation} from 'react-i18next'
import EmblemCard from './EmblemCard'

const EmblemList = () => {
  const {t} = useTranslation()
  const pokemon: PokemonType[] = t('pokemon', {returnObjects: true})

  return (
    <div className="flex bg-light-4 gap-4 justify-center">
      {pokemon.map((ele) => <EmblemCard key={ele.id} id={ele.id} name={ele.name} skill_1={ele.skill_1[0]} skill_2={ele.skill_2[0]} categories={ele.categories} />)}
    </div>
  )
}

export default EmblemList