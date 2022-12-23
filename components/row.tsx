import { useDroppable } from "@dnd-kit/core";
import { MdClose } from "react-icons/md";

export interface RowData {
    name: string
    id: string
}

export default function Row({ id, name, children, onDelete, onInput }: { id: string, name: string, children?: JSX.Element | (JSX.Element|null)[], onDelete: React.MouseEventHandler, onInput: React.FormEventHandler }) {

    const {setNodeRef} = useDroppable({
        id: id
    });

    return (
        <div className="w-full flex p-2 px-4 gap-2 border-b-2">
            <div contentEditable suppressContentEditableWarning onInput={ (e) => { onInput(e) } } className="flex flex-none items-center font-bold border-r-2 pr-4">
                { name }
            </div>
            <div className="flex grow items-center flex-wrap" ref={ setNodeRef }>
                { children }
            </div>
            <div className="flex flex-none items-center">
                <span className='flex items-center cursor-pointer p-1 hover:bg-red-100 active:bg-red-300 rounded' onClick={onDelete}><MdClose /></span>
            </div>
        </div>
    );
}