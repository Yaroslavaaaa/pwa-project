import { useState, memo } from 'react';
import { v4 as uuid } from 'uuid'
import './index.css'

const AddAdvertisementForm = memo(({ onAddAdvertisment }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddAdvertisment({ key:uuid(), title, content});
    setTitle('');
    setContent('');   
  };

  return (
    <div>
      <h2>Добавить объявление</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" />
        <textarea name="" id="" cols="30" rows="10" placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} className="form-input"></textarea>
        <button type="submit" className='submit'>Добавить</button>
      </form>
    </div>
  );
});

export default AddAdvertisementForm;
