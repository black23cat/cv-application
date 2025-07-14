import ExperienceForm from '../forms/ExperienceForm';
import expandIcon from '../../icons/expand-form.png';

export default function ExperienceLists({ data }) {
  const {
    lists,
    activeExperienceId,
    handleEditForm,
    handleDeleteForm,
    handleExperienceSubmit,
  } = data;
  return (
    <div className="experience-lists-wrapper">
      {lists.map((list) => {
        return (
          <div key={list.id} className="card">
            <div className="button-wrapper">
              <button
                className="edit-form-btn"
                onClick={() => handleEditForm(list.id)}
              >
                {list.position}
                {list.company !== '' ? ', ' : ''}
                {list.company}
                <img
                  className={activeExperienceId === list.id ? 'rotate' : ''}
                  src={expandIcon}
                  width="20px"
                  alt=""
                />
              </button>

              <ExperienceForm
                id={list.id}
                isActive={activeExperienceId === list.id}
                handleSubmit={handleExperienceSubmit}
                handleCancel={() => handleEditForm(list.id)}
                handleDelete={() => handleDeleteForm(list.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
