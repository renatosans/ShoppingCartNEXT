import React from 'react';
import ReactDom from 'react-dom/client';
import NumberSpinner from './NumberSpinner';
import ConfirmationDialog from './ConfirmationDialog';
import { productType, shoppingCartType, itemListType } from '../utils/types';

type props = {
	produto: productType | null;
	shoppingCart: shoppingCartType | null;
	parentRef: itemListType;
}

export default function CartItem({ produto = null, shoppingCart = null, parentRef }: React.PropsWithChildren<props>) {
	function remover(){
        const root = ReactDom.createRoot(document.getElementById('container') as HTMLElement);

		if (shoppingCart == null) {
			alert('Falha ao abrir carrinho de compras');
			return;
		}

		const message = 'Deseja realmente excluir o item ?';
        const confirmationDialog = React.createElement(ConfirmationDialog, {message, handleResult}, null);
		root.render(confirmationDialog);
	}

	const handleResult = (result: boolean) => {
		if (result) {
			let carrinho = shoppingCart.produtosAdicionados;
			shoppingCart.produtosAdicionados = carrinho.filter( item => item.id !== produto.id );

			// Refresh do carrinho
			parentRef.getItems();
		}
	}

	return (
		<>
			<style jsx>{`
				.cartItem {
					display: flex;
					flex-direction: row;
					background-color: white;
				}

				.itemImage {
					border-radius: 7px;
					width: 95px;
					height: 95px;
				}
			
				.itemText{
					width: 250px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			
				.vertical-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
				}
			`}</style>

			<div className='cartItem'>
				<img className='itemImage' src={"data:" + produto.formatoImagem + ", " + produto.foto} alt={produto.nome} />
				<fieldset className='vertical-container' style={{'border': '0'}}>
					<span className='itemText'>{produto.descricao}</span>
					<span>Preço: R$ {produto.preco}</span>
					<br/>
					<button className='w-20 border-solid border border-blue-500 rounded' onClick={remover}>Remover</button>
					<NumberSpinner></NumberSpinner>
				</fieldset>
			</div>
		</>
	);
}
