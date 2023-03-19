
export type itemListType = {
    getItems: () => void;
}

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

export type productType = {
    nome: string;
    preco: number;
    descricao: string;
    foto: string;
    formatoImagem: string;
}

export type shoppingCartType = {
    cliente: string;
    total: number;
    produtosAdicionados: [];
}
