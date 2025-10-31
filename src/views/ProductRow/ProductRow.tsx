import type { Product } from '../interface/typeof';

export default function ProductRow({product}: { product:Product }) {
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}