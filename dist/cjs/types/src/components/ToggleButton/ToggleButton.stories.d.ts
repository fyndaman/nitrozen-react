import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./ToggleButton").ToggleButtonProps): React.JSX.Element;
    defaultProps: {
      id: string;
      value: boolean;
      disabled: boolean;
      labelText: null;
      size: string;
      state: null;
      stateMessage: string;
      icon: null;
      showIcon: boolean;
      onIconClick: () => void;
    };
  }>
>;
export default _default;
export declare const ToggleBtn: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./ToggleButton").ToggleButtonProps): React.JSX.Element;
    defaultProps: {
      id: string;
      value: boolean;
      disabled: boolean;
      labelText: null;
      size: string;
      state: null;
      stateMessage: string;
      icon: null;
      showIcon: boolean;
      onIconClick: () => void;
    };
  }>
>;
export declare const demo: () => React.JSX.Element;
export declare const iconDemo: () => React.JSX.Element;
export declare const stateIconDemo: () => React.JSX.Element;
