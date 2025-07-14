import { useState } from 'react';
export default function ProfileForm({ handleProfileSubmit }) {
  const [profileData, setProfileData] = useState({
    fullName: '',
    profession: '',
    email: '',
    phone: '',
    address: '',
    aboutMe: '',
  });

  function handleChange(e) {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    const updatedProfile = { ...profileData, [targetName]: targetValue };
    setProfileData(updatedProfile);
  }

  return (
    <form className="profile-form" onSubmit={handleProfileSubmit}>
      <div>
        <label htmlFor="full-name">Full Name :</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={profileData.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="profession">Profession :</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={profileData.profession}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone :</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={profileData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address :</label>
        <input
          type="text"
          id="address"
          name="address"
          value={profileData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="aboutMe">About Me :</label>

        <textarea
          id="aboutMe"
          name="aboutMe"
          rows="5"
          cols="33"
          maxLength="400"
          value={profileData.aboutMe}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
