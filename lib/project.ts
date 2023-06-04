import { nanoid } from "nanoid"
import { threadId } from "worker_threads"

export interface Identifiable {
    id: string
}

export class Row implements Identifiable {
    id: string
    name: string
    cards: Array<Card>
    
    constructor(id: string, name: string, cards: Array<Card>) {
        this.id = id;
        this.name = name;
        this.cards = cards;
    }
}

/**
 * Helper function to create new rows.
 * @param name The name of the row
 * @param id Optional parameter to directly set the cards ID. Will auto generate an ID if undefined.
 * @returns New row object
 */
export function createRow(name: string, id?: string): Row {
    return new Row(id ?? nanoid(), name, []);
}

export class Card implements Identifiable {
    id: string
    value: string

    constructor(id: string, value: string) {
        this.id = id;
        this.value = value
    }
}

/**
 * Helper function to create new cards.
 * @param value The value of the card
 * @param id Optional parameter to set the card id manually. Auto generates an ID if undefined
 * @returns New card object
 */
export function createCard(value: string, id?: string): Card {
    return new Card(id ?? nanoid(), value);
}

export class Project {
    name: string
    rows: Array<Row>
    cards: Array<Card>

    constructor(name: string, rows: Array<Row>, cards: Array<Card>) {
        this.name = name;
        this.rows = rows;
        this.cards = cards;
    }
}

export function createProject(name: string): Project {
    return new Project(name, [], [])
}

export function meaningOfLife(input: any) {
    return 42;
}