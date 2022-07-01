
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Button, Drawer } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartIcon';
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
          <Button variant="primary" onClick={toggle}>Carrinho</Button>
          <Drawer open={show} anchor={'right'} onClose={toggle}>
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Carrinho { carrinho && carrinho.cliente }</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{
                  carrinho &&
                  carrinho.produtosAdicionados.map((produto) => (<CartItem key={produto.id} produto={produto} shoppingCart={carrinho}></CartItem>))
                  }
              </Offcanvas.Body>
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
