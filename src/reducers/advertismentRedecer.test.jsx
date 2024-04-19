import advertismentReducer from './advertismentReducer';

describe('advertismentReducer', () => {
  test('handles ADD_ADVERTISMENT action', () => {
    const initialState = {
      advertisments: []
    };
    const advertisment = { key: '1', title: 'Test Title', content: 'Test Content' };
    const action = {
      type: 'ADD_ADVERTISMENT',
      payload: advertisment
    };
    const newState = advertismentReducer(initialState, action);
    expect(newState.advertisments).toHaveLength(1);
    expect(newState.advertisments[0]).toEqual(advertisment);
  });

  test('handles DELETE_ADVERTISMENT action', () => {
    const initialState = {
      advertisments: [
        { key: '1', title: 'Title 1', content: 'Content 1' },
        { key: '2', title: 'Title 2', content: 'Content 2' },
        { key: '3', title: 'Title 3', content: 'Content 3' }
      ]
    };
    const action = {
      type: 'DELETE_ADVERTISMENT',
      payload: '2'
    };
    const newState = advertismentReducer(initialState, action);
    expect(newState.advertisments).toHaveLength(2);
    expect(newState.advertisments.some(ad => ad.key === '2')).toBeFalsy();
  });

  test('handles UPDATE_ADVERTISMENT action', () => {
    const initialState = {
      advertisments: [
        { key: '1', title: 'Title 1', content: 'Content 1' },
        { key: '2', title: 'Title 2', content: 'Content 2' },
        { key: '3', title: 'Title 3', content: 'Content 3' }
      ]
    };
    const action = {
      type: 'UPDATE_ADVERTISMENT',
      payload: { id: '2', advertisment: { title: 'Updated Title', content: 'Updated Content' } }
    };
    const newState = advertismentReducer(initialState, action);
    const updatedAdvertisment = newState.advertisments.find(ad => ad.key === '2');
    expect(updatedAdvertisment.title).toBe('Updated Title');
    expect(updatedAdvertisment.content).toBe('Updated Content');
  });

  test('handles LOAD_ADVERTISMENT action', () => {
    const initialState = {
      advertisments: []
    };
    const advertismentsData = [
      { key: '1', title: 'Title 1', content: 'Content 1' },
      { key: '2', title: 'Title 2', content: 'Content 2' },
      { key: '3', title: 'Title 3', content: 'Content 3' }
    ];
    const action = {
      type: 'LOAD_ADVERTISMENT',
      payload: advertismentsData
    };
    const newState = advertismentReducer(initialState, action);
    expect(newState.advertisments).toHaveLength(3);
    expect(newState.advertisments).toEqual(advertismentsData);
  });

  test('handles unknown action type', () => {
    const initialState = {
      advertisments: [
        { key: '1', title: 'Title 1', content: 'Content 1' }
      ]
    };
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: { key: '2', title: 'Title 2', content: 'Content 2' }
    };
    const newState = advertismentReducer(initialState, action);
    expect(newState).toEqual(initialState); 
  });
});
