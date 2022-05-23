/// <reference types="react" />
import { Alignment, Direction } from './constants';
export declare const defaultProps: {
    columns: never[];
    data: never[];
    title: string;
    keyField: string;
    selectableRows: boolean;
    selectableRowsHighlight: boolean;
    selectableRowsNoSelectAll: boolean;
    expandableRowsNoExpandAll: boolean;
    selectableRowSelected: null;
    selectableRowDisabled: null;
    selectableRowsComponent: "input";
    selectableRowsComponentProps: {};
    selectableRowsVisibleOnly: boolean;
    selectableRowsSingle: boolean;
    expandableRowsSingle: boolean;
    clearSelectedRows: boolean;
    clearExpandedRows: boolean;
    expandableRows: boolean;
    expandableRowDisabled: null;
    expandableRowExpanded: null;
    expandOnRowClicked: boolean;
    expandableRowsHideExpander: boolean;
    expandOnRowDoubleClicked: boolean;
    expandableInheritConditionalStyles: boolean;
    expandableRowsComponent: () => JSX.Element;
    expandableIcon: {
        collapsed: JSX.Element;
        expanded: JSX.Element;
    };
    expandableRowsComponentProps: {};
    progressPending: boolean;
    progressComponent: JSX.Element;
    persistTableHead: boolean;
    sortIcon: null;
    sortFunction: null;
    sortServer: boolean;
    striped: boolean;
    highlightOnHover: boolean;
    pointerOnHover: boolean;
    noContextMenu: boolean;
    contextMessage: {
        singular: string;
        plural: string;
        message: string;
    };
    actions: null;
    contextActions: null;
    contextComponent: null;
    defaultSortFieldId: null;
    defaultSortAsc: boolean;
    responsive: boolean;
    noDataComponent: JSX.Element;
    disabled: boolean;
    noTableHead: boolean;
    noHeader: boolean;
    subHeader: boolean;
    subHeaderAlign: Alignment;
    subHeaderWrap: boolean;
    subHeaderComponent: null;
    fixedHeader: boolean;
    fixedHeaderScrollHeight: string;
    pagination: boolean;
    paginationServer: boolean;
    paginationServerOptions: {
        persistSelectedOnSort: boolean;
        persistSelectedOnPageChange: boolean;
        persistExpandedOnSort: boolean;
        persistExpandedOnPageChange: boolean;
    };
    paginationDefaultPage: number;
    paginationResetDefaultPage: boolean;
    paginationTotalRows: number;
    paginationPerPage: number;
    paginationRowsPerPageOptions: number[];
    paginationComponent: null;
    paginationComponentOptions: {};
    paginationIconFirstPage: JSX.Element;
    paginationIconLastPage: JSX.Element;
    paginationIconNext: JSX.Element;
    paginationIconPrevious: JSX.Element;
    dense: boolean;
    conditionalRowStyles: never[];
    theme: "default";
    customStyles: {};
    direction: Direction;
    onChangePage: () => null;
    onChangeRowsPerPage: () => null;
    onRowClicked: () => null;
    onRowDoubleClicked: () => null;
    onRowExpandToggled: () => null;
    onSelectedRowsChange: () => null;
    onExpandedRowsChange: () => null;
    onSort: () => null;
    onColumnOrderChange: () => null;
    keepExpandableFirst: boolean;
    footer: null;
};
