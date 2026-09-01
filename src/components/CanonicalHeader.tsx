'use client';
import { usePathname } from 'next/navigation';

export default function CanonicalHeader({ domain }: { domain: string }) {
  const pathname = usePathname();
  const safePathname = pathname || '';
  // Strip trailing slash if present (except for root /) to keep URLs clean and consistent
  const cleanPathname = safePathname.endsWith('/') && safePathname !== '/' ? safePathname.slice(0, -1) : safePathname;
  const canonicalUrl = `${domain}${cleanPathname}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
