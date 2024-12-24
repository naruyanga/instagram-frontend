import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { likeTypes } from "@/app/posts/page";

export const PostActions = ({
  setIsOpen,
  setPostId,
  postId,
  likes,
  comments,
  username,
  caption,
  router,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setPostId: Dispatch<SetStateAction<string>>;
  likes: likeTypes[];
  postId: string;
  comments: string;
  username: string;
  caption: string;
  router: AppRouterInstance;
}) => {
  return (
    <div className="p-2">
      <div className=" flex justify-between">
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Heart />
            <div
              onClick={() => {
                setIsOpen(true);
                setPostId(postId);
              }}
              className="font-bold"
            >
              {likes.length}
            </div>
          </div>
          <div className="flex gap-2">
            <MessageCircle />
            <div className="font-bold">{comments.length}</div>
          </div>
          <Send />
        </div>
        <Bookmark />
      </div>
      <div className="flex gap-1">
        <div className=" font-bold">{username}</div>
        <div className="">{caption}</div>
      </div>
      <div onClick={() => router.push(`/posts/comments/${postId}`)}>
        View all comments
      </div>
    </div>
  );
};
