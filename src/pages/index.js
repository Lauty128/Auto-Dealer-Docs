import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <header className={styles.header}>
        <div className={styles.header__presentation}>
          <h1>Centralizando esfuerzos, maximizando resultados.</h1>
          <p>
            Aplicación web integral diseñada para revolucionar la forma en que los concesionarios de vehículos gestionan sus operaciones.
            <br />
            AutoDealer representa una evolución en la gestión de concesionarios de vehículos, ofreciendo una solución completa y adaptable a las necesidades específicas de cada negocio.
          </p>
          <div>
            <Link className={`${styles.header__button} ${styles['header__button--main']}`} href='/docs/introduccion'>📄 Documentación</Link>
            <Link className={styles.header__button} href='/instalacion'>💻 Instalar entorno de desarrollo</Link>
          </div>
        </div>
        <div className={styles.header__github}>
          <span>👉 Accede al codigo fuente</span>
          <a href='https://github.com/Lauty128/Auto-Dealer-FrontEnd' className={styles.header__githubButton}>
            ✨ FrontEnd
          </a>
          <a href='https://github.com/Lauty128/Auto-Dealer' className={styles.header__githubButton}>
            📡 Backend
          </a>
        </div>
      </header>
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
