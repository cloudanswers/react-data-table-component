/// <reference types="react" />
import { ExpandableIcon, ExpandSingleRowAction, RowState } from './types';
declare type CellExpanderProps<T> = {
    name: string;
    disabled: boolean;
    expanded: boolean;
    expandableIcon: ExpandableIcon;
    id: string | number;
    row: T;
    keyField: string;
    rowCount: number;
    expandableRowsSingle: boolean;
    expandableRowDisabled: RowState<T>;
    onExpandedRow: (action: ExpandSingleRowAction<T>) => void;
    handleExpanded: () => void;
};
declare function CellExpander<T>({ name, row, expanded, expandableIcon, id, keyField, rowCount, onExpandedRow, handleExpanded, expandableRowsSingle, expandableRowDisabled, }: CellExpanderProps<T>): JSX.Element;
export default CellExpander;
