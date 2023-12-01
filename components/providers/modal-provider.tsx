"use client";

import React, { useEffect, useState } from "react";
import SettingsModal from "../modals/settings-modal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
};

export default ModalProvider;
