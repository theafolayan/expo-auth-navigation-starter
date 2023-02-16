import { useFormikContext } from 'formik';
import React from 'react';

import AppPasswordInput from './AppPasswordInput';
import AppTextInput from './AppTextInput';

export default function FormField({ name, autoFocus, password, customStyle, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      {password ? (
        <AppPasswordInput
          error={errors[name]}
          errorVisible={touched[name]}
          value={values[name]}
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
        />
      ) : (
        <AppTextInput
          autoFocus={autoFocus}
          error={errors[name]}
          errorVisible={touched[name]}
          value={values[name]}
          customStyle={customStyle}
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
        />
      )}
    </>
  );
}
