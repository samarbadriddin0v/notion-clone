"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { useState } from "react";
import { Item } from "./item";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
}

export const DocumentList = ({
  level = 0,
  parentDocumentId,
}: DocumentListProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [documentId]: !prev[documentId],
    }));
  };

  const documents = useQuery(api.document.getDocuments, {
    parentDocument: parentDocumentId,
  });

  return (
    <>
      {documents?.map((document) => (
        <div key={document._id}>
          <Item
            label={document.title}
            id={document._id}
            level={level}
            expanded={expanded[document._id]}
            onExpand={() => onExpand(document._id)}
          />
          {expanded[document._id] && (
            <DocumentList parentDocumentId={document._id} level={level + 1} />
          )}
        </div>
      ))}
    </>
  );
};
