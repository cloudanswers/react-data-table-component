import * as React from 'react';
import styled, { css } from 'styled-components';
import TableCell from './TableCell';
import TableCellCheckbox from './TableCellCheckbox';
import TableCellExpander from './TableCellExpander';
import ExpanderRow from './ExpanderRow';
import { prop, equalizeId, getConditionalStyle, isOdd, noop } from './util';
import { STOP_PROP_TAG } from './constants';
import { TableRow, SingleRowAction, TableProps, ExpandSingleRowAction } from './types';

const highlightCSS = css<{
	highlightOnHover?: boolean;
}>`
	&:hover {
		${({ highlightOnHover, theme }) => highlightOnHover && theme.rows.highlightOnHoverStyle};
	}
`;

const pointerCSS = css`
	&:hover {
		cursor: pointer;
	}
`;

const TableRowStyle = styled.div.attrs(props => ({
	style: props.style,
}))<{
	dense?: boolean;
	highlightOnHover?: boolean;
	pointerOnHover?: boolean;
	selected?: boolean;
	striped?: boolean;
}>`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({ theme }) => theme.rows.style};
	${({ dense, theme }) => dense && theme.rows.denseStyle};
	${({ striped, theme }) => striped && theme.rows.stripedStyle};
	${({ highlightOnHover }) => highlightOnHover && highlightCSS};
	${({ pointerOnHover }) => pointerOnHover && pointerCSS};
	${({ selected, theme }) => selected && theme.rows.selectedHighlightStyle};
`;

type DProps<T> = Pick<
	TableProps<T>,
	| 'columns'
	| 'conditionalRowStyles'
	| 'dense'
	| 'expandableIcon'
	| 'expandableRows'
	| 'expandableRowsComponent'
	| 'expandableRowsComponentProps'
	| 'expandableRowsHideExpander'
	| 'expandOnRowClicked'
	| 'expandOnRowDoubleClicked'
	| 'highlightOnHover'
	| 'expandableInheritConditionalStyles'
	| 'keyField'
	| 'onRowClicked'
	| 'onRowDoubleClicked'
	| 'onRowExpandToggled'
	| 'pointerOnHover'
	| 'selectableRowDisabled'
	| 'expandableRowDisabled'
	| 'selectableRows'
	| 'selectableRowsComponent'
	| 'selectableRowsComponentProps'
	| 'selectableRowsHighlight'
	| 'selectableRowsSingle'
	| 'expandableRowsSingle'
	| 'striped'
	| 'keepExpandableFirst'
>;

interface TableRowProps<T> extends Required<DProps<T>> {
	draggingColumnId: number | string;
	defaultExpanded?: boolean;
	defaultExpanderDisabled: boolean;
	id: string | number;
	onSelectedRow: (action: SingleRowAction<T>) => void;
	onExpandedRow: (action: ExpandSingleRowAction<T>) => void;
	pointerOnHover: boolean;
	row: T;
	rowCount: number;
	rowIndex: number;
	selected: boolean;
	expanded: boolean;
	onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
	onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

function Row<T>({
	columns = [],
	conditionalRowStyles = [],
	// defaultExpanded = true,
	defaultExpanderDisabled = false,
	dense = false,
	expandableIcon,
	expandableRows = false,
	expandableRowsComponent,
	expandableRowsComponentProps,
	expandableRowsHideExpander,
	expandOnRowClicked = false,
	expandOnRowDoubleClicked = false,
	highlightOnHover = false,
	id,
	expandableInheritConditionalStyles,
	keyField,
	onRowClicked = noop,
	onRowDoubleClicked = noop,
	onRowExpandToggled = noop,
	onSelectedRow = noop,
	onExpandedRow = noop,
	pointerOnHover = false,
	row,
	rowCount,
	rowIndex,
	selectableRowDisabled = null,
	expandableRowDisabled = null,
	selectableRows = false,
	selectableRowsComponent,
	selectableRowsComponentProps,
	selectableRowsHighlight = false,
	selectableRowsSingle = false,
	expandableRowsSingle = false,
	selected,
	expanded,
	striped = false,
	keepExpandableFirst = false,
	draggingColumnId,
	onDragStart,
	onDragOver,
	onDragEnd,
	onDragEnter,
	onDragLeave,
}: TableRowProps<T>): JSX.Element {
	const handleExpanded = React.useCallback(() => {
		onRowExpandToggled(!expanded, row);
	}, [expanded, onRowExpandToggled, row]);

	const showPointer = pointerOnHover || (expandableRows && (expandOnRowClicked || expandOnRowDoubleClicked));

	const handleRowClick = React.useCallback(
		e => {
			// use event delegation allow events to propagate only when the element with data-tag STOP_PROP_TAG is present
			if (e.target && e.target.getAttribute('data-tag') === STOP_PROP_TAG) {
				onRowClicked(row, e);

				if (!defaultExpanderDisabled && expandableRows && expandOnRowClicked) {
					handleExpanded();
				}
			}
		},
		[defaultExpanderDisabled, expandOnRowClicked, expandableRows, handleExpanded, onRowClicked, row],
	);

	const handleRowDoubleClick = React.useCallback(
		e => {
			if (e.target && e.target.getAttribute('data-tag') === STOP_PROP_TAG) {
				onRowDoubleClicked(row, e);
				if (!defaultExpanderDisabled && expandableRows && expandOnRowDoubleClicked) {
					handleExpanded();
				}
			}
		},
		[defaultExpanderDisabled, expandOnRowDoubleClicked, expandableRows, handleExpanded, onRowDoubleClicked, row],
	);

	const rowKeyField = prop(row as TableRow, keyField);
	const { style, classNames } = getConditionalStyle(row, conditionalRowStyles, ['rdt_TableRow']);
	const highlightSelected = selectableRowsHighlight && selected;
	const inheritStyles = expandableInheritConditionalStyles ? style : {};
	const isStriped = striped && isOdd(rowIndex);

	const selectableCell = selectableRows && (
		<TableCellCheckbox
			name={`select-row-${rowKeyField}`}
			keyField={keyField}
			row={row}
			rowCount={rowCount}
			selected={selected}
			selectableRowsComponent={selectableRowsComponent}
			selectableRowsComponentProps={selectableRowsComponentProps}
			selectableRowDisabled={selectableRowDisabled}
			selectableRowsSingle={selectableRowsSingle}
			onSelectedRow={onSelectedRow}
		/>
	);

	const expandableCell = expandableRows && !expandableRowsHideExpander && (
		<TableCellExpander
			name={`expand-row-${rowKeyField}`}
			keyField={keyField}
			id={rowKeyField as string}
			expandableIcon={expandableIcon}
			expanded={expanded}
			row={row}
			rowCount={rowCount}
			expandableRowsSingle={expandableRowsSingle}
			expandableRowDisabled={expandableRowDisabled}
			onExpandedRow={onExpandedRow}
			handleExpanded={handleExpanded}
			disabled={defaultExpanderDisabled}
		/>
	);

	return (
		<>
			<TableRowStyle
				id={`row-${id}`}
				role="row"
				striped={isStriped}
				highlightOnHover={highlightOnHover}
				pointerOnHover={!defaultExpanderDisabled && showPointer}
				dense={dense}
				onClick={handleRowClick}
				onDoubleClick={handleRowDoubleClick}
				className={classNames}
				selected={highlightSelected}
				style={style}
			>
				{keepExpandableFirst ? (
					<>
						{expandableCell}
						{selectableCell}
					</>
				) : (
					<>
						{selectableCell}
						{expandableCell}
					</>
				)}

				{columns.map(column => {
					if (column.omit) {
						return null;
					}

					return (
						<TableCell
							id={`cell-${column.id}-${rowKeyField}`}
							key={`cell-${column.id}-${rowKeyField}`}
							// apply a tag that Row will use to stop event propagation when TableCell is clicked
							dataTag={column.ignoreRowClick || column.button ? null : STOP_PROP_TAG}
							column={column}
							row={row}
							rowIndex={rowIndex}
							isDragging={equalizeId(draggingColumnId, column.id)}
							onDragStart={onDragStart}
							onDragOver={onDragOver}
							onDragEnd={onDragEnd}
							onDragEnter={onDragEnter}
							onDragLeave={onDragLeave}
						/>
					);
				})}
			</TableRowStyle>

			{expandableRows && expanded && (
				<ExpanderRow
					key={`expander-${rowKeyField}`}
					data={row}
					extendedRowStyle={inheritStyles}
					extendedClassNames={classNames}
					ExpanderComponent={expandableRowsComponent}
					expanderComponentProps={expandableRowsComponentProps}
				/>
			)}
		</>
	);
}

export default Row;
