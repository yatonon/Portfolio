import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './unnamed.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 713:18 */
export const unnamed: FC<Props> = memo(function unnamed(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>ヘッダー</div>}
    </div>
  );
});
