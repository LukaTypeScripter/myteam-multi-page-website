import styled from 'styled-components'
type ButtonProps = {
    height?:string
    bgColor?:string
    color?:string
    Text?:string
    borderRadius?:string
    border?:string
    width?:string
    heigth?:string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (e: any) => void
    children?: React.ReactNode;
    windowWidth?: number | undefined
    queryWidth?:string
    queryHeigth?:string
}
function Button({height,bgColor,color,Text,borderRadius,border,width,heigth,onClick,children,windowWidth,queryWidth,queryHeigth}:ButtonProps) {
  return (
    <Btn onClick={onClick} height={height} bgColor={bgColor} color={color} type='submit' borderRadius={borderRadius} border={border} width={width} heigth={heigth} windowWidth={windowWidth} queryWidth={queryWidth} queryHeigth={queryHeigth}>{children ||Text}</Btn>
  )
}

const Btn = styled.button<ButtonProps>`
        flex-shrink: 0;
    border-radius: 8px;
    height: ${props => props.height};
    height: ${props => props.width};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: 1rem;
  font-style: normal;
    font-weight: 600;
    line-height: 150%;
    cursor: pointer;
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    text-align:center;
`

export default Button