import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/user";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
export default function Suggestions({ userId, following }) {
  // const { firebase } = useContext(FirebaseContext);
  // const { user } = useContext(UserContext);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const suggestedProfiles = async () => {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    };

    if (userId) {
      suggestedProfiles();
    }

    console.log("userID", userId);
  }, [userId]);

  console.log("profiles", profiles);

  return !profiles ? (
    <Skeleton count={10} height={150} className='mt-5' />
  ) : profiles.length > 0 ? (
    <div className='rounded flex flex-col'>
      <div className='text-sm flex items-center align-items justify-between mb-2'>
        <p className='font-bold text-gray-base'>Suggestions for you</p>
      </div>
      <div className='mt-4 grid gap-5'>
        {profiles.map((profile) => {
          {
            /* <SuggestedProfile
            key={profile.docId}
            userDocId={profile.username}
            profileId={profile.userId}
            userId={userId}
          />;  */
          }

          return <p key={profile.userId}>{profile.fullName}</p>;
        })}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
