import SkillsForm from '../forms/SkillForm';
import expandIcon from '../../icons/expand-form.png';

export default function SkillLists({ data }) {
  const {
    lists,
    activeSkillId,
    handleEditForm,
    handleDeleteForm,
    handleSkillSubmit,
  } = data;
  return (
    <div className="skill-lists-wrapper">
      {lists.map((list) => {
        return (
          <div key={list.id} className="card">
            <div className="button-wrapper">
              <button
                className="edit-form-btn"
                onClick={() => handleEditForm(list.id)}
              >
                {list.skill}
                <img
                  className={activeSkillId === list.id ? 'rotate' : ''}
                  src={expandIcon}
                  width="20px"
                  alt=""
                />
              </button>
              <SkillsForm
                id={list.id}
                isActive={activeSkillId === list.id}
                handleSubmit={handleSkillSubmit}
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
