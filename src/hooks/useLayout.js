import { useEffect, useState } from 'react';

function useLayout(title) {
  const [Layout, setLayout] = useState({ title: title });

  useEffect(() => {
    return function () {
      return null;
    };
  }, []);

  return [Layout, setLayout];
}

export default useLayout;
