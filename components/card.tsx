import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { MdDragIndicator, MdClose } from "react-icons/md";

export interface CardData {
    content: string
    parent: string | null
    id: string
}

export default function Card({ id, content, onDelete, onInput }: { id: string, content: string, onDelete: React.MouseEventHandler, onInput: React.FormEventHandler }) {
  
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });

  const style = transform ? {
    transform: CSS.Translate.toString(transform)
  } : undefined;

  
  return (

    <div 
        ref={setNodeRef} 
        style={style}
        className="bg-white p-2 m-2 rounded shadow"
    >
        <div className='flex justify-between gap-2'>
            <span className='flex items-center cursor-pointer p-1 hover:bg-gray-100 active:bg-gray-200 rounded' {...listeners} {...attributes}><MdDragIndicator /></span>
            <span contentEditable onInput={ (e) => { onInput(e) } } suppressContentEditableWarning className='flex items-center'>{ content }</span>
            <span className='flex items-center cursor-pointer p-1 hover:bg-red-100 active:bg-red-300 rounded' onClick={onDelete}><MdClose /></span>
        </div>
    </div>
  );
}