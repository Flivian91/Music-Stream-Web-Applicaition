import profile from "../assets/profile.jpg";
function Profile() {
  return (
    <div className="">
      <img
        src={profile}
        className="w-12 h-12 rounded-full border border-yellow-600"
        alt="flivian profile"
      />
    </div>
  );
}

export default Profile;
