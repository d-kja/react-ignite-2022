import { Trash } from "phosphor-react"
import { ButtonHTMLAttributes } from "react"
import { Button } from "../primitives/Button"

interface DeleteBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const DeleteBtn = ({ ...props }: DeleteBtnProps) => {
  return (
    <div className="tooltip tooltip-info" data-tip="Delete task">
      <Button
        variant="square"
        className="text-gray-300 hover:bg-gray-400 hover:text-danger ring-gray-300"
        {...props}
      >
        <Trash size={14} />
      </Button>
    </div>
  )
}
