import {useEffect, useState} from 'react'

import {Autocomplete, Chip, Stack, TextField} from '@mui/material'
import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../store/hook'
import {searchCards} from '../store/reducers/pokemonSlice'

const FreeSoloSearch = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {ids, characters, categories, levels} = filter
  const {t} = useTranslation()
  const pokemonList: PokemonType[] = t('pokemon', {returnObjects: true})
  const [value, setValue] = useState<string[]>([])
  const onChange = (_: React.SyntheticEvent,
    value: string[]) => {
    const ids = value.map((ele) => ele.substring(0, 3))
    dispatch(searchCards({...filter, ids}))
    setValue(value)
  }
  // reset
  useEffect(() => {
    if (
      !ids.length &&
      !characters.length &&
      !categories.length &&
      !levels.length
    ) {
      setValue([])
    }
  }, [ids, characters, categories, levels])

  return (
    <div className='flex justify-start custom-1184:mr-5'>
      <Stack spacing={10} sx={{width: '100%'}}>
        <Autocomplete
          value={value}
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
