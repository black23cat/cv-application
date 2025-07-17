import { useState } from 'react';
import { format } from 'date-fns';
import deleteIcon from '../../icons/delete.png';

export default function ExperienceForm({
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
  const [experienceData, setExperiencecData] = useState({
    position: '',
    company: '',
    jobDesc: '',
    from: todayDate,
    to: todayDate,
  });
  function handleChange(e) {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const newData = { ...experienceData, [targetName]: targetValue };
    setExperiencecData(newData);
  }
  return (
    <form
      className={`experience-form ${isActive ? 'show' : ''}`}
      onSubmit={(e) => handleSubmit(e, id)}
    >
      <div>
        <label htmlFor="position">Position :</label>
        <input
          type="text"
          id="position"
          name="position"
          value={experienceData.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="company">Company :</label>
        <input
          type="text"
          id="company"
          name="company"
          value={experienceData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="job-description">Job Description : </label>
        <textarea
          id="job-description"
          name="jobDesc"
          rows="5"
          cols="33"
          maxLength="200"
          value={experienceData.jobDesc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="date-start">From :</label>
        <input
          type="date"
          id="date-start"
          name="from"
          max={todayDate}
          value={experienceData.from}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date-end">To :</label>
        <input
          type="date"
          id="date-end"
          name="to"
          max={todayDate}
          value={experienceData.to}
          onChange={handleChange}
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
