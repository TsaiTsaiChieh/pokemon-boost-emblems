import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import {useTranslation} from 'react-i18next'

import {useAppDispatch} from '../store/hook'
import {nameFilter} from '../store/reducers/pokemonSlice'

const FreeSoloSearch = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const pokemon: PokemonType[] = t('pokemon', {returnObjects: true})
  const onChange = (event: React.SyntheticEvent<Element, Event>,
    value: string[],
    reason: string,
    details?: string) => {
    console.log(event, value, reason, details)
    dispatch(nameFilter(value))
  }
  return (
    <div className='flex justify-center'>
      <Stack spacing={10} sx={{width: 800}}>
        <Autocomplete
          onChange={onChange}
          multiple
          id='tags-filled'
          options={pokemon.map((ele) => `${ele.id} ${ele.name}`)}
          freeSolo
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                key={index}
                variant='outlined'
                label={option}
                {...getTagProps({index})}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant='filled'
              label='freeSolo'
              placeholder='Favorites'
            />
          )}
        />
      </Stack>
    </div>
  )
}

export default FreeSoloSearch
