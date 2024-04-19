import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from './store/index'; // Импортируем ваш Redux-стор
import App from './App';

test('renders learn react link', async () => { // Добавляем async для использования waitFor
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Ждем, пока элемент появится в DOM
  await waitFor(() => {
    const linkElement = screen.getByText("Добавить объявление");
    expect(linkElement).toBeInTheDocument();
  });
});
