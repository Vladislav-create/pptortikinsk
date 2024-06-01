import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../../store/profile/actions";

export const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);
  const dispath = useDispatch();
  console.log(profile);
  return (
    <div>
      <h1>ProfilePage</h1>
      <button onClick={() => dispath(toggleVisibleProfile())}>
        toggleVisibleProfile
      </button>
      {profile.isVisibleProfile && (
        <div>
          <h1>{profile.firstName}</h1>
          <h1>{profile.lastName}</h1>
        </div>
      )}
    </div>
  );
};
