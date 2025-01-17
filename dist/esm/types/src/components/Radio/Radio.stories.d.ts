import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioProps } from "./Radio";
declare const _default: ComponentMeta<{
  (props: RadioProps): React.JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    state: null;
    stateMessage: string;
    labelText: string;
    className: string;
    style: {};
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
  };
}>;
export default _default;
export declare const RadioPlayground: ComponentStory<{
  (props: RadioProps): React.JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    state: null;
    stateMessage: string;
    labelText: string;
    className: string;
    style: {};
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
  };
}>;
export declare const radioSample: (args: RadioProps) => React.JSX.Element;
export declare const stateSample: (args: RadioProps) => React.JSX.Element;
export declare const disabledRadioSample: (
  args: RadioProps
) => React.JSX.Element;
export declare const stateVariants: (args: RadioProps) => React.JSX.Element;
