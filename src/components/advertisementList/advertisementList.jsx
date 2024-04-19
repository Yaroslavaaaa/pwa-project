import { useState, memo } from 'react';
import './advertisementList.css'

const AdvertisementList = memo(({ advertisments, onDeleteAdvertisment, onUpdateAdvertisment }) => {
  const [editData, setEditData] = useState({});
  const [editModeMap, setEditModeMap] = useState({});


  const handleEdit = (advertisment) => {
    setEditData({
      ...editData,
      [advertisment.key]: { title: advertisment.title, content: advertisment.content}
    });
    setEditModeMap({
      ...editModeMap,
      [advertisment.key]: true
    });
  };

  const handleSave = (advertismentId) => {
    onUpdateAdvertisment(advertismentId, editData[advertismentId]);
    setEditModeMap({
      ...editModeMap,
      [advertismentId]: false
    });
  };

  const handleChange = (advertismentId, field, value) => {
    setEditData({
      ...editData,
      [advertismentId]: {
        ...editData[advertismentId],
        [field]: value
      }
    });
  };

  return (
    <div>
      <h2>Объявления</h2>

      <div className="cards">
      {advertisments.map(advertisment => (
        <div className="card" key={advertisment.key}>
          <div className="card-header">
            <h2 className="card-title">{advertisment.title}</h2>
          </div>
          <div className="card-body">
            <p className="card-content">{advertisment.content}</p>
          </div>
          <div className="card-footer">
            {editModeMap[advertisment.key] ? (
              <div className="edit-form">
                <input type="text" value={editData[advertisment.key]?.title} onChange={(e) => handleChange(advertisment.key, 'title', e.target.value)} className="form-input" />
                <textarea placeholder='EditContent' cols="30" rows="10" value={editData[advertisment.key]?.content} onChange={(e) => handleChange(advertisment.key, 'content', e.target.value)} className="form-input-content"></textarea>
                <button onClick={() => handleSave(advertisment.key)} className="btn-save">Сохранить</button>
              </div>
            ) : (
              <div>
                <button onClick={() => handleEdit(advertisment)} className="btn-edit">Редактировать</button>
                <button onClick={() => onDeleteAdvertisment(advertisment.key)} className="btn-delete">Удалить</button>
              </div>
            )}
          </div>
        </div>
      ))}

      </div>

    
    </div>
  );
});

export default AdvertisementList;
