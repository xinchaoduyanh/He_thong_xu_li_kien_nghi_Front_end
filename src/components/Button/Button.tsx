import { IconType } from 'react-icons'
interface Props {
  label: string
  onClick: () => void
  outline?: boolean
  disabled?: boolean
  small?: boolean
  icon?: IconType
}
export default function Button({ label, onClick, outline, disabled, small, icon }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-30 disabled:cursor-not-allowed  rounded-lg hover:opacity-80 transition w-full 
      ${outline ? `bg-slate-200  text-black` : 'bg-black  text-white'} 
      ${small ? `py-1 text-sm font-light border-[1px]` : `py-3 text-md font-semibold border-2`} 
      `}
    >
      {icon && <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>{icon({ size: 18 })} </div>}
      {label}
    </button>
  )
}
