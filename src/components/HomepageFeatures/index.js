import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Safe and Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cyo is statically typed, nil safe, with a structured approach to resources and concurrency
        and targets a variety of hardware architectures, with zero or low cost abstractions.
      </>
    ),
  },
  {
    title: 'Adaptable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cyo produces native executables, is easy to cross compile, and can also run via the built-in VM, within a JS/WASM runtime and on GraalVM.
      </>
    ),
  },
  {
    title: 'Evolving',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Cyo is developed and maintained by its community of users, with a self-hosted compiler and support for metaprogramming to safely attempt language extension.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
