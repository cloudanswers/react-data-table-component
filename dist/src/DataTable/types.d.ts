/// <reference types="react" />
import { Alignment, Direction, Media } from './constants';
import { CSSObject } from 'styled-components';
export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare type Primitive = string | number | boolean | bigint;
export declare type ColumnSortFunction<T> = (a: T, b: T) => number;
export declare type ExpandRowToggled<T> = (expanded: boolean, row: T) => void;
export declare type Format<T> = (row: T, rowIndex: number) => React.ReactNode;
export declare type RowState<T> = ((row: T) => boolean) | null;
export declare type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export declare type SortFunction<T> = (rows: T[], field: Selector<T>, sortDirection: SortOrder) => T[];
export declare type TableRow = Record<string, unknown>;
export declare type ComponentProps = Record<string, unknown>;
export declare type ExpanderComponentProps<T> = {
    data: T;
};
export declare type ExpandableRowsComponent<T> = React.ComponentType<ExpanderComponentProps<T>>;
export declare type PaginationChangePage = (page: number, totalRows: number) => void;
export declare type PaginationChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => void;
export declare type PaginationComponentProps = {
    rowsPerPage: number;
    rowCount: number;
    currentPage: number;
    onChangePage: PaginationChangePage;
    onChangeRowsPerPage: PaginationChangeRowsPerPage;
};
export declare type PaginationComponent = React.ComponentType<PaginationComponentProps>;
export declare type TableProps<T> = {
    actions?: React.ReactNode | React.ReactNode[];
    className?: string;
    clearSelectedRows?: boolean;
    clearExpandedRows?: boolean;
    columns: TableColumn<T>[];
    conditionalRowStyles?: ConditionalStyles<T>[];
    contextActions?: React.ReactNode | React.ReactNode[];
    contextComponent?: React.ReactNode;
    contextMessage?: ContextMessage;
    customStyles?: TableStyles;
    data: T[];
    defaultSortAsc?: boolean;
    defaultSortFieldId?: string | number | null | undefined;
    dense?: boolean;
    direction?: Direction;
    disabled?: boolean;
    expandableIcon?: ExpandableIcon;
    expandableInheritConditionalStyles?: boolean;
    expandableRowDisabled?: RowState<T>;
    expandableRowExpanded?: RowState<T>;
    expandableRows?: boolean;
    expandableRowsComponent?: ExpandableRowsComponent<T>;
    expandableRowsComponentProps?: ComponentProps;
    expandableRowsHideExpander?: boolean;
    expandOnRowClicked?: boolean;
    expandOnRowDoubleClicked?: boolean;
    fixedHeader?: boolean;
    fixedHeaderScrollHeight?: string;
    highlightOnHover?: boolean;
    keyField?: string;
    noContextMenu?: boolean;
    noDataComponent?: React.ReactNode;
    noHeader?: boolean;
    noTableHead?: boolean;
    onChangePage?: PaginationChangePage;
    onChangeRowsPerPage?: PaginationChangeRowsPerPage;
    onRowClicked?: (row: T, e: React.MouseEvent) => void;
    onRowDoubleClicked?: (row: T, e: React.MouseEvent) => void;
    onRowExpandToggled?: ExpandRowToggled<T>;
    onSelectedRowsChange?: (selected: {
        allSelected: boolean;
        selectedCount: number;
        selectedRows: T[];
    }) => void;
    onExpandedRowsChange?: (expanded: {
        allExpanded: boolean;
        expandedCount: number;
        expandedRows: T[];
    }) => void;
    onSort?: (selectedColumn: TableColumn<T>, sortDirection: SortOrder) => void;
    onColumnOrderChange?: (nextOrder: TableColumn<T>[]) => void;
    pagination?: boolean;
    paginationComponent?: PaginationComponent;
    paginationComponentOptions?: PaginationOptions;
    paginationDefaultPage?: number;
    paginationIconFirstPage?: React.ReactNode;
    paginationIconLastPage?: React.ReactNode;
    paginationIconNext?: React.ReactNode;
    paginationIconPrevious?: React.ReactNode;
    paginationPerPage?: number;
    paginationResetDefaultPage?: boolean;
    paginationRowsPerPageOptions?: number[];
    paginationServer?: boolean;
    paginationServerOptions?: PaginationServerOptions;
    paginationTotalRows?: number;
    persistTableHead?: boolean;
    pointerOnHover?: boolean;
    progressComponent?: React.ReactNode;
    progressPending?: boolean;
    responsive?: boolean;
    selectableRowDisabled?: RowState<T>;
    selectableRows?: boolean;
    selectableRowsComponent?: 'input' | React.ReactNode;
    selectableRowsComponentProps?: ComponentProps;
    selectableRowSelected?: RowState<T>;
    selectableRowsHighlight?: boolean;
    selectableRowsNoSelectAll?: boolean;
    expandableRowsNoExpandAll?: boolean;
    selectableRowsVisibleOnly?: boolean;
    selectableRowsSingle?: boolean;
    expandableRowsSingle?: boolean;
    sortFunction?: SortFunction<T> | null;
    sortIcon?: React.ReactNode;
    sortServer?: boolean;
    striped?: boolean;
    keepExpandableFirst?: boolean;
    style?: CSSObject;
    subHeader?: React.ReactNode | React.ReactNode[];
    subHeaderAlign?: Alignment;
    subHeaderComponent?: React.ReactNode | React.ReactNode[];
    subHeaderWrap?: boolean;
    theme?: Themes;
    title?: string | React.ReactNode;
    footer?: React.ReactNode;
};
export declare type TableColumnBase = {
    allowOverflow?: boolean;
    button?: boolean;
    center?: boolean;
    compact?: boolean;
    reorder?: boolean;
    grow?: number;
    hide?: number | ((value: number) => CSSObject) | Media;
    id?: string | number;
    ignoreRowClick?: boolean;
    maxWidth?: string;
    minWidth?: string;
    name?: string | number | React.ReactNode;
    omit?: boolean;
    right?: boolean;
    sortable?: boolean;
    style?: CSSObject;
    width?: string;
    wrap?: boolean;
};
export interface TableColumn<T> extends TableColumnBase {
    name?: string | number | React.ReactNode;
    sortField?: string;
    cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
    conditionalCellStyles?: ConditionalStyles<T>[];
    format?: Format<T> | undefined;
    selector?: Selector<T>;
    sortFunction?: ColumnSortFunction<T>;
}
export interface ConditionalStyles<T> {
    when: (row: T) => boolean;
    style?: CSSObject | ((row: T) => CSSObject);
    classNames?: string[];
}
export interface TableStyles {
    table?: {
        style: CSSObject;
    };
    tableWrapper?: {
        style: CSSObject;
    };
    responsiveWrapper?: {
        style: CSSObject;
    };
    header?: {
        style: CSSObject;
    };
    subHeader?: {
        style: CSSObject;
    };
    head?: {
        style: CSSObject;
    };
    headRow?: {
        style?: CSSObject;
        denseStyle?: CSSObject;
    };
    headCells?: {
        style?: CSSObject;
        draggingStyle?: CSSObject;
    };
    contextMenu?: {
        style?: CSSObject;
        activeStyle?: CSSObject;
    };
    cells?: {
        style: CSSObject;
        draggingStyle?: CSSObject;
    };
    rows?: {
        style?: CSSObject;
        selectedHighlightStyle?: CSSObject;
        denseStyle?: CSSObject;
        highlightOnHoverStyle?: CSSObject;
        stripedStyle?: CSSObject;
    };
    expanderRow?: {
        style: CSSObject;
    };
    expanderCell?: {
        style: CSSObject;
    };
    expanderButton?: {
        style: CSSObject;
    };
    pagination?: {
        style?: CSSObject;
        pageButtonsStyle?: CSSObject;
    };
    noData?: {
        style: CSSObject;
    };
    progress?: {
        style: CSSObject;
    };
}
export interface PaginationOptions {
    noRowsPerPage?: boolean;
    rowsPerPageText?: string;
    rangeSeparatorText?: string;
    selectAllRowsItem?: boolean;
    selectAllRowsItemText?: string;
}
export interface PaginationServerOptions {
    persistSelectedOnSort?: boolean;
    persistSelectedOnPageChange?: boolean;
    persistExpandedOnSort?: boolean;
    persistExpandedOnPageChange?: boolean;
}
export interface ExpandableIcon {
    collapsed: React.ReactNode;
    expanded: React.ReactNode;
}
export interface ContextMessage {
    singular: string;
    plural: string;
    message?: string;
}
export declare type TableState<T> = {
    allSelected: boolean;
    allExpanded: boolean;
    contextMessage: ContextMessage;
    selectedCount: number;
    expandedCount: number;
    selectedRows: T[];
    expandedRows: T[];
    selectedColumn: TableColumn<T>;
    sortDirection: SortOrder;
    currentPage: number;
    rowsPerPage: number;
    selectedRowsFlag: boolean;
    expandedRowsFlag: boolean;
    toggleOnSelectedRowsChange: boolean;
    toggleOnExpandedRowsChange: boolean;
};
declare type ThemeText = {
    primary: string;
    secondary: string;
    disabled: string;
};
declare type ThemeBackground = {
    default: string;
};
declare type ThemeContext = {
    background: string;
    text: string;
};
declare type ThemeDivider = {
    default: string;
};
declare type ThemeButton = {
    default: string;
    focus: string;
    hover: string;
    disabled: string;
};
declare type ThemeSelected = {
    default: string;
    text: string;
};
declare type ThemeHighlightOnHover = {
    default: string;
    text: string;
};
declare type ThemeStriped = {
    default: string;
    text: string;
};
export declare type Themes = string;
export interface Theme {
    text: ThemeText;
    background: ThemeBackground;
    context: ThemeContext;
    divider: ThemeDivider;
    button: ThemeButton;
    selected: ThemeSelected;
    highlightOnHover: ThemeHighlightOnHover;
    striped: ThemeStriped;
}
export interface AllRowsAction<T> {
    type: 'SELECT_ALL_ROWS';
    keyField: string;
    rows: T[];
    rowCount: number;
    mergeSelections: boolean;
}
export interface ExpandAllRowsAction<T> {
    type: 'EXPAND_ALL_ROWS';
    keyField: string;
    rows: T[];
    rowCount: number;
    mergeExpansions: boolean;
}
export interface SingleRowAction<T> {
    type: 'SELECT_SINGLE_ROW';
    keyField: string;
    row: T;
    isSelected: boolean;
    rowCount: number;
    singleSelect: boolean;
}
export interface ExpandSingleRowAction<T> {
    type: 'EXPAND_SINGLE_ROW';
    keyField: string;
    row: T;
    isExpanded: boolean;
    rowCount: number;
    singleExpand: boolean;
}
export interface MultiRowAction<T> {
    type: 'SELECT_MULTIPLE_ROWS';
    keyField: string;
    selectedRows: T[];
    totalRows: number;
    mergeSelections: boolean;
}
export interface ExpandMultiRowAction<T> {
    type: 'EXPAND_MULTIPLE_ROWS';
    keyField: string;
    expandedRows: T[];
    totalRows: number;
    mergeExpansions: boolean;
}
export interface SortAction<T> {
    type: 'SORT_CHANGE';
    sortDirection: SortOrder;
    selectedColumn: TableColumn<T>;
    clearSelectedOnSort: boolean;
}
export interface PaginationPageAction {
    type: 'CHANGE_PAGE';
    page: number;
    paginationServer: boolean;
    visibleOnly: boolean;
    persistSelectedOnPageChange: boolean;
}
export interface PaginationRowsPerPageAction {
    type: 'CHANGE_ROWS_PER_PAGE';
    rowsPerPage: number;
    page: number;
}
export interface ClearSelectedRowsAction {
    type: 'CLEAR_SELECTED_ROWS';
    selectedRowsFlag: boolean;
}
export interface ClearExpandedRowsAction {
    type: 'CLEAR_EXPANDED_ROWS';
    expandedRowsFlag: boolean;
}
export interface ColumnsAction<T> {
    type: 'UPDATE_COLUMNS';
    cols: TableColumn<T>[];
}
export declare type Action<T> = AllRowsAction<T> | ExpandAllRowsAction<T> | SingleRowAction<T> | ExpandSingleRowAction<T> | MultiRowAction<T> | ExpandMultiRowAction<T> | SortAction<T> | PaginationPageAction | PaginationRowsPerPageAction | ClearSelectedRowsAction | ClearExpandedRowsAction;
export {};
