import {Container} from '@mui/material'

import EmblemList from '../components/EmblemList'
import FreeSoloSearch from '../components/FreeSoloSearch'

const Emblem = () => {
  return (
    <Container>
      <FreeSoloSearch />
      <EmblemList />
    </Container>
  )
}

export default Emblem
