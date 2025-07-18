import '../styles/sidebar.css';
import ProfileForm from './forms/ProfileForm';
import EducationLists from './lists/EducationLists';
import ExperienceLists from './lists/ExperienceLists';
import SkillLists from './lists/SkillLists';
import profileIcon from '../icons/user-detail.png';
import educationIcon from '../icons/education.png';
import experienceIcon from '../icons/experience.png';
import skillIcon from '../icons/skill.png';

export default function Sidebar({
  handleProfileSubmit,
  educationData,
  experienceData,
  skillData,
}) {
  return (
    <aside>
      <section>
        <h2>
          <span>
            <img src={profileIcon} alt="" />
            Personal Detail
          </span>
        </h2>
        <ProfileForm handleProfileSubmit={handleProfileSubmit} />
      </section>

      <section>
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
      </section>

      <section>
        <h2>
          <span>
            <img src={experienceIcon} alt="" />
            Experience
          </span>
        </h2>
        {experienceData.lists.length > 0 && (
          <ExperienceLists data={experienceData} />
        )}
        <button
          className="add experience"
          onClick={experienceData.addExperienceLists}
        >
          (+) Add Experience
        </button>
      </section>
      <section>
        <h2>
          <span>
            <img src={skillIcon} alt="" />
            Skills
          </span>
        </h2>
        {skillData.lists.length > 0 && <SkillLists data={skillData} />}
        <button className="add skills" onClick={skillData.addSkillLists}>
          (+) Add Skill
        </button>
      </section>
    </aside>
  );
}
