import {useEffect} from 'react'

import {Container} from '@mui/material'
import {useTranslation} from 'react-i18next'

import FreeSoloSearch from '../../components/FreeSoloSearch'
import abilities from '../../constants/abilities.json'
import {useAppDispatch, useAppSelector} from '../../store/hook/index'
import {setCard} from '../../store/reducers/pokemonSlice'
import CardList from './CardList'
import FilterGroups from './filters/FilterGroups'


const Emblem = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {language} = useAppSelector((state) => state.persist)
  const {tmpCards, cards} = useAppSelector((state) => state.pokemon)
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  // save pokemon data and search options
  useEffect(() => {
    if (!tmpCards.length) {
      abilities.map((ele: AbilityType) => {
        const pokemon: PokemonType = pokemonList[parseInt(ele.id) - 1]
        dispatch(setCard({...ele, ...pokemon}))
      })
    }
  }, [tmpCards, language])

  return (
    <Container>
      <FreeSoloSearch />
      <FilterGroups />
      {cards.length ? <CardList /> : null}
    </Container>
  )
}

export default Emblem
