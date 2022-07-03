import React from 'react';
import ReactDom from 'react-dom';
import InfoModal from './InfoModal';
import NumberSpinner from './NumberSpinner';
import ConfirmationDialog from './ConfirmationDialog';


export default function CartItem({ produto = null, shoppingCart = null }) {
	const handleResult = (result) => {
        const root = ReactDom.createRoot(document.getElementById('container'));

		if (result) {
			let carrinho = shoppingCart.produtosAdicionados;
			shoppingCart.produtosAdicionados = carrinho.filter( item => item.id !== produto.id );
	
			const infoModal = React.createElement(InfoModal, null, 'O produto foi removido do carrinho.');
			root.render(infoModal);
			return;
		}
	}

	function remover(){
        const root = ReactDom.createRoot(document.getElementById('container'));

		if (shoppingCart == null) {
			alert('Falha ao abrir carrinho de compras');
			return;
		}

		const message = 'Deseja realmente excluir o item ?';
        const confirmationDialog = React.createElement(ConfirmationDialog, {message, handleResult}, null);
		root.render(confirmationDialog);
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
				}			
			`}</style>

			<div className='cartItem'>
				<img className='itemImage' src={"data:" + produto.formatoImagem + ", " + produto.foto} alt={produto.nome} />
				<fieldset className='vertical-container' style={{'border': '0'}}>
					<span className='itemText'>{produto.descricao}</span>
					<span>Preço: R$ {produto.preco}</span>
					<br/>
					<button style={{'width': '100px'}} onClick={remover}><b>Remover</b></button>
					<NumberSpinner></NumberSpinner>
				</fieldset>
			</div>
		</>
	);
}
