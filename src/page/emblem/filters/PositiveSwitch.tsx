import {ChangeEvent} from 'react'

import {Switch} from '@mui/material'
import {styled} from '@mui/material/styles'

import {useAppDispatch, useAppSelector} from '../../../store/hook/index'
import {searchCards} from '../../../store/reducers/pokemonSlice'

const Android12Switch = styled(Switch)(({theme}) => ({
  'padding': 8,
  '& .MuiSwitch-track': {
    'borderRadius': 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}))
const PositiveSwitch = () => {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector((state) => state.pokemon)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCards({...filter, positive: e.target.checked}))
  }

  return (
    <Android12Switch
      checked={filter.positive}
      onChange={onChange}
      title='positive switch'
    />
  )
}

export default PositiveSwitch
