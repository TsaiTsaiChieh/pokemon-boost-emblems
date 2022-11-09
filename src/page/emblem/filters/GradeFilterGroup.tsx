import {useTranslation} from 'react-i18next'

import TagFilter from '../../../components/TagFilter'
import {useAppSelector} from '../../../store/hook'

const GradeFilterGroup = () => {
  const {stat, cards} = useAppSelector((state) => state.pokemon)
  const {t} = useTranslation()
  const gradeOptions: string[] = t('search_options.grades', {
    returnObjects: true,
  })


  return (
    <div className='flex flex-wrap gap-2'>
      <TagFilter label={t('labels.all')} total={cards.length} />
      {gradeOptions.map((ele, i) => (
        <TagFilter
          key={i}
          label={ele}
          id={i}
          subFilterName='levels'
          total={stat.levels[i]}
        />
      ))}
    </div>
  )
}

export default GradeFilterGroup
