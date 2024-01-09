import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar";
import Link from "@docusaurus/core/lib/client/exports/Link";

const FeatureList = [
  {
    title: 'Modrinth App FAQ',
    description: (
        <>
          <ul>
            <li><Link to={"faq/app/modpack-basics"}>How do I install or create a Modrinth modpack?</Link></li>
            <li><Link to={"faq/app/share"}>How do I share a modpack with others?</Link></li>
            <li><Link to={"faq/app/unpair"}>How do I unlock or unpair an instance?</Link></li>
            <li><Link to={"faq/app/repair"}>How do I repair an instance?</Link></li>
            <li><Link to={"faq/app/file-location"}>Where are the Modrinth App files located?</Link></li>
            <li><Link to={"faq/app/java"}>How do I install Java?</Link></li>
            <li><Link to={"faq/app/duplicate-instances"}>Can I run two copies of the same instance at the same time?</Link></li>
          </ul>
          <h4>Errors and crashes</h4>
          <ul>
            <li><Link to={"faq/app/crashing"}>Why is my modded game instance crashing?</Link></li>
            <li><Link to={"faq/app/network"}>Why am I getting a network error when downloading files?</Link></li>
            <li><Link to={"faq/app/power-outage"}>Why did my instances suddenly disappear?</Link></li>
            <li><Link to={"faq/app/intermediary"}>Why am I getting an error from Fabric saying that it cannot access intermediary?</Link></li>
            <li><Link to={"faq/app/exclamation-point"}>Why do I crash when I put an exclamation point in my instance name?</Link></li>
            <li><Link to={"faq/app/unsupported"}>Why can't I launch certain Minecraft versions?</Link></li>
            <li><Link to={"faq/app/russia"}>Why can't I access the Modrinth App from Russia?</Link></li>
          </ul>
          <h4>Account-related errors</h4>
          <ul>
            <li><Link to={"faq/app/msa"}>Why can't I sign in to my Microsoft account?</Link></li>
            <li><Link to={"faq/app/underage"}>Why am I getting an error saying my account is underage?</Link></li>
            <li><Link to={"faq/app/invalid-session"}>Why can't I join multiplayer servers? (Invalid session)</Link></li>
          </ul>
          <h4>Operating system-specific questions</h4>
          <ul>
            <li><Link to={"faq/app/webview2"}>Why doesn't the app boot on Windows? (Corrupted Microsoft Edge WebView2 installation)</Link></li>
            <li><Link to={"faq/app/program-files"}>Why am I getting a "IO error: Access is denied" error? (Program Files forbidden)</Link></li>
            <li><Link to={"faq/app/32bit-java"}>Why am I getting "out-of-memory" errors, even when I have enough memory allocated?</Link></li>
            <li><Link to={"faq/app/catalina"}>Why can't I launch the app on macOS Catalina (or older)?</Link></li>
            <li><Link to={"faq/app/packaging"}>Why isn't the Modrinth App packaged for my Linux distribution?</Link></li>
            <li><Link to={"faq/app/gnome"}>Why doesn't the app boot on Linux? (Using GNOME Wayland)</Link></li>
            <li><Link to={"faq/app/linux-links"}>Why can't I open links or folders on Linux?</Link></li>
          </ul>
        </>
    ),
  },
  {
    title: 'Other Pages',
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
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.searchBarWrapper}><SearchBar /></div>
          <p className="hero__subsubtitle">
            If none of these pages address your needs, please <a href="https://discord.modrinth.com" target="_blank">join us on Discord</a>!
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props) => (
                  <div className={clsx('col col--6')}>
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
