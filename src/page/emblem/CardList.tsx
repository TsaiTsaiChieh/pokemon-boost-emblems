import {useEffect, useRef, useState} from 'react'

import {useTranslation} from 'react-i18next'
import {v4 as uuidv4} from 'uuid'

import {useAppSelector} from '../../store/hook'
import {Card} from './Card'

const CardList = () => {
  const lastItemRef = useRef<any | null>()
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState(1)
  const offset = 30
  const {cards} = useAppSelector((state) => state.pokemon)
  const [arr, setArr] = useState<number[]>([])
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const characters: string[] = t('search_options.characters', {
    returnObjects: true,
  })

  useEffect(() => {
    setPage(1)
    setArr(
      Array.from({length: cards.length < offset ? cards.length : offset}).map(
        (_, i) => i,
      ),
    )
  }, [cards.length])

  useEffect(() => {
    if (page <= Math.ceil(cards.length / offset)) {
      const options = {
        root: document,
        rootMargin: '20px',
        threshold: 1,
      }
      const callback = (entries: IntersectionObserverEntry[]) => {
        // 滑到最底會觸發
        if (entries[0].isIntersecting) {
          const newPage = page + 1
          const bias =
            cards.length - offset * page > offset ?
              offset :
              cards.length - offset * page
          setArr((prev) => [
            ...prev,
            ...Array.from({length: bias})
              .fill(0)
              .map((_, i) => i + offset * (newPage - 1)),
          ])
          setPage(newPage)
        }
      }
      observer.current = new IntersectionObserver(callback, options)
      if (lastItemRef.current) {
        observer.current.observe(lastItemRef.current)
      }
      return () => {
        if (observer.current !== null) {
          observer.current.disconnect()
        }
      }
    }
  })
  return (
    <ul
      className='flex flex-wrap justify-center gap-4 pb-8
    custom-481:justify-between custom-1153:justify-start'
    >
      {arr.map((_, i) => {
        // should not render before arr state update finish
        if (arr.length <= cards.length) {
          const card = cards[i]
          const pokemonName = pokemonList[parseInt(card.id) - 1].name
          const prop = card.positive.length ?
            characters![card.positive[0] as number] :
            undefined
          const con = card.negative.length ?
            characters![card.negative[0] as number] :
            undefined
          const ref = i === arr.length - 1 ? lastItemRef : null
          return (
            <Card
              key={uuidv4()}
              ref={ref}
              pokemonName={pokemonName}
              card={card}
              prop={prop}
              con={con}
            />
          )
        }
      })}
    </ul>
  )
}

export default CardList
