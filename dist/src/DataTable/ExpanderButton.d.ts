/// <reference types="react" />
import { ExpandableIcon } from './types';
declare type ExpanderButtonProps<T> = {
    name: string;
    disabled?: boolean;
    expanded?: boolean;
    expandableIcon: ExpandableIcon;
    id: string | number;
    row: T;
    onToggled?: (row: T) => void;
};
declare function ExpanderButton<T>({ name, disabled, expanded, expandableIcon, id, row, onToggled, }: ExpanderButtonProps<T>): JSX.Element;
export default ExpanderButton;
