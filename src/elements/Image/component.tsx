import * as React from 'react';
import styled from '@emotion/styled';

export interface Props extends
  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}

const ImageElement = styled.img`
  height: 100%;
  width: auto;
  color: #ffffff;
  border-radius: 12px;
`;

export default React.forwardRef<HTMLImageElement, Props>(function Image({
  onError,
  ...props
}, ref) {
  const [error, setError] = React.useState(false);
  const handleError = React.useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    if (onError) {
      onError(e);
    }
  }, [setError, onError]);
  return (
    <React.Fragment>
      <ImageElement
        alt=""
        {...props}
        ref={ref}
        onError={handleError}
      />
      {error && <div />}
    </React.Fragment>
  );
});
