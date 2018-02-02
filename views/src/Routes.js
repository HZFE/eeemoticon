import loadable from 'loadable-components';

export const HomePage = loadable(() => import('./Layout/Home/'));
export const SearchPage = loadable(() => import('./Layout/Search/'));