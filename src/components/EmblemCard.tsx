import {Level} from '../constants'

interface Props {
  ability: AbilityType
  pokemon: PokemonType
}
const EmblemCard = ({ability, pokemon}: Props) => {
  const {id, lv, positive, negative} = ability

  return (
    <li className='bg-white list-none w-48 h-32 rounded-lg shadow-custom p-3
    flex justify-between border-1 hover:border-light-3'>
      <div className='detail flex flex-col text-xs text-custom-black'>
        <h6 className='text-sm font-bold tracking-wide text-light-2'>{id}</h6>
        <span className='mt-3'>{positive}</span>
        <span className='mb-3'>{negative}</span>
        {pokemon.categories.map((ele, i) => (
          <img
            key={i}
            className='w-6'
            src={`/imgs/emblems/color/${ele}.png`}
            alt='color'
          />
        ))}
      </div>
      <div className='pokemon flex flex-col items-center'>
        <img
          className='w-20'
          src={`/imgs/emblems/${Level[lv]}/${parseInt(id)}.png`}
          alt='pokemon'
        />
        <label className='text-sm text-light-2 tracking-wide'>
          {pokemon.name}
        </label>
      </div>
    </li>
  )
}

export default EmblemCard
