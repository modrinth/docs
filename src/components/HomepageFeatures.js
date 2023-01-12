import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title: <Translate id="homepage.simple-by-design">Simple by design</Translate>,
        Svg: require('../../static/img/undraw_building_blocks.svg').default,
        description: (
            <Translate id="homepage.simple-by-design.desc">
                Modrinth's API is made from the ground up to be easy to use, and easy to integrate into other applications, not just ours.
            </Translate>
        ),
    },
    {
        title: <Translate id="homepage.free-to-use">Free to use</Translate>,
        Svg: require('../../static/img/undraw_running_wild.svg').default,
        description: (
            <Translate id="homepage.free-to-use.desc">
                Modrinth doesn't charge money or prevent certain developers from using the API, and we do not make advertising mandatory.
            </Translate>
        ),
    },
    {
        title: <Translate id="homepage.powered-by-rust">Powered by Rust</Translate>,
        Svg: require('../../static/img/undraw_fast_loading.svg').default,
        description: (
            <Translate id="homepage.powered-by-rust.desc">
                Rust allows us to have a high performance and high safety on what we do, making our APIs really fast.
            </Translate>
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
