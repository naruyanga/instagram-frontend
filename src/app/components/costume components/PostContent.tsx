import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const PostContent = ({ postImage }: { postImage: string }) => {
  return (
    <CardContent className="p-0">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <img className="w-full h-[450px]" src={postImage} />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </CardContent>
  );
};
