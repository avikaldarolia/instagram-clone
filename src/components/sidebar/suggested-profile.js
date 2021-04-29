import PropTypes, { func } from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";
export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    // 2 firebase functions:

    // 1: update the following array of the logged in user (in this case, myprofile)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);

    //update the followers array of the user who has been followed
    await updateFollowedUserFollowers(profileDocId, loggedInUserDocId, false);
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
          onClick={handleFollowUser}
          className='text-xs font-bold text-blue-medium'
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};