import Link from "next/link";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="profile-layout flex">
      <div className="slidebar w-1/4">
        <ul>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile/edit">Edit Profile</Link>
          </li>
          <li>
            <Link href="/profile/orders">Orders</Link>
          </li>
        </ul>
      </div>
      <div className="main-content w-3/4 p-4">{children}</div>
    </div>
  );
};

export default ProfileLayout;
