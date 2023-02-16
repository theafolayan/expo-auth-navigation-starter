import { useFormikContext } from "formik";
import React from "react";

import AppButton from "../AppButton";

export default function FormButton({ title, color, disabled }) {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={color}
      onPress={handleSubmit}
      disabled={!isValid}
    />
  );
}
