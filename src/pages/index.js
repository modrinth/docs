import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subsubtitle">
          If none of these pages address your needs, please <a href="https://discord.modrinth.com" target="_blank">join us on Discord</a>!
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.button)}
            to="/faq">
            Knowledge Base
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.button)}
            to="/api-spec">
            API Routes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modrinth is an open source modding platform, hosting lots of Minecraft content.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
