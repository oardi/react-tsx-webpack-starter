import { StrictMode, Suspense } from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style.scss';

const rootElement: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(rootElement as HTMLElement);

root.render(
	<Suspense fallback={<div>Loading...</div>}>
		<StrictMode>
			<App />
		</StrictMode>
	</Suspense>
);

if (module.hot) {
	module.hot.accept();
}
