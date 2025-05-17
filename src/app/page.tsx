import Presentation from "@/components/presentation/presentation";
import Profile from "@/components/profile/profile"
import Separator from "@/components/separator/separator";

export default function Home() {
  return (
      <div className="flex flex-row">
          <Profile />
          <Separator />
          <Presentation />
      </div>
  );
}
