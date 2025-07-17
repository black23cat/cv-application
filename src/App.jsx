import { useState } from 'react';
import { format } from 'date-fns';
import Sidebar from './components/Sidebar';
import PreviewCV from './components/GeneratedCv';

function App() {
  const [userData, setUserData] = useState({});
  const [educationLists, setEducationLists] = useState([]);
  const [activeEducationId, setActiveEducationId] = useState(null);
  const [experienceLists, setExperienceLists] = useState([]);
  const [activeExperienceId, setActiveExperienceId] = useState(null);
  const [skillLists, setSkillLists] = useState([]);
  const [activeSkillId, setActiveSkillId] = useState(null);

  function handleProfileSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const updateData = {
      ...userData,
      fullName: target.fullName.value,
      profession: target.profession.value,
      email: target.email.value,
      phone: target.phone.value,
      address: target.address.value,
      aboutMe: target.aboutMe.value,
    };
    setUserData(updateData);
  }

  function handleEditEducationForm(id) {
    if (id === activeEducationId) {
      setActiveEducationId(null);
    } else {
      setActiveEducationId(id);
    }
  }

  function handleDeleteEducationForm(id) {
    const newEducationLists = educationLists.filter((list) => list.id !== id);
    setEducationLists(newEducationLists);
  }

  function handleEducationSubmit(e, id) {
    e.preventDefault();
    const newEducationLists = educationLists.map((list) =>
      list.id === id
        ? {
            ...list,
            school:
              e.target.school.value === ''
                ? '(Edit Detail)'
                : e.target.school.value,
            degree: e.target.degree.value,
            city: e.target.city.value,
            graduate: format(e.target.graduate.value, 'MMM - yyyy'),
          }
        : list
    );
    setEducationLists(newEducationLists);
    setActiveEducationId(null);
  }

  function addEducationList() {
    const education = {
      id: crypto.randomUUID(),
      school: '(Edit Detail)',
      degree: '',
      city: '',
      graduate: '',
    };
    setActiveEducationId(education.id);
    setEducationLists([...educationLists, education]);
  }

  function handleEditExperienceForm(id) {
    if (activeExperienceId === id) {
      setActiveExperienceId(null);
    } else {
      setActiveExperienceId(id);
    }
  }

  function handleDeleteExperienceForm(id) {
    const newLists = experienceLists.filter((list) => list.id !== id);
    setExperienceLists(newLists);
  }

  function handleExperienceSubmit(e, id) {
    e.preventDefault();
    const newLists = experienceLists.map((list) =>
      list.id === id
        ? {
            ...list,
            position:
              e.target.position.value === ''
                ? '(Edit Detail)'
                : e.target.position.value,
            company: e.target.company.value,
            jobDesc: e.target.jobDesc.value,
            from: format(e.target.from.value, 'MMM yyyy'),
            to: format(e.target.to.value, 'MMM yyyy'),
          }
        : list
    );
    setActiveExperienceId(null);
    setExperienceLists(newLists);
  }

  function addExperienceLists() {
    const experience = {
      id: crypto.randomUUID(),
      position: '(Edit Detail)',
      company: '',
      jobDesc: '',
      from: '',
      to: '',
    };
    setActiveExperienceId(experience.id);
    setExperienceLists([...experienceLists, experience]);
  }

  function handleEditSkillForm(id) {
    if (activeSkillId === id) {
      setActiveSkillId(null);
    } else {
      setActiveSkillId(id);
    }
  }

  function handleDeleteSkillForm(id) {
    const newLists = skillLists.filter((list) => list.id !== id);
    setSkillLists(newLists);
  }

  function handleSkillSubmit(e, id) {
    e.preventDefault();
    const newLists = skillLists.map((list) =>
      list.id === id
        ? {
            ...list,
            skill:
              e.target.skill.value === ''
                ? '(Edit Detail)'
                : e.target.skill.value,
          }
        : list
    );
    setSkillLists(newLists);
    setActiveSkillId(null);
  }

  function addSkillLists() {
    const skill = {
      id: crypto.randomUUID(),
      skill: '(Edit Detail)',
    };
    setActiveSkillId(skill.id);
    setSkillLists([...skillLists, skill]);
  }

  return (
    <>
      <header>
        <h1>CvBuilder</h1>
      </header>
      <Sidebar
        handleProfileSubmit={handleProfileSubmit}
        educationData={{
          lists: educationLists,
          activeEducationId,
          handleEditForm: handleEditEducationForm,
          handleDeleteForm: handleDeleteEducationForm,
          handleEducationSubmit,
          addEducationList,
        }}
        experienceData={{
          lists: experienceLists,
          activeExperienceId,
          handleEditForm: handleEditExperienceForm,
          handleDeleteForm: handleDeleteExperienceForm,
          handleExperienceSubmit,
          addExperienceLists,
        }}
        skillData={{
          lists: skillLists,
          activeSkillId,
          handleEditForm: handleEditSkillForm,
          handleDeleteForm: handleDeleteSkillForm,
          handleSkillSubmit,
          addSkillLists,
        }}
      />
      <PreviewCV
        data={{
          userData,
          educationData: educationLists,
          experienceData: experienceLists,
          skillData: skillLists,
        }}
      />
      <footer></footer>
    </>
  );
}

export default App;
