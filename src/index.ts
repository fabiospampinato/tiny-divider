
/* IMPORT */

import color from 'tiny-colors';

/* MAIN */

const divider = (): void => {

  const width: number = globalThis.process?.stdout?.getWindowSize?.()?.[0] || 25;
  const divider = '-'.repeat ( width );

  console.log ( color.dim ( divider ) );

};

/* EXPORT */

export default divider;
