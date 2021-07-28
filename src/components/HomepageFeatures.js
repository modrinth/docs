import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Modrinth's API is made from the ground up to be easy to use, and easily usable in other applications, not just ours.
      </>
    ),
  },
  {
    title: 'Free to use',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Modrinth doesn't change money or prevent certain developers from using the API, and does not makes advertising mandatory.
      </>
    ),
  },
  {
    title: 'Powered by Rust',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Rust allows us to have a high performance and high safety on what we do, making our APIs really fast.
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
