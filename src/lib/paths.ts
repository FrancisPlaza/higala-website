// GitHub Pages serves this site from /higala-website/, not /. Every
// root-absolute href/src must go through this so links survive that base path.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

// Macel's Google Calendar scheduling page — every "Book a Demo" link goes here.
export const demoSchedulingUrl =
	'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1tIsJvK7s2z5fbC8HOTHUH5wI8Qgn8kihdLQyfGBywUlm3Hku0kxtecACiwVZIgaj8dO5nDHPW?gv=true';
