/// <reference types="react" />
import { ExpandableIcon } from './types';
declare type ExpanderButtonHeadProps = {
    name: string;
    disabled?: boolean;
    expanded?: boolean;
    expandableIcon: ExpandableIcon;
    onToggled?: () => void;
};
declare function ExpanderButtonHead({ name, disabled, expanded, expandableIcon, onToggled, }: ExpanderButtonHeadProps): JSX.Element;
export default ExpanderButtonHead;
