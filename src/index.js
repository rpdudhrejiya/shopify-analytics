import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '@shopify/polaris/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

ReactDOM.render(
	<AppProvider i18n={enTranslations}>
		<App />
	</AppProvider>,
	document.getElementById("root")
);
