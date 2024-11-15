import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './unnamed2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    unnamed?: ReactNode;
  };
}
/* @figmaId 713:26 */
export const unnamed2: FC<Props> = memo(function unnamed2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>セル</div>}
    </div>
  );
});
