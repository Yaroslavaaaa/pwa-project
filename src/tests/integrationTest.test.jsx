import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store/index'; 
import AdvertismentContainer from '../containers/advertismentContainer';

describe('Integration Test: User Flow', () => {
  test('adds, edits, saves, and deletes advertisement', async () => {
    render(
      <Provider store={store}>
        <AdvertismentContainer />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    fireEvent.change(await screen.findByPlaceholderText('Title'), { target: { value: 'New Title' } });
    fireEvent.change(await screen.findByPlaceholderText('Content'), { target: { value: 'New Content' } });

    fireEvent.click(await screen.findByText('Добавить'));

    await waitFor(() => {
      expect(screen.getByText('New Title')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Редактировать'));
    fireEvent.change(screen.getByPlaceholderText('EditContent'), { target: { value: 'Edited Content' } });
    fireEvent.click(screen.getByText('Сохранить'));

    await waitFor(() => {
      expect(screen.getByText('Edited Content')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Удалить'));

    await waitFor(() => {
      expect(screen.queryByText('Edited Content')).not.toBeInTheDocument();
    });
  });
});
