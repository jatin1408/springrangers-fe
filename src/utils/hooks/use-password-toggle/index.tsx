import React, { useState } from 'react';
import eyeSlash from './../../../../public/images/icons/eye-slash.svg';
import eye from './../../../../public/images/icons/eye.svg';
import Image from 'next/image';

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const icon = (
    <Image
      src={visible ? eye : eyeSlash}
      alt='seePassword'
      width={15}
      height={15}
      onClick={() => setVisibility(!visible)}
    />
  );

  const inputType = visible ? 'text' : 'password';

  return [inputType, icon];
};

export default usePasswordToggle;
