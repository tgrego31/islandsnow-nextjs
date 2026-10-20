'use client';

import Image from 'next/image';

const FullWidthImage = () => (
  <div className="hero-image">
    <Image src="/islandsnow-main.png" alt="Island Snow storefront and merchandise" width={785} height={327} sizes="(max-width: 800px) 100vw, 785px" priority className="img-fluid" />
  </div>
);

export default FullWidthImage;
