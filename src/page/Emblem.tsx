import {useEffect} from 'react'

import {Container} from '@mui/material'
import {useTranslation} from 'react-i18next'

import EmblemList from '../components/EmblemList'
import FreeSoloSearch from '../components/FreeSoloSearch'
import TagFilter from '../components/TagFilter'
import {useAppDispatch, useAppSelector} from '../store/hook/index'
import {setCharacters} from '../store/reducers/persistSlice'
import {setCard, setPokemonList} from '../store/reducers/pokemonSlice'

const Emblem = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {characters} = useAppSelector((state) => state.persist)
  const {tmpCards} = useAppSelector((state) => state.pokemon)
  const abilities: AbilityType[] = t('abilities', {returnObjects: true})
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const characterList: string[] = t('characters', {returnObjects: true})
  // save pokemon data
  useEffect(() => {
    if (!characters.length) dispatch(setCharacters(characterList))
    if (!tmpCards.length) {
      abilities.map((ele: AbilityType) => {
        const pokemon: PokemonType = pokemonList[parseInt(ele.id) - 1]
        dispatch(setCard({...ele, ...pokemon}))
        dispatch(setPokemonList(pokemonList))
      })
    }
  }, [tmpCards, characters])

  return (
    <Container>
      <FreeSoloSearch />
      {characters.map((ele, i) => <TagFilter key={i} label={ele} id={i} />)}
      <EmblemList />
    </Container>
  )
}

export default Emblem
