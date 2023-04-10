import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { FC } from 'react';
import Main from './src/components/Main/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App: FC = () => {
	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: 'tomato',
			accent: 'yellow',
		},
	};

	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<Main />
			</PaperProvider>
		</Provider>
	);
};

export default App;
