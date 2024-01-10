import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar";
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
  {
    title: 'Pages',
    description: (
        <ul>
          <li><Link to={"what"}>What is Modrinth?</Link></li>
          <li><Link to={"roadmap"}>Modrinth Public Roadmap</Link></li>
          <li><Link to={"api"}>Getting Started with the API</Link></li>
          <ul>
            <li><Link to={"api/migration"}>API Migration Information</Link></li>
            <ul><li><Link to={"api/migration/v1-to-v2"}>From API v1 to API v2</Link></li></ul>
          </ul>
          <li><Link to={"ads"}>Adrinth (Modrinth's Advertising)</Link></li>
          <li><Link to={"contributing"}>Contributing to Modrinth</Link></li>
          <li><Link to={"markdown"}>Markdown Formatting</Link></li>
          <li><Link to={"maven"}>Modrinth Maven Usage</Link></li>
          <li><Link to={"modpacks"}>Modpacks on Modrinth</Link></li>
          <ul>
            <li><Link to={"modpacks/play"}>Playing Modpacks</Link></li>
            <li><Link to={"modpacks/create"}>Creating Modpacks</Link></li>
            <li><Link to={"modpacks/format"}>Modpack Format</Link></li>
            <li><Link to={"modpacks/permissions"}>Obtaining Modpack Permissions</Link></li>
          </ul>
        </ul>
    ),
  },
];

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
            If none of these pages address your needs, please <a href="https://discord.modrinth.com" target="_blank">join us on Discord</a>!
          </p>
        </div>
      </main>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props) => (
                  <div className={clsx('col col--12')}>
                    <div className="padding-horiz--md">
                      <h3>{props.title}</h3>
                      <p>{props.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
