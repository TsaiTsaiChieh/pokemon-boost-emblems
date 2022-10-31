import {Level} from '../constants'

interface Props {
  ability: AbilityType
  pokemon: PokemonType
}
const EmblemCard = ({ability, pokemon}: Props) => {
  const {id, lv, positive, negative} = ability

  return (
    <li
      className='bg-white list-none w-52 h-32 rounded-lg shadow-light p-3
    flex justify-between border-2 border-transparent hover:border-light-1
    dark:bg-dark-2 dark:shadow-dark hover:dark:border-dark-4'
    >
      <div className='detail flex flex-col text-xs text-light-2
      dark:text-white'>
        <h6
          className='text-sm font-bold tracking-wide text-light-1
        dark:text-dark-4'
        >
          {id}
        </h6>
        <span className='mt-3'>{positive}</span>
        <span className='mb-3'>{negative}</span>
        <div className='categories flex'>
          {pokemon.categories.map((ele, i) => (
            <img
              key={i}
              className='w-6'
              src={`imgs/emblems/color/${ele}.png`}
              alt={ele.toString()}
            />
          ))}
        </div>
      </div>
      <div className='pokemon flex flex-col items-center'>
        <img
          className='w-20'
          src={`imgs/emblems/${Level[lv]}/${parseInt(id)}.png`}
          alt={pokemon.name}
        />
        <label className='text-sm text-light-1 tracking-wide dark:text-dark-4'>
          {pokemon.name}
        </label>
      </div>
    </li>
  )
}

export default EmblemCard
