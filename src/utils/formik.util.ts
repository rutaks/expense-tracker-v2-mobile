/**
 * Provides respective error string if found
 * @param touched
 * @param errors
 * @param field
 */
export const getFormikError = (
  formikProps: {touched: any; errors: any},
  field: any,
) => {
  if (
    formikProps.touched[field] === true &&
    formikProps.errors[field] !== undefined
  ) {
    return formikProps.errors[field];
  }
  return false;
};
