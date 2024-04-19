import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'; 
import store from '../store/index';
import AdvertismentContainer from './advertismentContainer';

describe('AdvertismentContainer', () => {
  test('renders AdvertismentContainer correctly', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <AdvertismentContainer />
        </Provider>
      );
    });

    expect(screen.getByText('Добавить объявление')).toBeInTheDocument();
    expect(screen.getByText('Объявления')).toBeInTheDocument();
  });
});
