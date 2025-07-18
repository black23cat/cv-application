import EducationForm from '../forms/EducationForm';
import expandIcon from '../../icons/expand-form.png';

export default function EducationLists({ data }) {
  const {
    lists,
    activeEducationId,
    handleEditForm,
    handleDeleteForm,
    handleEducationSubmit,
  } = data;
  return (
    <div className="education-lists-wrapper">
      {lists.map((list) => {
        return (
          <div key={list.id} className="card">
            <div className="button-wrapper">
              <button
                className="edit-form-btn"
                onClick={() => handleEditForm(list.id)}
              >
                {list.school}
                <img
                  className={activeEducationId === list.id ? 'rotate' : ''}
                  src={expandIcon}
                  width="20px"
                  alt=""
                />
              </button>
            </div>
            <div className="form-wrapper">
              <EducationForm
                id={list.id}
                isActive={activeEducationId === list.id}
                handleSubmit={handleEducationSubmit}
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
