import React from "react";
export interface InputSuffixProps {
  suffix?: string | JSX.Element;
  onSuffixClick?: React.MouseEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}
declare const InputSuffix: {
  (props: InputSuffixProps): React.JSX.Element;
  defaultProps: {
    onSuffixClick: () => void;
  };
};
export default InputSuffix;
