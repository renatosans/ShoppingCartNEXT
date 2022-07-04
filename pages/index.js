
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Drawer, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { CartItemList } from '../componentes/CartItemList';
import ProductCatalog from '../componentes/ProductCatalog';


export default function Home() {
  const [dadosProdutos, setDadosProdutos] = useState();
  const [carrinho, setCarrinho] = useState();

  const getDadosProdutos = async () => {
    const response = await fetch("api/produtos/listar")
    .then((response) => response.json());

    setDadosProdutos(response);
  }

  const getCarrinho = async () => {
    const response = await fetch("api/carrinho")
    .then((response) => response.json());

    setCarrinho(response);
  }

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
          <ShoppingCart style={{color: 'blue'}} onClick={toggle}></ShoppingCart>
          <Drawer open={show} anchor={'right'} onClose={toggle}>
            <Typography variant="h4" style={{padding: '20px'}}>
              Carrinho { carrinho && carrinho.cliente }
            </Typography>
            <CartItemList carrinho={carrinho}></CartItemList>
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
