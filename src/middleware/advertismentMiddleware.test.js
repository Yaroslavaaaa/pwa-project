import localStorageMiddleware from './advertismentMiddleware';


Storage.prototype.setItem = jest.fn();

describe('localStorageMiddleware', () => {
  test('saves advertisments to localStorage on ADD_ADVERTISMENT', () => {
    const store = {
      getState: () => ({
        advertisments: [{ key: '1', title: 'Test Title', content: 'Test Content' }]
      }),
      dispatch: jest.fn()
    };
    const next = jest.fn();
    const action = { type: 'ADD_ADVERTISMENT' };
    localStorageMiddleware(store)(next)(action);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'advertisments',
      JSON.stringify([{ key: '1', title: 'Test Title', content: 'Test Content' }])
    );
  });

  test('saves advertisments to localStorage on DELETE_ADVERTISMENT', () => {
    const store = {
      getState: () => ({
        advertisments: []
      }),
      dispatch: jest.fn()
    };
    const next = jest.fn();
    const action = { type: 'DELETE_ADVERTISMENT' };
    localStorageMiddleware(store)(next)(action);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'advertisments',
      JSON.stringify([])
    );
  });

  test('saves advertisments to localStorage on UPDATE_ADVERTISMENT', () => {
    const store = {
      getState: () => ({
        advertisments: [{ key: '1', title: 'Updated Title', content: 'Updated Content' }]
      }),
      dispatch: jest.fn()
    };
    const next = jest.fn();
    const action = { type: 'UPDATE_ADVERTISMENT' };
    localStorageMiddleware(store)(next)(action);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'advertisments',
      JSON.stringify([{ key: '1', title: 'Updated Title', content: 'Updated Content' }])
    );
  });

  test('saves advertisments to localStorage on LOAD_ADVERTISMENT', () => {
    const store = {
      getState: () => ({
        advertisments: [{ key: '1', title: 'Loaded Title', content: 'Loaded Content' }]
      }),
      dispatch: jest.fn()
    };
    const next = jest.fn();
    const action = { type: 'LOAD_ADVERTISMENT' };
    localStorageMiddleware(store)(next)(action);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'advertisments',
      JSON.stringify([{ key: '1', title: 'Loaded Title', content: 'Loaded Content' }])
    );
  });
});
