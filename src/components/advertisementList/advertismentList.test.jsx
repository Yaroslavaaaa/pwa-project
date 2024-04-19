
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store/index';
import AdvertisementList from './advertisementList';

test('renders AdvertisementList correctly', () => {
    const advertisments = [{ key: '1', title: 'Title 1', content: 'Content 1' }];
    render(
      <Provider store={store}>
        <AdvertisementList advertisments={advertisments} />
      </Provider>
    );
    expect(screen.getByText('Объявления')).toBeInTheDocument();
  });


