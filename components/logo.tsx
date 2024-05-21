import { Coolshape } from 'coolshapes-react'

interface LogoProps {
  className?: string
}
export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Coolshape
      className={className}
      type="triangle"
      index={13}
      noise={false}
      size={20}
    />
  )
}
