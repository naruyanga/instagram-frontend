import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
type likeTypes = {
  userId: [{ profileImage: string; username: string }];
  _id: string;
}[];

export const LikedUsersDialog = ({
  open,
  setIsOpen,
  postId,
}: {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  postId: string;
}) => {
  console.log(postId);
  const [likedUsers, setLikedUsers] = useState<likeTypes>([]);

  const getUsers = async () => {
    const jsonData = await fetch(
      `https://instagram-backend-1-lqdd.onrender.com/post/likedUsers/${postId}`
    );

    const response = await jsonData.json();
    setLikedUsers(response);
  };
  console.log(likedUsers, "gg");

  useEffect(() => {
    getUsers();
  }, [postId]);

  return (
    <Dialog open={open} onOpenChange={(e) => setIsOpen(e)}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <div>
          <div className="font-bold text-xl">Likes</div>
          {likedUsers?.map((likedUser) => {
            return (
              <div key={likedUser._id} className="flex items-center gap-2">
                <img
                  className="h-12 w-12 rounded-full"
                  src={likedUser.userId[0].profileImage}
                />
                <div className="text-black">{likedUser.userId[0].username}</div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
