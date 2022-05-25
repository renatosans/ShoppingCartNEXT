
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import CartItem from '../componentes/CartItem';
import ProductCatalog from '../componentes/ProductCatalog';


export default function Home() {
  const [dadosProdutos, setDadosProdutos] = useState();
  const [carrinho, setCarrinho] = useState();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const getApiData = async () => {
    const response = await fetch("mock_data/listaProdutos.json")
    .then((response) => response.json());

    setDadosProdutos(response);
  };

  useEffect(() => {
    getApiData();
    setCarrinho({ cliente:"Cliente 1", total: 0, produtosAdicionados: [] });
  }, []);

  return (
    <div className={styles.container}>
        <header>
          <div id="container"></div>
          <Button variant="primary" onClick={toggle}>Carrinho</Button>
          <Offcanvas show={show} placement={'end'} onHide={toggle}>
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{
                  carrinho&&
                  carrinho.produtosAdicionados.map((produto) => (<CartItem produto={produto} shoppingCart={carrinho}></CartItem>))
                  }
              </Offcanvas.Body>
          </Offcanvas>
        </header>
        <main className={styles.main}>
            <div className={styles.grid}>{
                dadosProdutos&&
                dadosProdutos.map((produto) => (<div className={styles.card} key={produto.id}>
                    <ProductCatalog produto={produto} shoppingCart={carrinho}></ProductCatalog>
                </div>))
            }</div>
        </main>
        <footer className={styles.footer}>
            <h5 className={styles.title}> Welcome to <a href="https://nextjs.org">Next.js!</a></h5>
            Powered by {' '} <span className={styles.logo}><img src="/vercel.svg" alt="Vercel Logo" /></span>
        </footer>
    </div>
  )
}
