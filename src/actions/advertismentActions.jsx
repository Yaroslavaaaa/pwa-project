export const addAdvertisment = (advertisment) => ({
  type: 'ADD_ADVERTISMENT',
  payload: advertisment
});

export const deleteAdvertisment = (id) => ({
  type: 'DELETE_ADVERTISMENT',
  payload: id
});

export const updateAdvertisment = (id, advertisment) => ({
  type: 'UPDATE_ADVERTISMENT',
  payload: { id, advertisment }
});

export const loadAdvertisment = (advertisments) => ({
  type: 'LOAD_ADVERTISMENT',
  payload: advertisments
});



