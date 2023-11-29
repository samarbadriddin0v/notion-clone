"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const DocumentPage = () => {
  const { user } = useUser();
  const createDocument = useMutation(api.document.createDocument);

  const onCreateDocument = () => {
    createDocument({
      title: "Untitled",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center space-y-4 flex-col">
      <Image
        src={"/note.svg"}
        alt="Logo"
        width={300}
        height={300}
        className="object-cover dark:hidden"
      />
      <Image
        src={"/note-dark.svg"}
        alt="Logo"
        width={300}
        height={300}
        className="object-cover hidden dark:block"
      />
      <h2 className="text-lg font-bold">
        Welcome to {user?.firstName}`s document page!
      </h2>
      <Button onClick={onCreateDocument}>
        <Plus className="h-4 w-4 mr-2" />
        Create a blank
      </Button>
    </div>
  );
};

export default DocumentPage;
