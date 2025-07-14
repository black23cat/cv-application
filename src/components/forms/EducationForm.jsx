import { useState } from 'react';
import { format } from 'date-fns';
import deleteIcon from '../../icons/delete.png';

export default function EducationForm({
  id,
  isActive,
  handleSubmit,
  handleCancel,
  handleDelete,
}) {
  const date = new Date();
  const todayDate = format(
    `${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`,
    'yyyy-MM-dd'
  );
  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    city: '',
    graduate: todayDate,
  });

  function handleOnChange(e) {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const newData = { ...educationData, [targetName]: targetValue };
    setEducationData(newData);
  }
  return (
    <form
      className={`education-form ${isActive ? 'show' : ''}`}
      onSubmit={(e) => handleSubmit(e, id)}
    >
      <div>
        <label htmlFor="school">School :</label>
        <input
          type="text"
          id="school"
          name="school"
          value={educationData.school}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree :</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={educationData.degree}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="city">City :</label>
        <input
          type="text"
          id="city"
          name="city"
          value={educationData.city}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="graduate">Years of Graduate :</label>
        <input
          type="date"
          id="graduate"
          name="graduate"
          value={educationData.graduate}
          max={todayDate}
          onChange={handleOnChange}
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
