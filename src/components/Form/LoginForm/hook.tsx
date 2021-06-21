import { useState } from 'react';

const useHooks = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleSetId = (e: string) => {
    setId(e);
  };

  const handleSetPassword = (e: string) => {
    setPassword(e);
  };

  return {
    id,
    password,
    handleSetId,
    handleSetPassword
  };
};

export { useHooks };
