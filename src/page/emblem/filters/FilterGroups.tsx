import {Container} from '@mui/material'

import CharacterFilterGroup from './CharacterFilterGroup'
import ColorFilterGroup from './ColorFilterGroup'
import GradeFilterGroup from './GradeFilterGroup'

const FilterGroups = () => {
  return (
    <Container className='flex flex-col py-4 rounded-lg mt-6'>
      <GradeFilterGroup />
      <ColorFilterGroup />
      <CharacterFilterGroup />
    </Container>
  )
}

export default FilterGroups
