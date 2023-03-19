import CartItem from './CartItem';
import React, { useState, useEffect } from 'react';
import { shoppingCartType } from '../utils/types';


type props = {
    carrinho : shoppingCartType;
}

export const CartItemList = ({ carrinho }: React.PropsWithChildren<props>) => {
    const [products, setProducts] = useState([]);

    const getItems = () => {
        if (!carrinho) {
            setProducts([]);
            return;
        }

        setProducts(carrinho.produtosAdicionados);
    }

    useEffect(() => {
        getItems();
    }, []);

	return (
		<div style={{padding: '20px'}}>{
                carrinho && products.map((produto) => (
                    <div key={produto.id}>
                        <CartItem produto={produto} shoppingCart={carrinho} parentRef={{getItems}}></CartItem>
                    </div>
                )
            )}
		</div>
	)
}
