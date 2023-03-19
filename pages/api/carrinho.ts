import type { NextApiRequest, NextApiResponse } from 'next'

type shoppingCartType = {
    cliente: string;
    total: number;
    produtosAdicionados: [];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<shoppingCartType>) {
    res.status(200).json({ cliente:"Lewis Hamilton", total: 0, produtosAdicionados: [] })
}
