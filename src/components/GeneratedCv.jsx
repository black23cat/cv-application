import '../styles/cv.css';
import { Fragment } from 'react';
import professionIcon from '../icons/profession.png';
import emailIcon from '../icons/email.png';
import phoneIcon from '../icons/phone.png';
import addressIcon from '../icons/address.png';
import profileIcon from '../icons/profile.png';

export default function PreviewCV({ data }) {
  const { userData, educationData, experienceData, skillData } = data;
  return (
    <main>
      <section className="personal-contact">
        <img src={profileIcon} alt="" />
        <div className="profile-detail">
          <h2>{userData.fullName}</h2>
          <div>
            <span>
              <img src={professionIcon} alt="" />
            </span>
            <p>{userData.profession}</p>
          </div>
          <div>
            <span>
              <img src={emailIcon} alt="" />
            </span>
            <p>{userData.email}</p>
          </div>
          <div>
            <span>
              <img src={phoneIcon} alt="" />
            </span>
            <p>{userData.phone}</p>
          </div>
          <div>
            <img src={addressIcon} alt="" />
            <p>{userData.address}</p>
          </div>
        </div>
      </section>
      <section className="about-me">
        <h2>About Me</h2>
        <p>{userData.aboutMe}</p>
      </section>
      <section>
        <h2>Education</h2>
        {educationData.map((data) => {
          return (
            <ul key={data.id}>
              <li>
                <p>
                  <strong>
                    {' '}
                    {data.school} ({data.graduate}){' '}
                  </strong>
                </p>
                <p>
                  <em>{data.degree}</em>
                </p>
                <p>{data.city}</p>
              </li>
            </ul>
          );
        })}
      </section>
      <section className="experience-section">
        <h2>Experience</h2>
        {experienceData.map((data) => {
          return (
            <ul key={data.id}>
              <li>
                <div>
                  <p>
                    <strong>{data.company}</strong>
                  </p>
                  <p>
                    <em>
                      {data.from} - {data.to}
                    </em>
                  </p>
                </div>
                <p>{data.position}</p> <p>{data.jobDesc}</p>
              </li>
            </ul>
          );
        })}
      </section>
      <section>
        <h2>Skills</h2>
        <p>
          {skillData.map((data, index) => {
            return (
              <Fragment key={data.id}>
                {index === skillData.length - 1 && skillData.length > 1
                  ? 'and '
                  : ''}
                {data.skill}
                {index === skillData.length - 1
                  ? '.'
                  : index === skillData.length - 2
                  ? ' '
                  : ', '}
              </Fragment>
            );
          })}
        </p>
      </section>
    </main>
  );
}
