// GitHub Pages serves this site from /higala-website/, not /. Every
// root-absolute href/src must go through this so links survive that base path.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
