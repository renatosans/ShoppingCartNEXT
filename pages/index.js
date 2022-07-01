
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Button, Drawer } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CartItem from '../componentes/CartItem';
import ProductCatalog from '../componentes/ProductCatalog';


export default function Home() {
  const [dadosProdutos, setDadosProdutos] = useState();
  const [carrinho, setCarrinho] = useState();

  const getDadosProdutos = async () => {
    const response = await fetch("api/listarProdutos")
    .then((response) => response.json());

    setDadosProdutos(response);
  };

  const getCarrinho = async () => {
    const response = await fetch("api/carrinho")
    .then((response) => response.json());

    setCarrinho(response);
  };

  useEffect(() => {
    getDadosProdutos();
    getCarrinho();
  }, []);

  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className={styles.container}>
        <header>
          <div id="container"></div>
          <ShoppingCart onClick={toggle} ></ShoppingCart>
          <Drawer open={show} anchor={'right'} onClose={toggle}>
            <h1>Carrinho { carrinho && carrinho.cliente }</h1>
            <p>{
                  carrinho &&
                  carrinho.produtosAdicionados.map((produto) => (<CartItem key={produto.id} produto={produto} shoppingCart={carrinho}></CartItem>))
              }
            </p>
          </Drawer>
        </header>
        <main className={styles.main}>
            <div className={styles.grid}>{
                dadosProdutos &&
                dadosProdutos.map((produto) => (<div className={styles.card} key={produto.id}>
                    <ProductCatalog produto={produto} shoppingCart={carrinho}></ProductCatalog>
                </div>))
            }</div>
        </main>
        <footer className={styles.footer}>
            <h5>Projeto desenvolvido utilizando NEXT.js</h5>
        </footer>
    </div>
  )
}
