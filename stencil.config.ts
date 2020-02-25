import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
