import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import store from './app/store';
import App from './components/App';
import './index.css';
import ToggleColorModeProvider from './utils/ToggleColorMode';

// const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		{/* <ThemeProvider theme={theme}> */}
		<ToggleColorModeProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ToggleColorModeProvider>
		{/* </ThemeProvider> */}
	</Provider>
);
