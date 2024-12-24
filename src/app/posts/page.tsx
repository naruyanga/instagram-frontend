"use client";

import { Card } from "@/components/ui/card";

import { useState, useEffect } from "react";
import { Parent } from "@/components/Parent/Parent";
import { useRouter } from "next/navigation";
import { LikedUsersDialog } from "../components/likedUsersDialog";
import { PostHeader } from "../components/costume components/PostHeader";
import { PostContent } from "../components/costume components/PostContent";
import { PostActions } from "../components/costume components/PostActions";

export type likeTypes = {
  profileImage: string;
  username: string;
  _id: string;
};

type postType = {
  _id: string;
  caption: string;
  postImage: string;
  userId: {
    _id: string;
    username: string;
    email: string;
  };
  likes: likeTypes[];
  comments: string;
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState<string>("");
  console.log(posts);

  const getPosts = async () => {
    console.log("working");
    const token = localStorage.getItem("accessToken");
    const jsonData = await fetch(
      "https://instagram-backend-1-lqdd.onrender.com/post/posts",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await jsonData.json();
    setPosts(response);
  };
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/signup");
    }
    getPosts();
  }, []);

  return (
    <Parent>
      <div className="flex justify-center flex-col items-center bg-black ">
        {posts?.map((post) => {
          return (
            <Card
              className="bg-black text-white p-0  border-black "
              key={post._id}
            >
              <PostHeader username={post.userId.username} />
              <PostContent postImage={post.postImage} />
              <PostActions
                setIsOpen={setIsOpen}
                setPostId={setPostId}
                postId={post._id}
                likes={post.likes}
                comments={post.comments}
                username={post.userId.username}
                caption={post.caption}
                router={router}
              />
            </Card>
          );
        })}
      </div>
      <LikedUsersDialog open={isOpen} setIsOpen={setIsOpen} postId={postId} />
    </Parent>
  );
};
export default Page;
