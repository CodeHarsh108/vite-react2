import PropTypes from 'prop-types';

function ProfileCard({ name, age, isMember, hobbies }) {
  return (
    <div className="profile-card">
      <div className={`member-badge ${isMember ? 'member' : 'non-member'}`}>
        {isMember ? 'Member' : 'Guest'}
      </div>
      
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        
        <h3>
          <span className="label">Age:</span>
          <span className="value">{age} years</span>
        </h3>
        
        <h3>
          <span className="label">Status:</span>
          <span className={`value ${isMember ? 'status-yes' : 'status-no'}`}>
            {isMember ? "Active Member" : "Guest User"}
          </span>
        </h3>
      </div>
      
      <div className="hobbies-section">
        <h3 className="hobbies-title">Hobbies & Interests</h3>
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index} className="hobby-item">
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileCard;