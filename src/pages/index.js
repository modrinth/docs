import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SearchBar from "@cmfcmf/docusaurus-search-local/lib/client/theme/SearchBar";

const FeatureList = [
  {
    title: 'General Modrinth FAQ',
    description: (
        <>
          <ul>
            <li><a href={"faq/etas"}>When will (x) feature get released? When will support for other games/Bedrock be added?</a></li>
            <li><a href={"faq/join-filters"}>Why are the search filters broken when filtering by both game versions and loaders?</a></li>
            <li><a href={"faq/dependents"}>How can I see the dependents/reverse-dependencies of a project?</a></li>
            <li><a href={"faq/snapshots"}>When will version (x) or snapshot (x) be added to Modrinth?</a></li>
          </ul>
          <h4>Account-related questions</h4>
          <ul>
            <li><a href={"faq/account-locked"}>Why can't I log into my Modrinth account?</a></li>
            <li><a href={"faq/2fa"}>How can I make my Modrinth account more secure?</a></li>
            <li><a href={"faq/password-requirements"}>What makes a secure Modrinth account password?</a></li>
            <li><a href={"faq/auth-methods"}>How can I add additional authentication methods to my Modrinth account?</a></li>
          </ul>
          <h4>Author questions</h4>
          <ul>
            <li><a href={"faq/review-times"}>How long will my submitted project be "under review" for?</a></li>
            <li><a href={"faq/featured-versions"}>How does the "featured versions" system work?</a></li>
            <li><a href={"faq/additional-files"}>What is the "Additional files" section for?</a></li>
            <li><a href={"faq/version-numbers"}>How should I format my version numbers?</a></li>
          </ul>
        </>
    ),
  },
  {
    title: 'Modrinth App FAQ',
    description: (
        <>
          <ul>
            <li><a href={"faq/app/modpack-basics"}>How do I install or create a Modrinth modpack?</a></li>
            <li><a href={"faq/app/share"}>How do I share a modpack with others?</a></li>
            <li><a href={"faq/app/unpair"}>How do I unlock or unpair an instance?</a></li>
            <li><a href={"faq/app/repair"}>How do I repair an instance?</a></li>
            <li><a href={"faq/app/file-location"}>Where are the Modrinth App files located?</a></li>
            <li><a href={"faq/app/java"}>How do I install Java?</a></li>
            <li><a href={"faq/app/duplicate-instances"}>Can I run two copies of the same instance at the same time?</a></li>
          </ul>
          <h4>Errors and crashes</h4>
          <ul>
            <li><a href={"faq/app/crashing"}>Why is my modded game instance crashing?</a></li>
            <li><a href={"faq/app/network"}>Why am I getting a network error when downloading files?</a></li>
            <li><a href={"faq/app/power-outage"}>Why did my instances suddenly disappear?</a></li>
            <li><a href={"faq/app/intermediary"}>Why am I getting an error from Fabric saying that it cannot access intermediary?</a></li>
            <li><a href={"faq/app/unsupported"}>Why can't I launch certain Minecraft versions?</a></li>
          </ul>
          <h4>Account-related errors</h4>
          <ul>
            <li><a href={"faq/app/underage"}>Why am I getting an error saying my account is underage?</a></li>
            <li><a href={"faq/app/invalid-session"}>Why can't I join multiplayer servers? (Invalid session)</a></li>
            <li><a href={"faq/app/own-minecraft"}>Why am I getting an error saying I don't own Minecraft, even though I do?</a></li>
          </ul>
          <h4>Operating system-specific questions</h4>
          <ul>
            <li><a href={"faq/app/webview2"}>Why doesn't the app boot on Windows? (Corrupted Microsoft Edge WebView2 installation)</a></li>
            <li><a href={"faq/app/program-files"}>Why am I getting a "IO error: Access is denied" error? (Program Files forbidden)</a></li>
            <li><a href={"faq/app/32bit-java"}>Why am I getting "out-of-memory" errors, even when I have enough memory allocated?</a></li>
            <li><a href={"faq/app/catalina"}>Why can't I launch the app on macOS Catalina (or older)?</a></li>
            <li><a href={"faq/app/packaging"}>Why isn't the Modrinth App packaged for my Linux distribution?</a></li>
          </ul>
        </>
    ),
  },
  {
    title: 'Other Pages',
    description: (
        <ul>
          <li><a href={"api"}>Getting Started with the API</a></li>
          <ul>
            <li><a href={"api/migration"}>API Migration Information</a></li>
            <ul><li><a href={"api/migration/v1-to-v2"}>From API v1 to API v2</a></li></ul>
          </ul>
          <li><a href={"ads"}>Adrinth (Modrinth's Advertising)</a></li>
          <li><a href={"contributing"}>Contributing to Modrinth</a></li>
          <li><a href={"markdown"}>Markdown Formatting</a></li>
          <li><a href={"maven"}>Modrinth Maven Usage</a></li>
          <li><a href={"modpacks"}>Modpacks on Modrinth</a></li>
          <ul>
            <li><a href={"modpacks/play"}>Playing Modpacks</a></li>
            <li><a href={"modpacks/create"}>Creating Modpacks</a></li>
            <li><a href={"modpacks/format"}>Modpack Format</a></li>
            <li><a href={"modpacks/permissions"}>Obtaining Modpack Permissions</a></li>
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
                  <div className={clsx('col col--4')}>
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
