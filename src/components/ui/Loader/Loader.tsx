import { LoaderWrapper } from './LoaderStyles';

type LoaderProps = {
  height?: number;
};

export const Loader = ({ height }: LoaderProps) => {
  return (
    <LoaderWrapper className="center" sx={{ height: height || 'auto' }}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};
