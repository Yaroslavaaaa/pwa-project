import { addAdvertisment, deleteAdvertisment, updateAdvertisment, loadAdvertisment } from './advertismentActions';

describe('advertismentActions', () => {
  test('addAdvertisment action creator', () => {
    const advertisment = { key: '1', title: 'Test Title', content: 'Test Content' };
    const expectedAction = {
      type: 'ADD_ADVERTISMENT',
      payload: advertisment
    };
    expect(addAdvertisment(advertisment)).toEqual(expectedAction);
  });

  test('deleteAdvertisment action creator', () => {
    const id = '1';
    const expectedAction = {
      type: 'DELETE_ADVERTISMENT',
      payload: id
    };
    expect(deleteAdvertisment(id)).toEqual(expectedAction);
  });

  test('updateAdvertisment action creator', () => {
    const id = '1';
    const advertisment = { title: 'Updated Title', content: 'Updated Content' };
    const expectedAction = {
      type: 'UPDATE_ADVERTISMENT',
      payload: { id, advertisment }
    };
    expect(updateAdvertisment(id, advertisment)).toEqual(expectedAction);
  });

  test('loadAdvertisment action creator', () => {
    const advertisments = [{ key: '1', title: 'Loaded Title', content: 'Loaded Content' }];
    const expectedAction = {
      type: 'LOAD_ADVERTISMENT',
      payload: advertisments
    };
    expect(loadAdvertisment(advertisments)).toEqual(expectedAction);
  });
});
