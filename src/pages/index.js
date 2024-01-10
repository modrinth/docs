import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar";

const FeatureList = [
  {
    title: 'Simple by design',
    Svg: require('../../static/img/undraw_building_blocks.svg').default,
    description: (
        <>
          Modrinth is made from the ground up to be easy to use and easy to integrate into other applications, not just our own.
        </>
    ),
  },
  {
    title: 'Free to use',
    Svg: require('../../static/img/undraw_running_wild.svg').default,
    description: (
        <>
          Modrinth doesn't charge money or prevent certain developers from using our APIs, and we <b>do not</b> make advertising mandatory.
        </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('../../static/img/undraw_fast_loading.svg').default,
    description: (
        <>
          Rust empowers us to achieve both exceptional performance and robust safety in our work, resulting in exceptionally fast APIs.
        </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modrinth is an open source modding platform, hosting lots of Minecraft content.">
      <main className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.searchBarWrapper}><SearchBar /></div>
          <p className="hero__subsubtitle">
            If none of these pages address your needs, please <a href="https://support.modrinth.com" target="_blank">visit our Support page</a>!
          </p>
        </div>
      </main>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </main>
</Layout>
)
  ;
}
