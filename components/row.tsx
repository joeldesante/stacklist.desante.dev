import { Row } from "../lib/project";
import CardElement from "./card";

export default function RowElement({ id, name, cards }: Row) {
    return (
        <tr>
            <td className="border">{name}</td>
            <td className="border">
                {
                    cards.map((card) => {
                        return <CardElement id={card.id} value={card.value} />
                    })
                }
            </td>
        </tr>
    );
}