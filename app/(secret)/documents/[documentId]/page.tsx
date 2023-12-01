"use client";

import Cover from "@/components/shared/cover";
import Toolbar from "@/components/shared/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import "@blocknote/core/style.css";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdage = ({ params }: DocumentIdPageProps) => {
  const document = useQuery(api.document.getDocumentById, {
    id: params.documentId as Id<"documents">,
  });
  const updateFields = useMutation(api.document.updateFields);

  const Editor = useMemo(
    () => dynamic(() => import("@/components/shared/editor"), { ssr: false }),
    []
  );

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) return null;

  const onChange = (value: string) => {
    updateFields({
      id: document._id,
      content: value,
    });
  };

  return (
    <div className="pb-40">
      <Cover
        url={
          "https://www.notion.so/images/page-cover/rijksmuseum_mignons_1660.jpg"
        }
      />

      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar document={document} />
        <Editor initialContent={document.content} onChange={onChange} />
      </div>
    </div>
  );
};

export default DocumentIdage;
