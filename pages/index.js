
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import CartItem from '../componentes/CartItem';
import ProductCatalog from '../componentes/ProductCatalog';


export default function Home() {
  const [dadosProdutos, setDadosProdutos] = useState();
  const [carrinho, setCarrinho] = useState();

  const getApiData = async () => {
    const response = await fetch("mock_data/listaProdutos.json")
    .then((response) => response.json());

    setDadosProdutos(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className={styles.container}>   
        <main className={styles.main} style={{'background-image': 'url("../images/texture2.jpg")'}}>
            <div className={styles.grid}>{
                dadosProdutos&&
                dadosProdutos.map((produto) => (<ProductCatalog className={styles.card} produto={produto} shoppingCart={carrinho}></ProductCatalog>))
            }</div>
        </main>

        <footer className={styles.footer}>
          <h3 className={styles.title}> Welcome to <a href="https://nextjs.org">Next.js!</a> </h3>
          Powered by {' '} <span className={styles.logo}><img src="/vercel.svg" alt="Vercel Logo" /></span>
        </footer>
    </div>
  )
}
