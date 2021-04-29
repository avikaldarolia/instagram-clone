import PropTypes, { func } from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function SuggestedProfile({
  userDocId,
  username,
  profileId,
  userId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
  }

  return !followed ? (
    <div className='flex flex-row items-center align-items justify-between'>
      <div className='flex items-center justify-between'>
        <img
          src={`/images/avatars/${username}.jpeg`}
          alt='Follower'
          className='rounded-full w-8 flex mr-3'
        />
        <Link to={`/p/${username}`}>
          <p className='font-bold text-sm'>{username}</p>
        </Link>
      </div>
      <div className=''>
        <button
          type='button'
          onClick={() => console.log("Followed this user")}
          className='text-xs font-bold text-blue-medium'
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
