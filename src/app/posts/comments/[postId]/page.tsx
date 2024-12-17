"use client";
import { use, useEffect, useState } from "react";

type commentsType = {
  _id: string;
  comment: string;
  userId: {
    profileImage: string;
    username: string;
  };
};

const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const [comments, setComments] = useState<commentsType[]>([]);

  const { postId } = use(params);

  const getComments = async () => {
    console.log("working");
    const jsonData = await fetch(
      `https://instagram-backend-1-lqdd.onrender.com/post/comments/${postId}`
    );
    const response = await jsonData.json();
    setComments(response);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="flex flex-col  bg-black h-screen text-white">
      <div className="font-bold flex justify-center">Comments</div>
      {comments?.map((comment) => {
        const { userId } = comment;
        return (
          <div className="pl-8 py-4 flex items-center gap-2 " key={comment._id}>
            <img src={userId.profileImage} className="rounded-full h-10 w-10" />
            <div className="">
              <div className="text-sm font-bold">{userId.username}</div>
              <div className="">{comment.comment}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
