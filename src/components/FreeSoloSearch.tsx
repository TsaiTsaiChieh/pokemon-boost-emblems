import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../store/hook'
import {setFilter} from '../store/reducers/pokemonSlice'

const FreeSoloSearch = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const onChange = (_: React.SyntheticEvent,
    value: string[]) => {
    const ids = value.map((ele) => ele.substring(0, 3))
    dispatch(setFilter({...filter, ids}))
  }

  return (
    <div className='flex justify-center'>
      <Stack spacing={10} sx={{width: 800}}>
        <Autocomplete
          onChange={onChange}
          multiple
          id='tags-filled'
          options={pokemonList.map((ele) => `${ele.id} ${ele.name}`)}
          freeSolo
          // render the selected value
          renderTags={(value: readonly string[], getTagProps) => (
            value.map((option: string, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <Chip
                variant='outlined'
                size='small'
                label={option}
                {...getTagProps({index})}
              />
            ))
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              size='small'
              variant='outlined'
              label={t('labels.id_or_name')}
            />
          )}
        />
      </Stack>
    </div>
  )
}

export default FreeSoloSearch
