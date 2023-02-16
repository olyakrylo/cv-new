import { useEffect, useMemo, useState } from 'react';

import { StartTransitionProps } from '../type';
import { styles } from '../ui';

export const useStartTransition = ({ from }: StartTransitionProps) => {
  const initialClassNames = useMemo(() => {
    return [
      styles.Container,
      styles[`Container_${from}`],
      styles.Container_hidden,
    ];
  }, [from]);

  const [startTransitionCN, setStartTransitionCN] = useState(initialClassNames);

  useEffect(() => {
    setStartTransitionCN(initialClassNames.slice(0, 2));
  }, [initialClassNames]);

  return { startTransitionCN };
};
