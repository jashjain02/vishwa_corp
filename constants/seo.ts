/** Production origin (from CNAME). Update here if the site moves to another domain. */
export const SITE_URL = 'https://vishwacorporation.com';

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
