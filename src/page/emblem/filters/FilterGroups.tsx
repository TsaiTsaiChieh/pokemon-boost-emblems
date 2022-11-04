import {Container} from '@mui/material'

import CharacterFilterGroup from './CharacterFilterGroup'
import ColorFilterGroup from './ColorFilterGroup'
import GradeFilterGroup from './GradeFilterGroup'

const FilterGroups = () => {
  return (
    <Container className='flex flex-col lg:w-3/4'>
      <GradeFilterGroup />
      <ColorFilterGroup />
      <CharacterFilterGroup />
    </Container>
  )
}

export default FilterGroups
