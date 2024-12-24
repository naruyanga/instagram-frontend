import { House } from "lucide-react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { User } from "lucide-react";

export const Parent = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const redirect = () => {
    push("profile");
  };

  return (
    <div className="bg-black">
      <a href="/posts">
        <div className="text-white text-3xl px-8 py-2 border-b-2 border-neutral-700">
          Instagram
        </div>
      </a>
      <div>{children}</div>
      <div className="flex justify-around text-white p-4 border-t-2 border-neutral-700">
        <House />
        <Search className="" />
        <User onClick={redirect} />
      </div>
    </div>
  );
};
