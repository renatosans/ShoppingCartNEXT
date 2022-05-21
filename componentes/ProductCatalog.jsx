
export default function ProductCatalog({ produto = null, shoppingCart = null }) {
	return (
		<>
			<style jsx>{`
                .rounded-corners {
                    overflow: hidden;
                    border-radius: 10px;
                    background-color:silver;
                }
			`}</style>
			<p><b>Produto {produto}, carrinho {shoppingCart.quantidadeItems}</b></p>
		</>
	);
}
