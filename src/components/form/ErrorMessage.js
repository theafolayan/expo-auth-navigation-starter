import React from "react";

import AppText from "../AppText";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }
  return (
    <AppText small red>
      {error}
    </AppText>
  );
}
