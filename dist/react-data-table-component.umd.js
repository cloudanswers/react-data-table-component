!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactDataTable={},e.React,e.styled)}(this,(function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,r=a(t),i=o(t),s=o(n);function d(e,t){return e[t]}function c(e=""){return"number"!=typeof e&&(!e||0===e.length)}function g(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function p(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function u(e=[],t,n="id"){const o=e.slice(),a=d(t,n);return a?o.splice(o.findIndex((e=>d(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function b(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function w(e,t){return Math.ceil(e/t)}function m(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const h=()=>null;function f(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function x(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function R(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function C(e,t){return t?e.findIndex((e=>E(e.id,t))):-1}function E(e,t){return e==t}function y(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!x(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!x(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!R(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!R(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:u(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:p(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:u(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:p(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!x(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!R(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const v=n.css`
	pointer-events: none;
	opacity: 0.4;
`,S=s.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&v};
	${({theme:e})=>e.table.style};
`,O=n.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,k=s.default.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&O};
	${({theme:e})=>e.head.style};
`,D=s.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,P=(e,...t)=>n.css`
		@media screen and (max-width: ${599}px) {
			${n.css(e,...t)}
		}
	`,F=(e,...t)=>n.css`
		@media screen and (max-width: ${959}px) {
			${n.css(e,...t)}
		}
	`,H=(e,...t)=>n.css`
		@media screen and (max-width: ${1280}px) {
			${n.css(e,...t)}
		}
	`,j=e=>(t,...o)=>n.css`
				@media screen and (max-width: ${e}px) {
					${n.css(t,...o)}
				}
			`,I=s.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,$=s.default(I)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&n.css`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&P`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&F`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&H`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&j(e)`
    display: none;
  `};
`,T=n.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,A=s.default($).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&T};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var _=r.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:p}){const{style:u,classNames:b}=f(n,t.conditionalCellStyles,["rdt_TableCell"]);return r.createElement(A,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:u,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:c,onDragLeave:p},!t.cell&&r.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):g(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const L="input";var M=r.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:l=!1,onClick:i=h}){const s=t,d=s!==L?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),c=r.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return r.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:l?h:i,name:e,"aria-label":e,checked:a,disabled:l},c,{onChange:h}))}));const N=s.default(I)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function z({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:l,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return r.createElement(N,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},r.createElement(M,{name:e,component:l,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const W=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function B({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:l,onToggled:i}){const s=n?o.expanded:o.collapsed;return r.createElement(W,{name:e,"aria-disabled":t,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const G=s.default(I)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function V({name:e,row:t,expanded:n=!1,expandableIcon:o,id:a,keyField:l,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(t));return r.createElement(G,{onClick:e=>e.stopPropagation(),noPadding:!0},r.createElement(B,{name:e,id:a,row:t,expanded:n,expandableIcon:o,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:t,isExpanded:n,keyField:l,rowCount:i,singleExpand:d})}}))}const U=s.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var X=r.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const l=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return r.createElement(U,{className:l,extendedRowStyle:o},r.createElement(t,Object.assign({data:e},n)))}));const q="allowRowEvents";var Y,K,J;e.Direction=void 0,(Y=e.Direction||(e.Direction={})).LTR="ltr",Y.RTL="rtl",Y.AUTO="auto",e.Alignment=void 0,(K=e.Alignment||(e.Alignment={})).LEFT="left",K.RIGHT="right",K.CENTER="center",e.Media=void 0,(J=e.Media||(e.Media={})).SM="sm",J.MD="md",J.LG="lg";const Q=n.css`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Z=n.css`
	&:hover {
		cursor: pointer;
	}
`,ee=s.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Q};
	${({pointerOnHover:e})=>e&&Z};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function te({columns:e=[],conditionalRowStyles:t=[],defaultExpanderDisabled:n=!1,dense:o=!1,expandableIcon:a,expandableRows:l=!1,expandableRowsComponent:i,expandableRowsComponentProps:s,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:b,expandableInheritConditionalStyles:w,keyField:m,onRowClicked:x=h,onRowDoubleClicked:R=h,onRowExpandToggled:C=h,onSelectedRow:y=h,onExpandedRow:v=h,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:D,selectableRowDisabled:P=null,expandableRowDisabled:F=null,selectableRows:H=!1,selectableRowsComponent:j,selectableRowsComponentProps:I,selectableRowsHighlight:$=!1,selectableRowsSingle:T=!1,expandableRowsSingle:A=!1,selected:L,expanded:M,striped:N=!1,keepExpandableFirst:W=!1,draggingColumnId:B,onDragStart:G,onDragOver:U,onDragEnd:Y,onDragEnter:K,onDragLeave:J}){const Q=r.useCallback((()=>{C(!M,O)}),[M,C,O]),Z=S||l&&(g||p),te=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===q&&(x(O,e),!n&&l&&g&&Q())}),[n,g,l,Q,x,O]),ne=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===q&&(R(O,e),!n&&l&&p&&Q())}),[n,p,l,Q,R,O]),oe=d(O,m),{style:ae,classNames:le}=f(O,t,["rdt_TableRow"]),re=$&&L,ie=w?ae:{},se=N&&D%2==0;const de=H&&r.createElement(z,{name:`select-row-${oe}`,keyField:m,row:O,rowCount:k,selected:L,selectableRowsComponent:j,selectableRowsComponentProps:I,selectableRowDisabled:P,selectableRowsSingle:T,onSelectedRow:y}),ce=l&&!c&&r.createElement(V,{name:`expand-row-${oe}`,keyField:m,id:oe,expandableIcon:a,expanded:M,row:O,rowCount:k,expandableRowsSingle:A,expandableRowDisabled:F,onExpandedRow:v,disabled:n});return r.createElement(r.Fragment,null,r.createElement(ee,{id:`row-${b}`,role:"row",striped:se,highlightOnHover:u,pointerOnHover:!n&&Z,dense:o,onClick:te,onDoubleClick:ne,className:le,selected:re,style:ae},W?r.createElement(r.Fragment,null,ce,de):r.createElement(r.Fragment,null,de,ce),e.map((e=>e.omit?null:r.createElement(_,{id:`cell-${e.id}-${oe}`,key:`cell-${e.id}-${oe}`,dataTag:e.ignoreRowClick||e.button?null:q,column:e,row:O,rowIndex:D,isDragging:E(B,e.id),onDragStart:G,onDragOver:U,onDragEnd:Y,onDragEnter:K,onDragLeave:J})))),l&&M&&r.createElement(X,{key:`expander-${oe}`,data:O,extendedRowStyle:ie,extendedClassNames:le,ExpanderComponent:i,expanderComponentProps:s}))}const ne=s.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,oe=({sortActive:e,sortDirection:t})=>i.default.createElement(ne,{sortActive:e,sortDirection:t},"▲"),ae=s.default($)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,le=n.css`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&n.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,re=s.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&le};
`,ie=s.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var se=r.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:a,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:h,onDragLeave:f,currentSortColumnId:x,currentSortDirection:R}){r.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,y]=r.useState(!1),v=r.useRef(null);if(r.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[C]),e.omit)return null;const S=()=>{if(!e.sortable&&!e.selector)return;let t=a;E(o.id,e.id)&&(t=a===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||p})},O=e=>r.createElement(oe,{sortActive:e,sortDirection:null!=R?R:a}),k=()=>r.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},i),D=null!==x?!(!e.sortable||!E(x,e.id)):!(!e.sortable||!E(o.id,e.id)),P=!e.sortable||t,F=e.sortable&&!i&&!e.right,H=e.sortable&&!i&&e.right,j=e.sortable&&i&&!e.right,I=e.sortable&&i&&e.right;return r.createElement(ae,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:E(e.id,n),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:h,onDragLeave:f},e.name&&r.createElement(re,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:P?void 0:S,onKeyPress:P?void 0:e=>{"Enter"===e.key&&S()},sortActive:!P&&D,disabled:P},!P&&I&&k(),!P&&H&&O(D),"string"==typeof e.name?r.createElement(ie,{title:C?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!P&&j&&k(),!P&&F&&O(D)))}));const de=s.default(I)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ce({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=l.length>0&&!o,p=d?t.filter((e=>!d(e))):t,u=0===p.length,b=Math.min(t.length,p.length);return r.createElement(de,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(M,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:u}))}function ge(t=e.Direction.AUTO){const n="object"==typeof window,[o,a]=r.useState(!1);return r.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const pe=s.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ue=s.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,be=s.default.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function we({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const l=ge(a),i=o>0;return n?r.createElement(be,{visible:i},r.cloneElement(n,{selectedCount:o})):r.createElement(be,{visible:i,rtl:l},r.createElement(pe,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,l)),r.createElement(ue,null,t))}const me=s.default.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,he=s.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,fe=s.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,xe=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:l,direction:i,showMenu:s=!0})=>r.createElement(me,{className:"rdt_TableHeader",role:"heading","aria-level":1},r.createElement(he,null,e),t&&r.createElement(fe,null,t),s&&r.createElement(we,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:l}))
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */;function Re(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const Ce={left:"flex-start",right:"flex-end",center:"center"},Ee=s.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Ce[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,ye=e=>{var{align:t="right",wrapContent:n=!0}=e,o=Re(e,["align","wrapContent"]);return r.createElement(Ee,Object.assign({align:t,wrapContent:n},o))},ve=s.default.div`
	display: flex;
	flex-direction: column;
`,Se=s.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&n.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&n.css`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Oe=s.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ke=s.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,De=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Pe({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,onToggled:a}){const l=n?o.expanded:o.collapsed,i=a;return r.createElement(De,{name:e,"aria-disabled":t,onClick:i,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},l)}const Fe=s.default(I)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function He({headCell:e=!0,rowData:t,keyField:n,allExpanded:o,mergeExpansions:a,expandedRows:l,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=l.length>0&&!o,g=s?t.filter((e=>!s(e))):t,p=0===g.length,u=Math.min(t.length,g.length);return r.createElement(Fe,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(Pe,{name:"expand-all-rows",expanded:c||o,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:a,keyField:n})}}))}const je=s.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Ie=()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M7 10l5 5 5-5z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),$e=s.default.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Te=s.default.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Ae=e=>{var{defaultValue:t,onChange:n}=e,o=Re(e,["defaultValue","onChange"]);return r.createElement(Te,null,r.createElement($e,Object.assign({onChange:n,defaultValue:t},o)),r.createElement(Ie,null))},_e={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return i.default.createElement("div",null,"To add an expander pass in a component instance via ",i.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),i.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),i.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:i.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:i.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:e.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),i.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:e.Direction.AUTO,onChangePage:h,onChangeRowsPerPage:h,onRowClicked:h,onRowDoubleClicked:h,onRowExpandToggled:h,onSelectedRowsChange:h,onExpandedRowsChange:h,onSort:h,onColumnOrderChange:h,keepExpandableFirst:!1,footer:null,currentSortColumnId:null,currentSortDirection:void 0,isInnerTable:!1},Le={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Me=s.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ne=s.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,ze=s.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${P`
    width: 100%;
    justify-content: space-around;
  `};
`,We=s.default.span`
	flex-shrink: 1;
	user-select: none;
`,Be=s.default(We)`
	margin: 0 24px;
`,Ge=s.default(We)`
	margin: 0 4px;
`;var Ve=r.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=_e.direction,paginationRowsPerPageOptions:a=_e.paginationRowsPerPageOptions,paginationIconLastPage:l=_e.paginationIconLastPage,paginationIconFirstPage:i=_e.paginationIconFirstPage,paginationIconNext:s=_e.paginationIconNext,paginationIconPrevious:d=_e.paginationIconPrevious,paginationComponentOptions:c=_e.paginationComponentOptions,onChangeRowsPerPage:g=_e.onChangeRowsPerPage,onChangePage:p=_e.onChangePage}){const u=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=r.useState(t);return r.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),b=ge(o),m=u.width&&u.width>599,h=w(t,e),f=n*e,x=f-e+1,R=1===n,C=n===h,E=Object.assign(Object.assign({},Le),c),y=n===h?`${x}-${t} ${E.rangeSeparatorText} ${t}`:`${x}-${f} ${E.rangeSeparatorText} ${t}`,v=r.useCallback((()=>p(n-1)),[n,p]),S=r.useCallback((()=>p(n+1)),[n,p]),O=r.useCallback((()=>p(1)),[p]),k=r.useCallback((()=>p(w(t,e))),[p,t,e]),D=r.useCallback((e=>g(Number(e.target.value),n)),[n,g]),P=a.map((e=>r.createElement("option",{key:e,value:e},e)));E.selectAllRowsItem&&P.push(r.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const F=r.createElement(Ae,{onChange:D,defaultValue:e,"aria-label":E.rowsPerPageText},P);return r.createElement(Me,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&r.createElement(r.Fragment,null,r.createElement(Ge,null,E.rowsPerPageText),F),m&&r.createElement(Be,null,y),r.createElement(ze,null,r.createElement(Ne,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":R,onClick:O,disabled:R,isRTL:b},i),r.createElement(Ne,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":R,onClick:v,disabled:R,isRTL:b},d),!m&&F,r.createElement(Ne,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":C,onClick:S,disabled:C,isRTL:b},s),r.createElement(Ne,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":C,onClick:k,disabled:C,isRTL:b},l)))}));const Ue=(e,t)=>{const n=r.useRef(!0);r.useEffect((()=>{n.current?n.current=!1:e()}),t)};var Xe=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===qe}(e)}(e)};var qe="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ye(e,t){return!1!==t.clone&&t.isMergeableObject(e)?et((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ke(e,t,n){return e.concat(t).map((function(e){return Ye(e,n)}))}function Je(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Qe(e,t){try{return t in e}catch(e){return!1}}function Ze(e,t,n){var o={};return n.isMergeableObject(e)&&Je(e).forEach((function(t){o[t]=Ye(e[t],n)})),Je(t).forEach((function(a){(function(e,t){return Qe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Qe(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return et;var n=t.customMerge(e);return"function"==typeof n?n:et}(a,n)(e[a],t[a],n):o[a]=Ye(t[a],n))})),o}function et(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ke,n.isMergeableObject=n.isMergeableObject||Xe,n.cloneUnlessOtherwiseSpecified=Ye;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ze(e,t,n):Ye(t,n)}et.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return et(e,n,t)}),{})};var tt=et;const nt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},ot={default:nt,light:nt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function at(e,t,n,o){const[a,i]=r.useState((()=>b(e))),[s,d]=r.useState(""),c=r.useRef("");Ue((()=>{i(b(e))}),[e]);const g=r.useCallback((e=>{var t,n,o;const{attributes:l}=e.target,r=null===(t=l.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;r&&(c.current=(null===(o=null===(n=a[C(a,r)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[a]),p=r.useCallback((e=>{var n;const{attributes:o}=e.target,l=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(l&&c.current&&l!==c.current){const e=C(a,c.current),n=C(a,l),o=[...a];o[e]=a[n],o[n]=a[e],i(o),t(o)}}),[t,a]),u=r.useCallback((e=>{e.preventDefault()}),[]),w=r.useCallback((e=>{e.preventDefault()}),[]),m=r.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),h=function(e=!1){return e?l.ASC:l.DESC}(o),f=r.useMemo((()=>a[C(a,null==n?void 0:n.toString())]||{}),[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:g,handleDragEnter:p,handleDragOver:u,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:h,defaultSortColumn:f}}var lt=r.memo((function(e){const{data:t=_e.data,columns:o=_e.columns,title:a=_e.title,actions:i=_e.actions,keyField:s=_e.keyField,striped:p=_e.striped,highlightOnHover:u=_e.highlightOnHover,pointerOnHover:b=_e.pointerOnHover,dense:h=_e.dense,selectableRows:f=_e.selectableRows,selectableRowsSingle:C=_e.selectableRowsSingle,expandableRowsSingle:E=_e.expandableRowsSingle,selectableRowsHighlight:v=_e.selectableRowsHighlight,selectableRowsNoSelectAll:O=_e.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=_e.expandableRowsNoExpandAll,selectableRowsVisibleOnly:F=_e.selectableRowsVisibleOnly,selectableRowSelected:H=_e.selectableRowSelected,selectableRowDisabled:j=_e.selectableRowDisabled,expandableRowDisabled:$=_e.expandableRowDisabled,selectableRowsComponent:T=_e.selectableRowsComponent,selectableRowsComponentProps:A=_e.selectableRowsComponentProps,onRowExpandToggled:_=_e.onRowExpandToggled,onSelectedRowsChange:L=_e.onSelectedRowsChange,onExpandedRowsChange:M=_e.onExpandedRowsChange,expandableIcon:N=_e.expandableIcon,onChangeRowsPerPage:z=_e.onChangeRowsPerPage,onChangePage:W=_e.onChangePage,paginationServer:B=_e.paginationServer,paginationServerOptions:G=_e.paginationServerOptions,paginationTotalRows:V=_e.paginationTotalRows,paginationDefaultPage:U=_e.paginationDefaultPage,paginationResetDefaultPage:X=_e.paginationResetDefaultPage,paginationPerPage:q=_e.paginationPerPage,paginationRowsPerPageOptions:Y=_e.paginationRowsPerPageOptions,paginationIconLastPage:K=_e.paginationIconLastPage,paginationIconFirstPage:J=_e.paginationIconFirstPage,paginationIconNext:Q=_e.paginationIconNext,paginationIconPrevious:Z=_e.paginationIconPrevious,paginationComponent:ee=_e.paginationComponent,paginationComponentOptions:ne=_e.paginationComponentOptions,responsive:oe=_e.responsive,progressPending:ae=_e.progressPending,progressComponent:le=_e.progressComponent,persistTableHead:re=_e.persistTableHead,noDataComponent:ie=_e.noDataComponent,disabled:de=_e.disabled,noTableHead:ge=_e.noTableHead,noHeader:pe=_e.noHeader,fixedHeader:ue=_e.fixedHeader,fixedHeaderScrollHeight:be=_e.fixedHeaderScrollHeight,pagination:we=_e.pagination,subHeader:me=_e.subHeader,subHeaderAlign:he=_e.subHeaderAlign,subHeaderWrap:fe=_e.subHeaderWrap,subHeaderComponent:Re=_e.subHeaderComponent,noContextMenu:Ce=_e.noContextMenu,contextMessage:Ee=_e.contextMessage,contextActions:De=_e.contextActions,contextComponent:Pe=_e.contextComponent,expandableRows:Fe=_e.expandableRows,onRowClicked:Ie=_e.onRowClicked,onRowDoubleClicked:$e=_e.onRowDoubleClicked,sortIcon:Te=_e.sortIcon,onSort:Ae=_e.onSort,sortFunction:Le=_e.sortFunction,sortServer:Me=_e.sortServer,expandableRowsComponent:Ne=_e.expandableRowsComponent,expandableRowsComponentProps:ze=_e.expandableRowsComponentProps,expandableRowsHideExpander:We=_e.expandableRowsHideExpander,expandOnRowClicked:Be=_e.expandOnRowClicked,expandOnRowDoubleClicked:Ge=_e.expandOnRowDoubleClicked,expandableRowExpanded:Xe=_e.expandableRowExpanded,expandableInheritConditionalStyles:qe=_e.expandableInheritConditionalStyles,defaultSortFieldId:Ye=_e.defaultSortFieldId,defaultSortAsc:Ke=_e.defaultSortAsc,clearSelectedRows:Je=_e.clearSelectedRows,clearExpandedRows:Qe=_e.clearExpandedRows,conditionalRowStyles:Ze=_e.conditionalRowStyles,theme:et=_e.theme,customStyles:nt=_e.customStyles,direction:lt=_e.direction,onColumnOrderChange:rt=_e.onColumnOrderChange,keepExpandableFirst:it=_e.keepExpandableFirst,footer:st=_e.footer,currentSortColumnId:dt=_e.currentSortColumnId,currentSortDirection:ct=_e.currentSortDirection,isInnerTable:gt=_e.isInnerTable}=e,{tableColumns:pt,draggingColumnId:ut,handleDragStart:bt,handleDragEnter:wt,handleDragOver:mt,handleDragLeave:ht,handleDragEnd:ft,defaultSortDirection:xt,defaultSortColumn:Rt}=at(o,rt,Ye,Ke),Ct=r.useMemo((()=>pt.reduce(((e,t)=>(t.freeze&&(e+=1),e)),0)),[pt]),Et=r.useMemo((()=>gt?pt.slice(0,Ct):pt),[Ct,gt,pt]),yt=r.useMemo((()=>pt.slice(0,Ct)),[Ct,pt]),[{rowsPerPage:vt,currentPage:St,selectedRows:Ot,expandedRows:kt,allSelected:Dt,allExpanded:Pt,selectedCount:Ft,expandedCount:Ht,selectedColumn:jt,sortDirection:It,toggleOnSelectedRowsChange:$t,toggleOnExpandedRowsChange:Tt},At]=r.useReducer(y,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:Rt,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:xt,currentPage:U,rowsPerPage:q,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:_e.contextMessage}),{persistSelectedOnSort:_t=!1,persistSelectedOnPageChange:Lt=!1,persistExpandedOnSort:Mt=!1,persistExpandedOnPageChange:Nt=!1}=G,zt=!(!B||!Lt&&!_t),Wt=!(!B||!Nt&&!Mt),Bt=we&&!ae&&t.length>0,Gt=ee||Ve,Vt=r.useMemo((()=>((e={},t="default",n="default")=>{const o=ot[t]?t:n;return tt({table:{style:{color:(a=ot[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(nt,et)),[nt,et]),Ut=r.useMemo((()=>Object.assign({},"auto"!==lt&&{dir:lt})),[lt]),Xt=r.useMemo((()=>{if(Me)return t;if((null==jt?void 0:jt.sortFunction)&&"function"==typeof jt.sortFunction){const e=jt.sortFunction,n=It===l.ASC?e:(t,n)=>-1*e(t,n);return[...t].sort(n)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=g(e,t),l=g(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(t,null==jt?void 0:jt.selector,It,Le)}),[Me,jt,It,t,Le]),qt=r.useMemo((()=>{if(we&&!B){const e=St*vt,t=e-vt;return Xt.slice(t,e)}return Xt}),[St,we,B,vt,Xt]),Yt=r.useCallback((e=>{At(e)}),[]),Kt=r.useCallback((e=>{At(e)}),[]),Jt=r.useCallback((e=>{At(e)}),[]),Qt=r.useCallback((e=>{At(e)}),[]),Zt=r.useCallback((e=>{At(e)}),[]),en=r.useCallback(((e,t)=>Ie(e,t)),[Ie]),tn=r.useCallback(((e,t)=>$e(e,t)),[$e]),nn=r.useCallback((e=>At({type:"CHANGE_PAGE",page:e,paginationServer:B,visibleOnly:F,persistSelectedOnPageChange:Lt})),[B,Lt,F]),on=r.useCallback((e=>{const t=w(V||qt.length,e),n=m(St,t);B||nn(n),At({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[St,nn,B,V,qt.length]),an=()=>!ge&&(!!re||Xt.length>0&&!ae);if(we&&!B&&Xt.length>0&&0===qt.length){const e=w(Xt.length,vt),t=m(St,e);nn(t)}Ue((()=>{L({allSelected:Dt,selectedCount:Ft,selectedRows:Ot})}),[$t]),Ue((()=>{M({allExpanded:Pt,expandedCount:Ht,expandedRows:kt})}),[Tt]),Ue((()=>{Ae(jt,It)}),[jt,It]),Ue((()=>{W(St,V||Xt.length)}),[St]),Ue((()=>{z(vt,St)}),[vt]),Ue((()=>{nn(U)}),[U,X]),Ue((()=>{if(we&&B&&V>0){const e=w(V,vt),t=m(St,e);St!==t&&nn(t)}}),[V]),r.useEffect((()=>{At({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Je})}),[C,Je]),r.useEffect((()=>{At({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Qe})}),[E,Qe]),r.useEffect((()=>{if(!H)return;const e=Xt.filter((e=>H(e))),t=C?e.slice(0,1):e;At({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:t,totalRows:Xt.length,mergeSelections:zt})}),[t,H]),r.useEffect((()=>{if(!Xe)return;const e=Xt.filter((e=>Xe(e))),t=E?e.slice(0,1):e;At({type:"EXPAND_MULTIPLE_ROWS",keyField:s,expandedRows:t,totalRows:Xt.length,mergeExpansions:Wt})}),[t,Xe]);const ln=F?qt:Xt,rn=Nt||E||P,sn=f&&(Lt||C||O?r.createElement(I,{style:{flex:"0 0 48px"}}):r.createElement(ce,{allSelected:Dt,selectedRows:Ot,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:j,rowData:ln,keyField:s,mergeSelections:zt,onSelectAllRows:Kt})),dn=Fe&&(rn?r.createElement(I,{style:{flex:"0 0 48px"}}):r.createElement(He,{allExpanded:Pt,expandedRows:kt,rowData:ln,keyField:s,mergeExpansions:Wt,onExpandAllRows:Jt,expandableIcon:N,expandableRowDisabled:$}));return r.createElement(n.ThemeProvider,{theme:Vt},!pe&&(!!a||!!i)&&r.createElement(xe,{title:a,actions:i,showMenu:!Ce,selectedCount:Ft,direction:lt,contextActions:De,contextComponent:Pe,contextMessage:Ee}),me&&r.createElement(ye,{align:he,wrapContent:fe},Re),r.createElement("div",{style:{position:"relative"}},r.createElement(Se,Object.assign({responsive:oe,fixedHeader:ue,fixedHeaderScrollHeight:be},Ut),r.createElement(ke,null,ae&&!re&&r.createElement(Oe,null,le),r.createElement(S,{disabled:de,className:"rdt_Table",role:"table"},an()&&r.createElement(k,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},r.createElement(D,{className:"rdt_TableHeadRow",role:"row",dense:h},it?r.createElement(r.Fragment,null,dn,sn):r.createElement(r.Fragment,null,sn,dn),Et.map((e=>r.createElement(se,{key:e.id,column:e,selectedColumn:jt,disabled:ae||0===Xt.length,pagination:we,paginationServer:B,persistSelectedOnSort:_t,selectableRowsVisibleOnly:F,sortDirection:It,sortIcon:Te,sortServer:Me,onSort:Yt,onDragStart:bt,onDragOver:mt,onDragEnd:ft,onDragEnter:wt,onDragLeave:ht,draggingColumnId:ut,currentSortColumnId:dt,currentSortDirection:ct}))))),!Xt.length&&!ae&&r.createElement(je,null,ie),ae&&re&&r.createElement(Oe,null,le),!ae&&Xt.length>0&&r.createElement(ve,{className:"rdt_TableBody",role:"rowgroup"},qt.map(((e,t)=>{const n=d(e,s),o=c(n)?t:n,a=x(e,Ot,s),l=R(e,kt,s),i=!!(Fe&&Xe&&Xe(e)),g=!!(Fe&&$&&$(e));return r.createElement(te,{id:o,key:o,keyField:s,"data-row-id":o,columns:Et,row:e,rowCount:Xt.length,rowIndex:t,selectableRows:f,expandableRows:Fe,expandableIcon:N,highlightOnHover:u,pointerOnHover:b,dense:h,expandOnRowClicked:Be,expandOnRowDoubleClicked:Ge,expandableRowsComponent:Ne,expandableRowsComponentProps:ze,expandableRowsHideExpander:We,defaultExpanderDisabled:g,defaultExpanded:i,expandableInheritConditionalStyles:qe,conditionalRowStyles:Ze,selected:a,expanded:l,selectableRowsHighlight:v,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:j,expandableRowDisabled:$,selectableRowsSingle:C,expandableRowsSingle:E,striped:p,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:en,onRowDoubleClicked:tn,onSelectedRow:Qt,onExpandedRow:Zt,draggingColumnId:ut,onDragStart:bt,onDragOver:mt,onDragEnd:ft,onDragEnter:wt,onDragLeave:ht})})))),st&&r.createElement("div",null,st))),yt.length>0&&r.createElement("div",{style:{position:"absolute",top:0,left:0,maxWidth:"100%"}},r.createElement(S,{disabled:de,className:"rdt_Table",role:"table"},an()&&r.createElement(k,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},r.createElement(D,{className:"rdt_TableHeadRow",role:"row",dense:h},it?r.createElement(r.Fragment,null,dn,sn):r.createElement(r.Fragment,null,sn,dn),yt.map((e=>r.createElement(se,{key:e.id,column:e,selectedColumn:jt,disabled:ae||0===Xt.length,pagination:we,paginationServer:B,persistSelectedOnSort:_t,selectableRowsVisibleOnly:F,sortDirection:It,sortIcon:Te,sortServer:Me,onSort:Yt,onDragStart:bt,onDragOver:mt,onDragEnd:ft,onDragEnter:wt,onDragLeave:ht,draggingColumnId:ut,currentSortColumnId:dt,currentSortDirection:ct}))))),!ae&&Xt.length>0&&r.createElement(ve,{className:"rdt_TableBody",role:"rowgroup"},qt.map(((e,t)=>{const n=d(e,s),o=c(n)?t:n,a=x(e,Ot,s),l=R(e,kt,s),i=!!(Fe&&Xe&&Xe(e)),g=!!(Fe&&$&&$(e));return r.createElement(te,{id:o,key:o,keyField:s,"data-row-id":o,columns:yt,row:e,rowCount:Xt.length,rowIndex:t,selectableRows:f,expandableRows:Fe,expandableIcon:N,highlightOnHover:u,pointerOnHover:b,dense:h,expandOnRowClicked:Be,expandOnRowDoubleClicked:Ge,expandableRowsComponent:Ne,expandableRowsComponentProps:ze,expandableRowsHideExpander:We,defaultExpanderDisabled:g,defaultExpanded:i,expandableInheritConditionalStyles:qe,conditionalRowStyles:Ze,selected:a,expanded:l,selectableRowsHighlight:v,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:j,expandableRowDisabled:$,selectableRowsSingle:C,expandableRowsSingle:E,striped:p,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:en,onRowDoubleClicked:tn,onSelectedRow:Qt,onExpandedRow:Zt,draggingColumnId:ut,onDragStart:bt,onDragOver:mt,onDragEnd:ft,onDragEnter:wt,onDragLeave:ht})})))),st&&r.createElement("div",null,st))),Bt&&r.createElement("div",null,r.createElement(Gt,{onChangePage:nn,onChangeRowsPerPage:on,rowCount:V||Xt.length,currentPage:St,rowsPerPage:vt,direction:lt,paginationRowsPerPageOptions:Y,paginationIconLastPage:K,paginationIconFirstPage:J,paginationIconNext:Q,paginationIconPrevious:Z,paginationComponentOptions:ne})))}));e.STOP_PROP_TAG=q,e.createTheme=function(e="default",t,n="default"){return ot[e]||(ot[e]=tt(ot[n],t||{})),ot[e]=tt(ot[e],t||{}),ot[e]},e.default=lt,e.defaultThemes=ot,Object.defineProperty(e,"__esModule",{value:!0})}));
