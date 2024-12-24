import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export const PostHeader = ({ username }: { username: string }) => {
  return (
    <CardHeader className="p-2">
      <div className="flex gap-3 ">
        <Avatar>
          <AvatarImage className="" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center">{username}</div>
      </div>
    </CardHeader>
  );
};
