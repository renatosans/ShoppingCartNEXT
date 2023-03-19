
export type categoryType = {
    nome: string;
}

export type measurementUnityType = {
    descricao: string;
    sigla: string;
}

export type supplierType = {
    cnpj: string;
    nome: string;
    email: string;
}

type productType = {
    nome: string;
    preco: number;
    descricao: string;
    foto: string;
    formatoImagem: string;
}

type shoppingCartType = {
    cliente: string;
    total: number;
    produtosAdicionados: [];
}
