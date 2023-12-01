import { cn } from "@/lib/utils";
import { url } from "inspector";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ImageIcon, X } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ preview, url }: CoverProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[10vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image fill src={url} alt="cover" className="object-cover" />}

      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-20 flex items-center gap-x-2">
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-muted-foreground text-xs"
          >
            <ImageIcon />
            <span>Change cover</span>
          </Button>
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-muted-foreground text-xs"
          >
            <X />
            <span>remove</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};
