import {useEffect, useRef, useState} from 'react'

import {useTranslation} from 'react-i18next'

import {useAppSelector} from '../../store/hook'
import {Card} from './Card'

const CardList = () => {
  const offset = document.documentElement.clientWidth === 591 ? 12 : 30
  const lastItemRef = useRef<any | null>()
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState(1)
  const {cards} = useAppSelector((state) => state.pokemon)
  const [uids, setUids] = useState<string[]>([])
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  useEffect(() => {
    setPage(1)
    setUids(
      Array.from({length: cards.length < offset ? cards.length : offset}).map(
        (_, i) => `${cards[i].id}_${cards[i].lv}`,
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
          setUids((prev) => [
            ...prev,
            ...Array.from({length: bias})
            .map((_, i) => {
              const idx = i+ offset *(newPage-1)
              return `${cards[idx].id}_${cards[idx].lv}`
            }),

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
