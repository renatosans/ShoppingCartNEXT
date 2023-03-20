import type { shoppingCartType } from '../../utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse<shoppingCartType>) {
    res.status(200).json({ cliente:"Lewis Hamilton", total: 0, produtosAdicionados: [] })
}
