"use client";

import { Id } from "@/convex/_generated/dataModel";
import React from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdage = ({ params }: DocumentIdPageProps) => {
  return <div>{params.documentId}</div>;
};

export default DocumentIdage;
