import { StyledLoader } from './Styled';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div className={css.LoaderBox}>
      <StyledLoader>
        <div></div>
      </StyledLoader>
    </div>
  );
}