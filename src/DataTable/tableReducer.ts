import { insertItem, isRowExpanded, isRowSelected, removeItem } from './util';
import { Action, TableState } from './types';

export function tableReducer<T>(state: TableState<T>, action: Action<T>): TableState<T> {
	const toggleOnSelectedRowsChange = !state.toggleOnSelectedRowsChange;
	const toggleOnExpandedRowsChange = !state.toggleOnExpandedRowsChange;

	switch (action.type) {
		case 'SELECT_ALL_ROWS': {
			const { keyField, rows, rowCount, mergeSelections } = action;
			const allChecked = !state.allSelected;
			const toggleOnSelectedRowsChange = !state.toggleOnSelectedRowsChange;

			if (mergeSelections) {
				const selections = allChecked
					? [...state.selectedRows, ...rows.filter(row => !isRowSelected(row, state.selectedRows, keyField))]
					: state.selectedRows.filter(row => !isRowSelected(row, rows, keyField));

				return {
					...state,
					allSelected: allChecked,
					selectedCount: selections.length,
					selectedRows: selections,
					toggleOnSelectedRowsChange,
				};
			}

			return {
				...state,
				allSelected: allChecked,
				selectedCount: allChecked ? rowCount : 0,
				selectedRows: allChecked ? rows : [],
				toggleOnSelectedRowsChange,
			};
		}

		case 'EXPAND_ALL_ROWS': {
			const { keyField, rows, rowCount, mergeExpansions } = action;
			const allChecked = !state.allExpanded;
			const toggleOnExpandedRowsChange = !state.toggleOnExpandedRowsChange;

			if (mergeExpansions) {
				const expansions = allChecked
					? [...state.expandedRows, ...rows.filter(row => !isRowExpanded(row, state.expandedRows, keyField))]
					: state.expandedRows.filter(row => !isRowExpanded(row, rows, keyField));

				return {
					...state,
					allExpanded: allChecked,
					expandedCount: expansions.length,
					expandedRows: expansions,
					toggleOnExpandedRowsChange,
				};
			}

			return {
				...state,
				allExpanded: allChecked,
				expandedCount: allChecked ? rowCount : 0,
				expandedRows: allChecked ? rows : [],
				toggleOnExpandedRowsChange,
			};
		}

		case 'SELECT_SINGLE_ROW': {
			const { keyField, row, isSelected, rowCount, singleSelect } = action;

			// handle single select mode
			if (singleSelect) {
				if (isSelected) {
					return {
						...state,
						selectedCount: 0,
						allSelected: false,
						selectedRows: [],
						toggleOnSelectedRowsChange,
					};
				}

				return {
					...state,
					selectedCount: 1,
					allSelected: false,
					selectedRows: [row],
					toggleOnSelectedRowsChange,
				};
			}

			// handle multi select mode
			if (isSelected) {
				return {
					...state,
					selectedCount: state.selectedRows.length > 0 ? state.selectedRows.length - 1 : 0,
					allSelected: false,
					selectedRows: removeItem(state.selectedRows, row, keyField),
					toggleOnSelectedRowsChange,
				};
			}

			return {
				...state,
				selectedCount: state.selectedRows.length + 1,
				allSelected: state.selectedRows.length + 1 === rowCount,
				selectedRows: insertItem(state.selectedRows, row),
				toggleOnSelectedRowsChange,
			};
		}

		case 'EXPAND_SINGLE_ROW': {
			const { keyField, row, isExpanded, rowCount, singleExpand } = action;

			// handle single select mode
			if (singleExpand) {
				if (isExpanded) {
					return {
						...state,
						expandedCount: 0,
						allExpanded: false,
						expandedRows: [],
						toggleOnExpandedRowsChange,
					};
				}

				return {
					...state,
					expandedCount: 1,
					allExpanded: false,
					expandedRows: [row],
					toggleOnExpandedRowsChange,
				};
			}

			// handle multi expand mode
			if (isExpanded) {
				return {
					...state,
					expandedCount: state.expandedRows.length > 0 ? state.expandedRows.length - 1 : 0,
					allExpanded: false,
					expandedRows: removeItem(state.expandedRows, row, keyField),
					toggleOnExpandedRowsChange,
				};
			}

			return {
				...state,
				expandedCount: state.expandedRows.length + 1,
				allExpanded: state.expandedRows.length + 1 === rowCount,
				expandedRows: insertItem(state.expandedRows, row),
				toggleOnExpandedRowsChange,
			};
		}

		case 'SELECT_MULTIPLE_ROWS': {
			const { keyField, selectedRows, totalRows, mergeSelections } = action;

			if (mergeSelections) {
				const selections = [
					...state.selectedRows,
					...selectedRows.filter(row => !isRowSelected(row, state.selectedRows, keyField)),
				];

				return {
					...state,
					selectedCount: selections.length,
					allSelected: false,
					selectedRows: selections,
					toggleOnSelectedRowsChange,
				};
			}

			return {
				...state,
				selectedCount: selectedRows.length,
				allSelected: selectedRows.length === totalRows,
				selectedRows,
				toggleOnSelectedRowsChange,
			};
		}

		case 'EXPAND_MULTIPLE_ROWS': {
			const { keyField, expandedRows, totalRows, mergeExpansions } = action;

			if (mergeExpansions) {
				const expansions = [
					...state.expandedRows,
					...expandedRows.filter(row => !isRowExpanded(row, state.expandedRows, keyField)),
				];

				return {
					...state,
					expandedCount: expansions.length,
					allExpanded: false,
					expandedRows: expansions,
					toggleOnExpandedRowsChange,
				};
			}

			return {
				...state,
				expandedCount: expandedRows.length,
				allExpanded: expandedRows.length === totalRows,
				expandedRows,
				toggleOnExpandedRowsChange,
			};
		}

		case 'CLEAR_SELECTED_ROWS': {
			const { selectedRowsFlag } = action;

			return {
				...state,
				allSelected: false,
				selectedCount: 0,
				selectedRows: [],
				selectedRowsFlag,
			};
		}

		case 'CLEAR_EXPANDED_ROWS': {
			const { expandedRowsFlag } = action;

			return {
				...state,
				allExpanded: false,
				expandedCount: 0,
				expandedRows: [],
				expandedRowsFlag,
			};
		}

		case 'SORT_CHANGE': {
			const { sortDirection, selectedColumn, clearSelectedOnSort } = action;

			return {
				...state,
				selectedColumn,
				sortDirection,
				currentPage: 1,
				// when using server-side paging reset selected row counts when sorting
				...(clearSelectedOnSort && {
					allSelected: false,
					selectedCount: 0,
					selectedRows: [],
					toggleOnSelectedRowsChange,
				}),
			};
		}

		case 'CHANGE_PAGE': {
			const { page, paginationServer, visibleOnly, persistSelectedOnPageChange } = action;
			const mergeSelections = paginationServer && persistSelectedOnPageChange;
			const clearSelectedOnPage = (paginationServer && !persistSelectedOnPageChange) || visibleOnly;

			return {
				...state,
				currentPage: page,
				...(mergeSelections && {
					allSelected: false,
				}),
				// when using server-side paging reset selected row counts
				...(clearSelectedOnPage && {
					allSelected: false,
					selectedCount: 0,
					selectedRows: [],
					toggleOnSelectedRowsChange,
				}),
			};
		}

		case 'CHANGE_ROWS_PER_PAGE': {
			const { rowsPerPage, page } = action;

			return {
				...state,
				currentPage: page,
				rowsPerPage,
			};
		}
	}
}
