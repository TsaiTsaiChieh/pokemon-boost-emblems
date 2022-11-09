import {Container} from '@mui/material'

import FreeSoloSearch from '../../components/FreeSoloSearch'
import {useAppSelector} from '../../store/hook/index'
import CardList from './CardList'
import FilterGroups from './filters/FilterGroups'

const Emblem = () => {
  const {cards} = useAppSelector((state) => state.pokemon)

  return (
    <Container>
      <FreeSoloSearch />
      <FilterGroups />
      {cards.length ? <CardList /> : null}
    </Container>
  )
}

export default Emblem
