import { useState } from "react"
import CardElement from "./card"
import RowElement from "./row"
import { nanoid } from "nanoid";

interface Project {
    id?: string,
    name: string,

}

export function ProjectElement({ id, name }: Project ) {

    const [ projectId, setProjectId ] = useState(id ?? nanoid())
    const [ projectName, setProjectName ] = useState(name)

    return (
        <section>
            <h1>{ name }</h1>
            <table className="table-auto">
                {
                    rows.map((row) => {
                        return <RowElement name={row.name} id={row.id} cards={row.cards} />
                    })
                }
            </table>
            <br />
            <div>
                <h4>Card Bank</h4>
                <div>
                    {
                        cardBank.map(card => {
                            return <CardElement value={card.value} id={card.id} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}