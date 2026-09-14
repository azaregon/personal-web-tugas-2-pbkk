import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { home as homeRoute } from './routes';
import { home as dashboardHomeRoute } from './routes/dashboard';
import { detail as mahasiswaDetailRoute } from './routes/mahasiswa';
import { idea as agentIdeaRoute } from './routes/agent';
import { ipk as kalkulatorIpkRoute } from './routes/kalkulator';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const routeResolver = (name: string, args?: unknown, options?: unknown): string => {
    switch (name) {
        case 'home':
            return homeRoute(options as never).url;
        case 'dashboard.home':
            return dashboardHomeRoute(options as never).url;
        case 'mahasiswa.detail':
            if (args && typeof args === 'object' && !Array.isArray(args)) {
                return mahasiswaDetailRoute(args as never, options as never).url;
            }
            return mahasiswaDetailRoute(args as never, options as never).url;
        case 'agent.idea':
            if (args && typeof args === 'object' && !Array.isArray(args)) {
                return agentIdeaRoute(args as never, options as never).url;
            }
            return agentIdeaRoute(undefined as never, options as never).url;
        case 'kalkulator.ipk':
            if (args && typeof args === 'object' && !Array.isArray(args)) {
                return kalkulatorIpkRoute(args as never, options as never).url;
            }
            return kalkulatorIpkRoute(args as never, options as never).url;
        default:
            return '/';
    }
};

globalThis.route = routeResolver;
if (typeof window !== 'undefined') {
    window.route = routeResolver;
}

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    resolve: (name) => resolvePageComponent(
        `./pages/${name}.jsx`,
        import.meta.glob('./pages/**/*.jsx')
    ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
