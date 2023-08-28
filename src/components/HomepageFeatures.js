import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

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
