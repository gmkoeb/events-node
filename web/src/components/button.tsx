interface ButtonProps {
  text?: string
}
0
export function Button(props: ButtonProps){
  return (
    <button type="button" className="bg-violet-500 px-5 py-2 rounded-sm">{props.text || 'Enviar'}</button>
  )
}