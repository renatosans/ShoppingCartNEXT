
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import CartItem from '../componentes/CartItem';


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
        <main className={styles.main} style={{'backgroundColor': 'gray'}}>
            <ul>{dadosProdutos&&
              dadosProdutos.map((produto) => (<CartItem produto={produto} shoppingCart={carrinho}></CartItem>))
            }</ul>
        </main>

        <footer className={styles.footer}>
          <h3 className={styles.title}> Welcome to <a href="https://nextjs.org">Next.js!</a> </h3>
          Powered by {' '} <span className={styles.logo}><img src="/vercel.svg" alt="Vercel Logo" /></span>
        </footer>
    </div>
  )
}
