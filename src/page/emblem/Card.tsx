import {forwardRef, Ref} from 'react'

import classNames from 'classnames'
import * as i18n from 'i18next'

import {Level, Metric} from '../../constants'

interface Props {
  card: PokemonCardType
  pokemonName: string
}
export const Card = forwardRef((props: Props, ref: Ref<HTMLLIElement>) => {
  const Characters: string[] = i18n.t('search_options.characters', {
    returnObjects: true,
  })
  const {card, pokemonName} = props
  const {id, lv, categories, positive, negative} = card
  const propsCN = classNames('mt-2', {
    'text-transparent': positive === undefined,
  })
  const consCN = classNames('mb-2', {
    'text-transparent': negative === undefined,
  })

  return (
    <li
      ref={ref}
      className='bg-white list-none w-[185px] h-28 rounded-lg shadow-light p-2
      flex justify-between border-2 border-transparent hover:border-light-2
      dark:bg-dark-2 dark:shadow-dark hover:dark:border-dark-4'
    >
      <div
        className='detail flex flex-col text-xs text-light-2
      dark:text-white'
      >
        <h6
          className='text-sm font-bold tracking-wide text-light-1
        dark:text-dark-4'
        >
          {id}
        </h6>
        <span className={propsCN}>
          {positive || positive === 0 ?
            `${Characters[positive]} +${Metric[positive][lv - 1]} ` :
            'xxx'}
        </span>
        <span className={consCN}>
          {negative || negative === 0 ?
            `${Characters[negative]} -${Metric[negative][lv - 1]}` :
            'xxx'}
        </span>
        <div className='categories flex'>
          {categories.map((ele) => (
            <img
              key={ele}
              className='w-6 h-6'
              src={`imgs/emblems/color/${ele}.webp`}
              alt={ele.toString()}
            />
          ))}
        </div>
      </div>
      <div className='pokemon flex flex-col items-center'>
        <img
          className='w-[74px] h-[74px]'
          src={`${import.meta.env.VITE_IMG_URL}/${card.id}${
            Level[lv as LevelType]
          }.png`}
          alt={pokemonName}
        />
        <label className='text-sm text-light-1 tracking-wide dark:text-dark-4'>
          {pokemonName}
        </label>
      </div>
    </li>
  )
})

Card.displayName = 'Card'
