import React, { Suspense } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./style.scss";

render(
	<Suspense fallback={<div>Loading...</div>}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
