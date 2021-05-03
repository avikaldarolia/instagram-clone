import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile } from "../../services/firebase";
export default function Header({
  photoCount,
  loggedInUsername,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    followers = [],
    following = [],
    username: profileUsername,
  },
  followerCount,
  setFollowerCount,
}) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const { user } = useUser();
  const activeBtnFollow = user.username && user.username !== profileUsername;

  const handleToggleFollow = () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile
        ? followers.length - 1
        : followers.length + 1,
    });
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profileUserId
      );

      setIsFollowingProfile(!!isFollowing);
    };

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profileUserId]);

  return (
    <div className='grid grid-col-3 gap-4 justify-between mx-auto max-w-screen-lg'>
      <div className='container flex justify-center'>
        {user.username && (
          <img
            src={`/images/avatars/${profileUsername}.jpeg`}
            alt={`${profileUsername} profile picture`}
            className='rounded-full h-40 w-40 flex'
          />
        )}
      </div>
      <div className='flex items-center justify-center flex-col col-span-2'>
        <div className='container flex items-center'>
          <p className='text-2xl mr-4'>{profileUsername}</p>
          {activeBtnFollow && (
            <button
              className='bg-blue-medium font-bold text-sm rounded text-white w-20 h-8'
              type='button'
              onClick={handleToggleFollow}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleToggleFollow();
                }
              }}
            >
              {isFollowingProfile ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="container flex-mt-4">
          {followers === undefined}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
    fullName: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
  }),
};
