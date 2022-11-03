import {ChangeEvent} from 'react'

import {FormControlLabel, Switch} from '@mui/material'
import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../../store/hook/index'
import {setFilter} from '../../../store/reducers/pokemonSlice'

const PositiveSwitch = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({...filter, positive: e.target.checked}))
  }

  return (
    <FormControlLabel
      checked={filter.positive}
      className='[&>span]:text-sm'
      label={filter.positive ? t('labels.positive') : t('labels.negative')}
      control={<Switch size='small' onChange={onChange} />}
    />
  )
}

export default PositiveSwitch
