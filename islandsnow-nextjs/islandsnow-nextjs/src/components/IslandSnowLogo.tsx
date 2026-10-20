'use client';

import Image from 'next/image';

const IslandSnowLogo = () => (
  <div className="logo-section text-center">
    <Image src="/islandsnow-logo.png" alt="Island Snow logo" width={215} height={38} priority />
  </div>
);

export default IslandSnowLogo;
