import Head from 'next/head'
import { Inter } from '@next/font/google'
import Row, { RowData } from '../components/row'
import Card, { CardData } from '../components/card'
import { DndContext } from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import {nanoid} from "nanoid"
import Button from '../components/button'

const inter = Inter({ subsets: ['latin'] })

interface Project {
  id?: string | null,
  title: string,
  rows?: Array<RowData>
  cards?: Array<CardData>
  createdOn?: number
  updatedOn?: number
}

export default function Home() {

  const [ project, setProject ] = useState<Project>({
    title: "Untitled Stacklist"
  });

  const [ rows, setRows ] = useState<Array<RowData>>([
    {
      name: "Untitled Row",
      id: nanoid()
    }
  ]);

  const [ cards, setCards ] = useState<Array<CardData>>([
    {
      content: "Untitled Card",
      parent: null,
      id: nanoid()
    }
  ]);

  return (
    <>
      <Head>
        <title>Stacklist</title>
        <meta name="description" content="A simple tier list creator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndContext onDragEnd={handleDragEnd}>
        <main>
          <div className='flex justify-between mx-2'>
            <div className='flex items-center justify-center'>
              <h1 
                contentEditable suppressContentEditableWarning 
                className='text-xl font-bold'
              >{ project.title }</h1>
            </div>
            <div className='flex gap-2 p-2'>
              {/* <Button small type='secondary' onClick={() => { loadFromLocalStorage() }}><span>Load</span></Button>
              <Button small type='secondary' onClick={() => { saveToLocalStorage() }}><span>Save</span></Button> */}
              <Button small type='secondary' onClick={() => { addStaffCards() }}><span>Add Staff Cards</span></Button>
              <Button small type='secondary' onClick={() => { printList() }}><span>Print</span></Button>
            </div>
          </div>

          <p>{ project.id }</p>
          <hr className='mb-2' />

          <div className='mb-2 px-2'>
            <Button onClick={addRow}><span>Add Row</span></Button>
          </div>
          
          <div className='m-4 border-2 border-b-0'>
            {
              rows.map( (row, id) => (
                <Row id={row.id} name={row.name} key={id} onDelete={ () => { deleteRow(row.id) } } onInput={ (e) => { rowOnInput(e, row.id) } }>
                  
                  {
                    cards.map((card, index) => {
                      return card.parent === row.id ? <Card id={card.id} content={card.content} onDelete={ () => { deleteCard(card.id) } } onInput={ (e) => { cardOnInput(e, card.id) } } key={index} /> : null;
                    })
                  } 

                </Row>
              ))
            }
          </div>
          
          <hr className='my-2' />

          <section>
            <div className='flex justify-between mx-2'>
              <h3 className='text-lg font-bold'>Card Bank</h3>
              <Button onClick={addCard}><p>Add Card</p></Button>
            </div>
            <div className="flex flex-wrap">
              { 
                cards.map((card, index) => {
                  return card.parent === null ? <Card id={card.id} content={card.content} onDelete={ () => { deleteCard(card.id) } } onInput={ (e) => { cardOnInput(e, card.id) } } key={index} /> : null;
                })
              }
            </div>
          </section>
        </main>
      </DndContext>
    </>
  );

  function handleDragEnd(event: any) {
    const { over, active } = event;

    let oldCards = [...cards];
    let cardIndex = oldCards.findIndex( card => card.id === active.id )
    if(cardIndex < 0) return;
    
    oldCards[cardIndex].parent = over ? over.id : null;
    setCards([...oldCards]);
  }

  function addCard() {
    setCards(cards.concat({
      content: "Untitled Card",
      parent: null,
      id: nanoid()
    }))
  }
  
  function addStaffCards() {
    
    const staff = [
      {
        content: "Joel",
        parent: null,
        id: nanoid()
      },
      {
        content: "Fred",
        parent: null,
        id: nanoid()
      },
      {
        content: "Tommy",
        parent: null,
        id: nanoid()
      },
      {
        content: "Braeden",
        parent: null,
        id: nanoid()
      },
      {
        content: "Maura",
        parent: null,
        id: nanoid()
      },
      {
        content: "Jay",
        parent: null,
        id: nanoid()
      },
      {
        content: "Jonathan",
        parent: null,
        id: nanoid()
      },
      {
        content: "Jason",
        parent: null,
        id: nanoid()
      },
      {
        content: "Alex S",
        parent: null,
        id: nanoid()
      },
      {
        content: "Andrew",
        parent: null,
        id: nanoid()
      },
      {
        content: "Abele",
        parent: null,
        id: nanoid()
      },
      {
        content: "Noah",
        parent: null,
        id: nanoid()
      },
      {
        content: "Alex G",
        parent: null,
        id: nanoid()
      },
      {
        content: "Tey",
        parent: null,
        id: nanoid()
      },
      {
        content: "Tyler",
        parent: null,
        id: nanoid()
      },
      {
        content: "Jensen",
        parent: null,
        id: nanoid()
      }
    ]
    
    setCards(staff);
  }

  function cardOnInput(e: React.FormEvent, id: string) {

    let oldCards = [...cards];
    let cardIndex = oldCards.findIndex( card => card.id === id )
    if(cardIndex < 0) return;

    //@ts-ignore
    oldCards[cardIndex].content = e.target.innerText;
  }

  function addRow() {
    setRows(rows.concat({
      name: "Untitled Row",
      id: nanoid()
    }))
  }

  function deleteCard(id: string) {
    let oldCards = [...cards];
    let cardIndex = oldCards.findIndex( card => card.id === id )
    if(cardIndex < 0) return;
    oldCards.splice(cardIndex, 1);
    setCards([...oldCards]);
  }

  function deleteRow(id: string) {
    let oldRows = [...rows];
    let rowIndex = oldRows.findIndex( row => row.id === id )
    console.log(rowIndex)
    if(rowIndex < 0) return;

    // Move al lthe cards out then delete
    let oldCards = [...cards];
    oldCards.forEach(card => {
      if(card.parent != id) return;
      card.parent = null;
    })
    setCards(oldCards);

    oldRows.splice(rowIndex, 1);
    setRows([...oldRows]);
  }

  function rowOnInput(e: React.FormEvent, id: string) {

    let oldRows = [...rows];
    let rowIndex = oldRows.findIndex( row => row.id === id )
    if(rowIndex < 0) return;
  
    //@ts-ignore
    oldRows[rowIndex].content = e.target.innerText;
  }

  // ---------------- Project Metadata -------------

  function updateProjectName(e: React.FormEvent<HTMLHeadingElement>) {
    setProject(prevState => ({
      ...prevState,
      //@ts-ignore
      title: e.target.innerText
    }));
  }
  

  // ---------------- Save and Load ----------------
  function saveToLocalStorage() {

     const save = {
      project: project,
      cards: cards,
      rows: rows
     }

    const data = JSON.stringify(save);
    window.localStorage.setItem(project.title, data);
  }

  function loadFromLocalStorage() {

  }

  function printList() {
    window.print();
  }

}

