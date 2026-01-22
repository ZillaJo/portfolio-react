import { User, GraduationCap, BarChart3, Phone, Briefcase } from "lucide-react";

const profileData = [
  { label: "Full Name", value: "Jonathan Mdh", icon: User },
  { label: "Degree", value: "Bachelor", icon: GraduationCap },
  { label: "Level", value: "Fullstack Developer", icon: BarChart3 },
  { label: "Phone", value: "+250 788 635 875", icon: Phone },
  { label: "Freelance", value: "Available", icon: Briefcase },
];

const ProfileTable = () => {
  return (
    <div className="flex justify-center p-4 rounded-xl  w-full mt-6 bg-base-100 shadow-xl">
      <table className="w-90 p-6 table-auto rounded-xl">
        <tbody>
          {profileData.map((item, index) => (
            <tr key={index} className="justify-center border-b last:border-none">
              <td className="py-3 font-semibold flex items-center gap-2">
                <item.icon size={28} className="text-accent" />
                {item.label}
              </td>
              <td className="py-3 text-right">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
