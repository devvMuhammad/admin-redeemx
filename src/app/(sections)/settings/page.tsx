import AppearanceForm from "@/components/orders/AppearanceForm";
import ProfileForm from "@/components/orders/ProfileForm";
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
