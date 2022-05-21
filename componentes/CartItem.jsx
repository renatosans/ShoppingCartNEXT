
import NumberSpinner from './NumberSpinner';


export default function CartItem({ produto = null, shoppingCart = null }) {

	function remover(){
		alert('Not implemented yet');
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
				<img className='itemImage' src={produto.imagem} alt={produto.nome} />
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
