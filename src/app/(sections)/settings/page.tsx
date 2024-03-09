import AppearanceForm from "@/components/settings/AppearanceForm";
import ProfileForm from "@/components/settings/ProfileForm";
import HrLine from "@/components/ui/hr";

export default function Settings() {
  return (
    <>
      <ProfileForm />
      <HrLine className="my-10" />
      <AppearanceForm />
      <HrLine className="my-10" />
    </>
  );
}
