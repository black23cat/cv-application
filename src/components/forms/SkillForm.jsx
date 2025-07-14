import { useState } from 'react';
import deleteIcon from '../../icons/delete.png';

export default function SkillsForm({
  id,
  isActive,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  const [skillValue, setSkillValue] = useState('');
  function handleChange(value) {
    setSkillValue(value);
  }
  return (
    <form
      className={`skill-form ${isActive ? 'show' : ''}`}
      onSubmit={(e) => handleSubmit(e, id)}
    >
      <div>
        <label htmlFor="skill">Add New Skill :</label>
        <input
          type="text"
          id="skill"
          name="skill"
          value={skillValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className="form-btn-wrapper">
        <input type="submit" className="confirm-edit" value="Confirm" />
        <input
          type="button"
          className="cancel-edit"
          value="Cancel"
          onClick={handleCancel}
        />
        <button type="button" className="delete-form" onClick={handleDelete}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </form>
  );
}
