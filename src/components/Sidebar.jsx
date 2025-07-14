import ProfileForm from './forms/ProfileForm';
import EducationLists from './lists/EducationLists';
import ExperienceLists from './lists/ExperienceLists';
import SkillLists from './lists/SkillLists';
import profileIcon from '../icons/user-detail.png';
import educationIcon from '../icons/education.png';

export default function Sidebar({
  handleProfileSubmit,
  educationData,
  experienceData,
  skillData,
}) {
  return (
    <aside>
      <h2>
        <span>
          <img src={profileIcon} alt="" width="32px" />
          Personal Detail
        </span>
      </h2>
      <ProfileForm handleProfileSubmit={handleProfileSubmit} />

      <h2>
        <span>
          <img src={educationIcon} alt="" />
          Education
        </span>
      </h2>
      {educationData.lists.length > 0 && (
        <EducationLists data={educationData} />
      )}
      <button
        className="add education"
        onClick={educationData.addEducationList}
      >
        (+) Add Education
      </button>

      <h2>Experience</h2>
      {experienceData.lists.length > 0 && (
        <ExperienceLists data={experienceData} />
      )}
      <button
        className="add experience"
        onClick={experienceData.addExperienceLists}
      >
        +
      </button>
      <h2>Skills</h2>
      {skillData.lists.length > 0 && <SkillLists data={skillData} />}
      <button className="add skills" onClick={skillData.addSkillLists}>
        +
      </button>
    </aside>
  );
}
