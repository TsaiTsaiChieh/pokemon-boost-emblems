import {useEffect} from 'react'

import {Container} from '@mui/material'
import {useTranslation} from 'react-i18next'

import FreeSoloSearch from '../../components/FreeSoloSearch'
import TagFilter from '../../components/TagFilter'
import abilities from '../../constants/abilities.json'
import {useAppDispatch, useAppSelector} from '../../store/hook/index'
import {setSearchOptions} from '../../store/reducers/persistSlice'
import {setCard, setPokemonList} from '../../store/reducers/pokemonSlice'
import CardList from './CardList'
import PositiveSwitch from './PositiveSwitch'

const Emblem = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {characters} = useAppSelector((state) => state.persist)
  const {tmpCards} = useAppSelector((state) => state.pokemon)
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const searchOptions: SearchOptionsType = t('search_options', {
    returnObjects: true,
  })
  // save pokemon data and search options
  useEffect(() => {
    if (!characters.length) dispatch(setSearchOptions({...searchOptions}))
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
      <PositiveSwitch />
      {characters.map((ele, i) => <TagFilter key={i} label={ele} id={i} />)}
      <CardList />
    </Container>
  )
}

export default Emblem
