/// <reference types="react" />
import { ExpandableIcon, ExpandAllRowsAction, RowState } from './types';
interface ColumnExpanderProps<T> {
    headCell?: boolean;
    keyField: string;
    mergeExpansions: boolean;
    rowData: T[];
    expandedRows: T[];
    allExpanded: boolean;
    expandableIcon: ExpandableIcon;
    expandableRowDisabled: RowState<T>;
    onExpandAllRows: (action: ExpandAllRowsAction<T>) => void;
}
declare function ColumnExpander<T>({ headCell, rowData, keyField, allExpanded, mergeExpansions, expandedRows, expandableIcon, expandableRowDisabled, onExpandAllRows, }: ColumnExpanderProps<T>): JSX.Element;
export default ColumnExpander;
