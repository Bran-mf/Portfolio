import React, { SetStateAction, useState } from 'react';
import { z, ZodObject } from 'zod';

const useForm = <T>(initialState: T, validations: ZodObject<any, any, any>) => {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<z.SafeParseReturnType<any, any>>();

  const onChange = (callbackFunction: SetStateAction<T>) => {
    setData(callbackFunction);
  };
  const getFieldError = (field: string) => {
    return errors?.error?.issues.find((issue) => issue.path[0] === field);
  };
  const validate = (name?: string) => {
    const tempSchema = _getSchema(name);
    const newErrors = tempSchema.safeParse(data);
    handleSetError(newErrors);
  };
  const handleSetError = (newErrors: z.SafeParseReturnType<any, any>) => {
    const previouseIssues = errors?.error?.issues || [];
    newErrors.error?.addIssues(previouseIssues);
    setErrors(newErrors);
  };
  const _getSchema = (propertyName?: string) => {
    if (propertyName) {
      return validations.pick({ [propertyName]: true });
    }
    return validations;
  };
  const handleSimpleOnChange = (name: string, value: any) =>
    onChange((prev) => ({ ...prev, [name]: value }));

  return { data, onChange, errors, getFieldError, validate,handleSimpleOnChange };
};

export default useForm;
