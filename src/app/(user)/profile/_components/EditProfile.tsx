import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProfileDetails from "./EditProfileDetails";
import ChangePassword from "./ChangePassword";
import { TUserDetails } from "@/src/types";
import CustomModal from "@/src/components/ui/CustomModal";
import CustomTab from "@/src/components/ui/CustomTab";
type TProps = {
  userData: TUserDetails;
};

const EditProfile = ({ userData }: TProps) => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const tabs = [
    {
      id: "details",
      label: "Edit details",
      content: <EditProfileDetails userData={userData} />,
    },
    {
      id: "password",
      label: "Change password",
      content: <ChangePassword />,
    },
  ];
  return (
    <div>
      <button
        onClick={() => setIsEditProfileModalOpen(true)}
        className="absolute right-5 bottom-3 flex items-center gap-2 font-semibold border px-3 rounded-full dark:bg-slate-800 text-white"
      >
        <FaRegEdit />
        Edit profile
      </button>
      <CustomModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        footer={false}
        title="Edit profile"
      >
        <div className="">
          <CustomTab tabs={tabs} />
        </div>
      </CustomModal>
    </div>
  );
};

export default EditProfile;
