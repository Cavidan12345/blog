import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return {
    formData,
    setFormData,
    onChangeInput,
  };
};
