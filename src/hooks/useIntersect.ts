import {MutableRefObject, useEffect, useRef, useState} from 'react'

export const useIntersect = (
  cards: PokemonCardType[],
): [string[], MutableRefObject<any>] => {
  const offset = window.innerWidth === 591 ? 12 : 30
  const lastItemRef = useRef<any | null>()
  const observer = useRef<IntersectionObserver | null>(null)
  const [page, setPage] = useState(1)
  const [uids, setUids] = useState<string[]>([])
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
            ...Array.from({length: bias}).map((_, i) => {
              const idx = i + offset * (newPage - 1)
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
  return [uids, lastItemRef]
}
