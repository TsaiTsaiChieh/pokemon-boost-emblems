interface Props {
  id: string
  name: string
  skill_1: string
  skill_2: string
  categories: number[]
}

const EmblemCard = ({id, name, skill_1, skill_2, categories}: Props) => {
  return (
    <li className="bg-white list-none w-44 h-32 rounded-lg shadow-custom p-3 flex justify-between">
      <div className="detail flex flex-col text-xs text-custom-black">
        <h6 className="text-sm font-bold tracking-wide text-light-2">{id}</h6>
        <span className='mt-3'>{skill_1}</span>
        <span className='mb-3'>{skill_2}</span>
        {categories.map((ele, i) => <img key={i} className="w-6" src={`/imgs/emblems/color/${ele}.png`} alt="color" />)}

      </div>
      <div className='pokemon flex flex-col items-center'>
        <img className='w-20' src={`/imgs/emblems/bronze/${parseInt(id)}.png`} alt="pokemon" />
        <label className="text-sm text-light-2 tracking-wide">{name}</label>
      </div>
    </li>
  )
}

export default EmblemCard