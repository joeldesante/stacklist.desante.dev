import { nanoid } from "nanoid"

export class Row {
    readonly id: string
    name: string
    cards: Array<Card>

    constructor(name?: string, id?: string, cards?: Array<Card>) {
        this.name = name ?? 'Untitled Row'
        this.id = id ?? nanoid()
        this.cards = cards ?? new Array<Card>()
    }
}

export class Card {
    readonly id: string
    name: string

    constructor(name?: string, id?: string) {
        this.name = name ?? 'Untitled Card'
        this.id = id ?? nanoid()
    }
}

export class Project {
    readonly id: string
    name: string
    rows: Array<Row>

    constructor(name?: string, id?: string, rows?: Array<Row>) {
        this.name = name ?? 'Untitled Project'
        this.id = id ?? nanoid()
        this.rows = rows ?? new Array<Row>()
    }
}

export function meaningOfLife(input: any) {
    return 42;
}