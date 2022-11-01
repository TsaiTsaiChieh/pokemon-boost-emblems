import {useEffect} from 'react'

import {Container} from '@mui/material'
import {useTranslation} from 'react-i18next'

import EmblemList from '../components/EmblemList'
import FreeSoloSearch from '../components/FreeSoloSearch'
import {useAppDispatch} from '../store/hook/index'
import {setCard} from '../store/reducers/pokemonSlice'

const Emblem = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const abilities: AbilityType[] = t('abilities', {returnObjects: true})
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  // save pokemon data
  useEffect(() => {
    if (abilities.length && pokemonList.length) {
      abilities.map((ele: AbilityType) => {
        const pokemon: PokemonType = pokemonList[parseInt(ele.id) - 1]
        dispatch(setCard({...ele, ...pokemon}))
      })
    }
  }, [abilities, pokemonList])

  return (
    <Container>
      <FreeSoloSearch />
      <EmblemList />
    </Container>
  )
}

export default Emblem
