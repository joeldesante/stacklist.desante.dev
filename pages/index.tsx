import Head from 'next/head'
import React, { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

import { Project, createCard, createProject, createRow } from '../lib/project'
import { ProjectElement } from '../components/project'
import { nanoid } from 'nanoid'
import reducer from '../lib/reducer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  /*const [ project, setProject ] = useState<Project>({
    id: 'hhh',
    name: 'Untitled Project',
    rows: [],
    cardBank: []
  })*/
  const [ project, dispatch ] = useReducer(reducer, createProject("Untitled Project"));

  return (
    <>
      <Head>
        <title>Stacklist</title>
        <meta name="description" content="A simple tier list creator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button>Save</button>
        <button>Load</button>
        <br/>
        <button onClick={() => { dispatch({ type: 'ADD_ROW', row: "Hello" }) }}>Add Row</button>
        <button onClick={() => { dispatch({ type: 'ADD_CARD', card: "Hello2" }) }}>Add Card</button>
      </main>
    </>
  );
}

