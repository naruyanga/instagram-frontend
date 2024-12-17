"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Parent } from "@/components/Parent/Parent";
import { useRouter } from "next/navigation";

type likeTypes = {
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
  console.log(posts);

  const getPosts = async () => {
    console.log("working");
    const jsonData = await fetch(
      "https://instagram-backend-1-lqdd.onrender.com/post/posts"
    );
    const response = await jsonData.json();
    setPosts(response);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/signup");
    }
    getPosts();
  }, []);

  // const { push } = useRouter();
  // const redirect = () => {
  //   push(`post/comments`);
  // };

  const router = useRouter();

  return (
    <Parent>
      <div className="flex justify-center flex-col items-center bg-black ">
        {posts?.map((post) => {
          const { userId } = post;
          return (
            <Card
              className="bg-black text-white p-0  border-black "
              key={post._id}
            >
              <CardHeader className="p-2">
                <div className="flex gap-3 ">
                  <Avatar>
                    <AvatarImage
                      className=""
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center">{userId.username}</div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="flex justify-center">
                      <img className="w-full h-[450px]" src={post.postImage} />
                    </CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                  </CarouselContent>
                  {/* <CarouselPrevious />
                <CarouselNext /> */}
                </Carousel>
              </CardContent>
              {/* <CardFooter> */}
              <div className="p-2">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <Heart />
                      <div className="font-bold">{post.likes.length}</div>
                    </div>
                    <div className="flex gap-2">
                      <MessageCircle />
                      <div className="font-bold">{post.comments.length}</div>
                    </div>
                    <Send />
                  </div>
                  <Bookmark />
                </div>
                <div className="flex gap-1">
                  <div className=" font-bold">{userId.username}</div>
                  <div className="">{post.caption}</div>
                </div>
                <div onClick={() => router.push(`/posts/comments/${post._id}`)}>
                  View all comments
                </div>
                {/* </CardFooter> */}
              </div>
            </Card>
          );
        })}
      </div>
    </Parent>
  );
};
export default Page;
