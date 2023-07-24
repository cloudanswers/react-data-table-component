!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactDataTable={},e.React,e.styled)}(this,(function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,r=a(t),i=o(t),s=o(n);function d(e,t){return e[t]}function c(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function g(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function p(e=[],t,n="id"){const o=e.slice(),a=d(t,n);return a?o.splice(o.findIndex((e=>d(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function u(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function b(e,t){return Math.ceil(e/t)}function w(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const m=()=>null;function f(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function h(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function x(e,t=[],n="id"){const o=d(e,n);return o?t.some((e=>d(e,n)===o)):t.some((t=>t===e))}function C(e,t){return t?e.findIndex((e=>R(e.id,t))):-1}function R(e,t){return e==t}function E(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!h(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!h(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!x(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!x(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:p(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:g(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:p(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:g(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!h(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!x(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const y=n.css`
	pointer-events: none;
	opacity: 0.4;
`,v=s.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&y};
	${({theme:e})=>e.table.style};
`,S=n.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,O=s.default.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&S};
	${({theme:e})=>e.head.style};
`,P=s.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,k=(e,...t)=>n.css`
		@media screen and (max-width: ${599}px) {
			${n.css(e,...t)}
		}
	`,D=(e,...t)=>n.css`
		@media screen and (max-width: ${959}px) {
			${n.css(e,...t)}
		}
	`,j=(e,...t)=>n.css`
		@media screen and (max-width: ${1280}px) {
			${n.css(e,...t)}
		}
	`,F=e=>(t,...o)=>n.css`
				@media screen and (max-width: ${e}px) {
					${n.css(t,...o)}
				}
			`,H=s.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,$=s.default(H)`
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
	${({hide:e})=>e&&"sm"===e&&k`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&D`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&j`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&F(e)`
    display: none;
  `};
`,I=n.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,A=s.default($).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&I};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var T=r.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:b}=f(n,t.conditionalCellStyles,["rdt_TableCell"]);return r.createElement(A,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:u,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p},!t.cell&&r.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):c(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const _="input";var L=r.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:l=!1,onClick:i=m}){const s=t,d=s!==_?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),c=r.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return r.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:l?m:i,name:e,"aria-label":e,checked:a,disabled:l},c,{onChange:m}))}));const M=s.default(H)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function N({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:l,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return r.createElement(M,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},r.createElement(L,{name:e,component:l,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const z=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function W({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:l,onToggled:i}){const s=n?o.expanded:o.collapsed;return r.createElement(z,{name:e,"aria-disabled":t,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const B=s.default(H)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function G({name:e,row:t,expanded:n=!1,expandableIcon:o,id:a,keyField:l,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(t));return r.createElement(B,{onClick:e=>e.stopPropagation(),noPadding:!0},r.createElement(W,{name:e,id:a,row:t,expanded:n,expandableIcon:o,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:t,isExpanded:n,keyField:l,rowCount:i,singleExpand:d})}}))}const V=s.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var U=r.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const l=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return r.createElement(V,{className:l,extendedRowStyle:o},r.createElement(t,Object.assign({data:e},n)))}));const X="allowRowEvents";var q,Y,K;e.Direction=void 0,(q=e.Direction||(e.Direction={})).LTR="ltr",q.RTL="rtl",q.AUTO="auto",e.Alignment=void 0,(Y=e.Alignment||(e.Alignment={})).LEFT="left",Y.RIGHT="right",Y.CENTER="center",e.Media=void 0,(K=e.Media||(e.Media={})).SM="sm",K.MD="md",K.LG="lg";const J=n.css`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Q=n.css`
	&:hover {
		cursor: pointer;
	}
`,Z=s.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&J};
	${({pointerOnHover:e})=>e&&Q};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function ee({columns:e=[],conditionalRowStyles:t=[],defaultExpanderDisabled:n=!1,dense:o=!1,expandableIcon:a,expandableRows:l=!1,expandableRowsComponent:i,expandableRowsComponentProps:s,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:b,expandableInheritConditionalStyles:w,keyField:h,onRowClicked:x=m,onRowDoubleClicked:C=m,onRowExpandToggled:E=m,onSelectedRow:y=m,onExpandedRow:v=m,pointerOnHover:S=!1,row:O,rowCount:P,rowIndex:k,selectableRowDisabled:D=null,expandableRowDisabled:j=null,selectableRows:F=!1,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowsHighlight:I=!1,selectableRowsSingle:A=!1,expandableRowsSingle:_=!1,selected:L,expanded:M,striped:z=!1,keepExpandableFirst:W=!1,draggingColumnId:B,onDragStart:V,onDragOver:q,onDragEnd:Y,onDragEnter:K,onDragLeave:J}){const Q=r.useCallback((()=>{E(!M,O)}),[M,E,O]),ee=S||l&&(g||p),te=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===X&&(x(O,e),!n&&l&&g&&Q())}),[n,g,l,Q,x,O]),ne=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===X&&(C(O,e),!n&&l&&p&&Q())}),[n,p,l,Q,C,O]),oe=d(O,h),{style:ae,classNames:le}=f(O,t,["rdt_TableRow"]),re=I&&L,ie=w?ae:{},se=z&&k%2==0;const de=F&&r.createElement(N,{name:`select-row-${oe}`,keyField:h,row:O,rowCount:P,selected:L,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowDisabled:D,selectableRowsSingle:A,onSelectedRow:y}),ce=l&&!c&&r.createElement(G,{name:`expand-row-${oe}`,keyField:h,id:oe,expandableIcon:a,expanded:M,row:O,rowCount:P,expandableRowsSingle:_,expandableRowDisabled:j,onExpandedRow:v,disabled:n});return r.createElement(r.Fragment,null,r.createElement(Z,{id:`row-${b}`,role:"row",striped:se,highlightOnHover:u,pointerOnHover:!n&&ee,dense:o,onClick:te,onDoubleClick:ne,className:le,selected:re,style:ae},W?r.createElement(r.Fragment,null,ce,de):r.createElement(r.Fragment,null,de,ce),e.map((e=>e.omit?null:r.createElement(T,{id:`cell-${e.id}-${oe}`,key:`cell-${e.id}-${oe}`,dataTag:e.ignoreRowClick||e.button?null:X,column:e,row:O,rowIndex:k,isDragging:R(B,e.id),onDragStart:V,onDragOver:q,onDragEnd:Y,onDragEnter:K,onDragLeave:J})))),l&&M&&r.createElement(U,{key:`expander-${oe}`,data:O,extendedRowStyle:ie,extendedClassNames:le,ExpanderComponent:i,expanderComponentProps:s}))}const te=s.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,ne=({sortActive:e,sortDirection:t})=>i.default.createElement(te,{sortActive:e,sortDirection:t},"▲"),oe=s.default($)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,ae=n.css`
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
`,le=s.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&ae};
`,re=s.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ie=r.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:a,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:f,onDragLeave:h,currentSortColumnId:x,currentSortDirection:C}){r.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[E,y]=r.useState(!1),v=r.useRef(null);if(r.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[E]),e.omit)return null;const S=()=>{if(!e.sortable&&!e.selector)return;let t=a;R(o.id,e.id)&&(t=a===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||p})},O=e=>r.createElement(ne,{sortActive:e,sortDirection:null!=C?C:a}),P=()=>r.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},i),k=null!==x?!(!e.sortable||!R(x,e.id)):!(!e.sortable||!R(o.id,e.id)),D=!e.sortable||t,j=e.sortable&&!i&&!e.right,F=e.sortable&&!i&&e.right,H=e.sortable&&i&&!e.right,$=e.sortable&&i&&e.right;return r.createElement(oe,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:R(e.id,n),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:f,onDragLeave:h},e.name&&r.createElement(le,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:D?void 0:S,onKeyPress:D?void 0:e=>{"Enter"===e.key&&S()},sortActive:!D&&k,disabled:D},!D&&$&&P(),!D&&F&&O(k),"string"==typeof e.name?r.createElement(re,{title:E?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!D&&H&&P(),!D&&j&&O(k)))}));const se=s.default(H)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function de({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=l.length>0&&!o,p=d?t.filter((e=>!d(e))):t,u=0===p.length,b=Math.min(t.length,p.length);return r.createElement(se,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(L,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:u}))}function ce(t=e.Direction.AUTO){const n="object"==typeof window,[o,a]=r.useState(!1);return r.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const ge=s.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,pe=s.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ue=s.default.div`
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
`;function be({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const l=ce(a),i=o>0;return n?r.createElement(ue,{visible:i},r.cloneElement(n,{selectedCount:o})):r.createElement(ue,{visible:i,rtl:l},r.createElement(ge,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,l)),r.createElement(pe,null,t))}const we=s.default.div`
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
`,me=s.default.div`
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
`,he=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:l,direction:i,showMenu:s=!0})=>r.createElement(we,{className:"rdt_TableHeader",role:"heading","aria-level":1},r.createElement(me,null,e),t&&r.createElement(fe,null,t),s&&r.createElement(be,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:l}))
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
	***************************************************************************** */;function xe(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const Ce={left:"flex-start",right:"flex-end",center:"center"},Re=s.default.header`
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
`,Ee=e=>{var{align:t="right",wrapContent:n=!0}=e,o=xe(e,["align","wrapContent"]);return r.createElement(Re,Object.assign({align:t,wrapContent:n},o))},ye=s.default.div`
	display: flex;
	flex-direction: column;
`,ve=s.default.div`
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
`,Se=s.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Oe=s.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Pe=s.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function ke({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,onToggled:a}){const l=n?o.expanded:o.collapsed,i=a;return r.createElement(Pe,{name:e,"aria-disabled":t,onClick:i,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},l)}const De=s.default(H)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function je({headCell:e=!0,rowData:t,keyField:n,allExpanded:o,mergeExpansions:a,expandedRows:l,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=l.length>0&&!o,g=s?t.filter((e=>!s(e))):t,p=0===g.length,u=Math.min(t.length,g.length);return r.createElement(De,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(ke,{name:"expand-all-rows",expanded:c||o,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:a,keyField:n})}}))}const Fe=s.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,He=()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M7 10l5 5 5-5z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),$e=s.default.select`
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
`,Ie=s.default.div`
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
`,Ae=e=>{var{defaultValue:t,onChange:n}=e,o=xe(e,["defaultValue","onChange"]);return r.createElement(Ie,null,r.createElement($e,Object.assign({onChange:n,defaultValue:t},o)),r.createElement(He,null))},Te={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return i.default.createElement("div",null,"To add an expander pass in a component instance via ",i.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),i.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),i.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:i.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:i.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:e.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),i.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:e.Direction.AUTO,onChangePage:m,onChangeRowsPerPage:m,onRowClicked:m,onRowDoubleClicked:m,onRowExpandToggled:m,onSelectedRowsChange:m,onExpandedRowsChange:m,onSort:m,onColumnOrderChange:m,keepExpandableFirst:!1,footer:null,currentSortColumnId:null,currentSortDirection:void 0},_e={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Le=s.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Me=s.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Ne=s.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${k`
    width: 100%;
    justify-content: space-around;
  `};
`,ze=s.default.span`
	flex-shrink: 1;
	user-select: none;
`,We=s.default(ze)`
	margin: 0 24px;
`,Be=s.default(ze)`
	margin: 0 4px;
`;var Ge=r.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=Te.direction,paginationRowsPerPageOptions:a=Te.paginationRowsPerPageOptions,paginationIconLastPage:l=Te.paginationIconLastPage,paginationIconFirstPage:i=Te.paginationIconFirstPage,paginationIconNext:s=Te.paginationIconNext,paginationIconPrevious:d=Te.paginationIconPrevious,paginationComponentOptions:c=Te.paginationComponentOptions,onChangeRowsPerPage:g=Te.onChangeRowsPerPage,onChangePage:p=Te.onChangePage}){const u=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=r.useState(t);return r.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),w=ce(o),m=u.width&&u.width>599,f=b(t,e),h=n*e,x=h-e+1,C=1===n,R=n===f,E=Object.assign(Object.assign({},_e),c),y=n===f?`${x}-${t} ${E.rangeSeparatorText} ${t}`:`${x}-${h} ${E.rangeSeparatorText} ${t}`,v=r.useCallback((()=>p(n-1)),[n,p]),S=r.useCallback((()=>p(n+1)),[n,p]),O=r.useCallback((()=>p(1)),[p]),P=r.useCallback((()=>p(b(t,e))),[p,t,e]),k=r.useCallback((e=>g(Number(e.target.value),n)),[n,g]),D=a.map((e=>r.createElement("option",{key:e,value:e},e)));E.selectAllRowsItem&&D.push(r.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const j=r.createElement(Ae,{onChange:k,defaultValue:e,"aria-label":E.rowsPerPageText},D);return r.createElement(Le,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&r.createElement(r.Fragment,null,r.createElement(Be,null,E.rowsPerPageText),j),m&&r.createElement(We,null,y),r.createElement(Ne,null,r.createElement(Me,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,isRTL:w},i),r.createElement(Me,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:v,disabled:C,isRTL:w},d),!m&&j,r.createElement(Me,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:S,disabled:R,isRTL:w},s),r.createElement(Me,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:P,disabled:R,isRTL:w},l)))}));const Ve=(e,t)=>{const n=r.useRef(!0);r.useEffect((()=>{n.current?n.current=!1:e()}),t)};var Ue=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Xe}(e)}(e)};var Xe="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function qe(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ze((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ye(e,t,n){return e.concat(t).map((function(e){return qe(e,n)}))}function Ke(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Je(e,t){try{return t in e}catch(e){return!1}}function Qe(e,t,n){var o={};return n.isMergeableObject(e)&&Ke(e).forEach((function(t){o[t]=qe(e[t],n)})),Ke(t).forEach((function(a){(function(e,t){return Je(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Je(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ze;var n=t.customMerge(e);return"function"==typeof n?n:Ze}(a,n)(e[a],t[a],n):o[a]=qe(t[a],n))})),o}function Ze(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ye,n.isMergeableObject=n.isMergeableObject||Ue,n.cloneUnlessOtherwiseSpecified=qe;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Qe(e,t,n):qe(t,n)}Ze.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ze(e,n,t)}),{})};var et=Ze;const tt={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},nt={default:tt,light:tt,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function ot(e,t,n,o){const[a,i]=r.useState((()=>u(e))),[s,d]=r.useState(""),c=r.useRef("");Ve((()=>{i(u(e))}),[e]);const g=r.useCallback((e=>{var t,n,o;const{attributes:l}=e.target,r=null===(t=l.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;r&&(c.current=(null===(o=null===(n=a[C(a,r)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[a]),p=r.useCallback((e=>{var n;const{attributes:o}=e.target,l=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(l&&c.current&&l!==c.current){const e=C(a,c.current),n=C(a,l),o=[...a];o[e]=a[n],o[n]=a[e],i(o),t(o)}}),[t,a]),b=r.useCallback((e=>{e.preventDefault()}),[]),w=r.useCallback((e=>{e.preventDefault()}),[]),m=r.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),f=function(e=!1){return e?l.ASC:l.DESC}(o),h=r.useMemo((()=>a[C(a,null==n?void 0:n.toString())]||{}),[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:g,handleDragEnter:p,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:f,defaultSortColumn:h}}var at=r.memo((function(e){const{data:t=Te.data,columns:o=Te.columns,title:a=Te.title,actions:i=Te.actions,keyField:s=Te.keyField,striped:g=Te.striped,highlightOnHover:p=Te.highlightOnHover,pointerOnHover:u=Te.pointerOnHover,dense:m=Te.dense,selectableRows:f=Te.selectableRows,selectableRowsSingle:C=Te.selectableRowsSingle,expandableRowsSingle:R=Te.expandableRowsSingle,selectableRowsHighlight:y=Te.selectableRowsHighlight,selectableRowsNoSelectAll:S=Te.selectableRowsNoSelectAll,expandableRowsNoExpandAll:k=Te.expandableRowsNoExpandAll,selectableRowsVisibleOnly:D=Te.selectableRowsVisibleOnly,selectableRowSelected:j=Te.selectableRowSelected,selectableRowDisabled:F=Te.selectableRowDisabled,expandableRowDisabled:$=Te.expandableRowDisabled,selectableRowsComponent:I=Te.selectableRowsComponent,selectableRowsComponentProps:A=Te.selectableRowsComponentProps,onRowExpandToggled:T=Te.onRowExpandToggled,onSelectedRowsChange:_=Te.onSelectedRowsChange,onExpandedRowsChange:L=Te.onExpandedRowsChange,expandableIcon:M=Te.expandableIcon,onChangeRowsPerPage:N=Te.onChangeRowsPerPage,onChangePage:z=Te.onChangePage,paginationServer:W=Te.paginationServer,paginationServerOptions:B=Te.paginationServerOptions,paginationTotalRows:G=Te.paginationTotalRows,paginationDefaultPage:V=Te.paginationDefaultPage,paginationResetDefaultPage:U=Te.paginationResetDefaultPage,paginationPerPage:X=Te.paginationPerPage,paginationRowsPerPageOptions:q=Te.paginationRowsPerPageOptions,paginationIconLastPage:Y=Te.paginationIconLastPage,paginationIconFirstPage:K=Te.paginationIconFirstPage,paginationIconNext:J=Te.paginationIconNext,paginationIconPrevious:Q=Te.paginationIconPrevious,paginationComponent:Z=Te.paginationComponent,paginationComponentOptions:te=Te.paginationComponentOptions,responsive:ne=Te.responsive,progressPending:oe=Te.progressPending,progressComponent:ae=Te.progressComponent,persistTableHead:le=Te.persistTableHead,noDataComponent:re=Te.noDataComponent,disabled:se=Te.disabled,noTableHead:ce=Te.noTableHead,noHeader:ge=Te.noHeader,fixedHeader:pe=Te.fixedHeader,fixedHeaderScrollHeight:ue=Te.fixedHeaderScrollHeight,pagination:be=Te.pagination,subHeader:we=Te.subHeader,subHeaderAlign:me=Te.subHeaderAlign,subHeaderWrap:fe=Te.subHeaderWrap,subHeaderComponent:xe=Te.subHeaderComponent,noContextMenu:Ce=Te.noContextMenu,contextMessage:Re=Te.contextMessage,contextActions:Pe=Te.contextActions,contextComponent:ke=Te.contextComponent,expandableRows:De=Te.expandableRows,onRowClicked:He=Te.onRowClicked,onRowDoubleClicked:$e=Te.onRowDoubleClicked,sortIcon:Ie=Te.sortIcon,onSort:Ae=Te.onSort,sortFunction:_e=Te.sortFunction,sortServer:Le=Te.sortServer,expandableRowsComponent:Me=Te.expandableRowsComponent,expandableRowsComponentProps:Ne=Te.expandableRowsComponentProps,expandableRowsHideExpander:ze=Te.expandableRowsHideExpander,expandOnRowClicked:We=Te.expandOnRowClicked,expandOnRowDoubleClicked:Be=Te.expandOnRowDoubleClicked,expandableRowExpanded:Ue=Te.expandableRowExpanded,expandableInheritConditionalStyles:Xe=Te.expandableInheritConditionalStyles,defaultSortFieldId:qe=Te.defaultSortFieldId,defaultSortAsc:Ye=Te.defaultSortAsc,clearSelectedRows:Ke=Te.clearSelectedRows,clearExpandedRows:Je=Te.clearExpandedRows,conditionalRowStyles:Qe=Te.conditionalRowStyles,theme:Ze=Te.theme,customStyles:tt=Te.customStyles,direction:at=Te.direction,onColumnOrderChange:lt=Te.onColumnOrderChange,keepExpandableFirst:rt=Te.keepExpandableFirst,footer:it=Te.footer,currentSortColumnId:st=Te.currentSortColumnId,currentSortDirection:dt=Te.currentSortDirection}=e,{tableColumns:ct,draggingColumnId:gt,handleDragStart:pt,handleDragEnter:ut,handleDragOver:bt,handleDragLeave:wt,handleDragEnd:mt,defaultSortDirection:ft,defaultSortColumn:ht}=ot(o,lt,qe,Ye),[{rowsPerPage:xt,currentPage:Ct,selectedRows:Rt,expandedRows:Et,allSelected:yt,allExpanded:vt,selectedCount:St,expandedCount:Ot,selectedColumn:Pt,sortDirection:kt,toggleOnSelectedRowsChange:Dt,toggleOnExpandedRowsChange:jt},Ft]=r.useReducer(E,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:ht,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:ft,currentPage:V,rowsPerPage:X,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:Te.contextMessage}),{persistSelectedOnSort:Ht=!1,persistSelectedOnPageChange:$t=!1,persistExpandedOnSort:It=!1,persistExpandedOnPageChange:At=!1}=B,Tt=!(!W||!$t&&!Ht),_t=!(!W||!At&&!It),Lt=be&&!oe&&t.length>0,Mt=Z||Ge,Nt=r.useMemo((()=>((e={},t="default",n="default")=>{const o=nt[t]?t:n;return et({table:{style:{color:(a=nt[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(tt,Ze)),[tt,Ze]),zt=r.useMemo((()=>Object.assign({},"auto"!==at&&{dir:at})),[at]),Wt=r.useMemo((()=>{if(Le)return t;if((null==Pt?void 0:Pt.sortFunction)&&"function"==typeof Pt.sortFunction){const e=Pt.sortFunction,n=kt===l.ASC?e:(t,n)=>-1*e(t,n);return[...t].sort(n)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=c(e,t),l=c(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(t,null==Pt?void 0:Pt.selector,kt,_e)}),[Le,Pt,kt,t,_e]),Bt=r.useMemo((()=>{if(be&&!W){const e=Ct*xt,t=e-xt;return Wt.slice(t,e)}return Wt}),[Ct,be,W,xt,Wt]),Gt=r.useCallback((e=>{Ft(e)}),[]),Vt=r.useCallback((e=>{Ft(e)}),[]),Ut=r.useCallback((e=>{Ft(e)}),[]),Xt=r.useCallback((e=>{Ft(e)}),[]),qt=r.useCallback((e=>{Ft(e)}),[]),Yt=r.useCallback(((e,t)=>He(e,t)),[He]),Kt=r.useCallback(((e,t)=>$e(e,t)),[$e]),Jt=r.useCallback((e=>Ft({type:"CHANGE_PAGE",page:e,paginationServer:W,visibleOnly:D,persistSelectedOnPageChange:$t})),[W,$t,D]),Qt=r.useCallback((e=>{const t=b(G||Bt.length,e),n=w(Ct,t);W||Jt(n),Ft({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[Ct,Jt,W,G,Bt.length]);if(be&&!W&&Wt.length>0&&0===Bt.length){const e=b(Wt.length,xt),t=w(Ct,e);Jt(t)}Ve((()=>{_({allSelected:yt,selectedCount:St,selectedRows:Rt})}),[Dt]),Ve((()=>{L({allExpanded:vt,expandedCount:Ot,expandedRows:Et})}),[jt]),Ve((()=>{Ae(Pt,kt)}),[Pt,kt]),Ve((()=>{z(Ct,G||Wt.length)}),[Ct]),Ve((()=>{N(xt,Ct)}),[xt]),Ve((()=>{Jt(V)}),[V,U]),Ve((()=>{if(be&&W&&G>0){const e=b(G,xt),t=w(Ct,e);Ct!==t&&Jt(t)}}),[G]),r.useEffect((()=>{Ft({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ke})}),[C,Ke]),r.useEffect((()=>{Ft({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Je})}),[R,Je]),r.useEffect((()=>{if(!j)return;const e=Wt.filter((e=>j(e))),t=C?e.slice(0,1):e;Ft({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:t,totalRows:Wt.length,mergeSelections:Tt})}),[t,j]),r.useEffect((()=>{if(!Ue)return;const e=Wt.filter((e=>Ue(e))),t=R?e.slice(0,1):e;Ft({type:"EXPAND_MULTIPLE_ROWS",keyField:s,expandedRows:t,totalRows:Wt.length,mergeExpansions:_t})}),[t,Ue]);const Zt=D?Bt:Wt,en=At||R||k,tn=f&&($t||C||S?r.createElement(H,{style:{flex:"0 0 48px"}}):r.createElement(de,{allSelected:yt,selectedRows:Rt,selectableRowsComponent:I,selectableRowsComponentProps:A,selectableRowDisabled:F,rowData:Zt,keyField:s,mergeSelections:Tt,onSelectAllRows:Vt})),nn=De&&(en?r.createElement(H,{style:{flex:"0 0 48px"}}):r.createElement(je,{allExpanded:vt,expandedRows:Et,rowData:Zt,keyField:s,mergeExpansions:_t,onExpandAllRows:Ut,expandableIcon:M,expandableRowDisabled:$}));return r.createElement(n.ThemeProvider,{theme:Nt},!ge&&(!!a||!!i)&&r.createElement(he,{title:a,actions:i,showMenu:!Ce,selectedCount:St,direction:at,contextActions:Pe,contextComponent:ke,contextMessage:Re}),we&&r.createElement(Ee,{align:me,wrapContent:fe},xe),r.createElement(ve,Object.assign({responsive:ne,fixedHeader:pe,fixedHeaderScrollHeight:ue},zt),r.createElement(Oe,null,oe&&!le&&r.createElement(Se,null,ae),r.createElement(v,{disabled:se,className:"rdt_Table",role:"table"},!ce&&(!!le||Wt.length>0&&!oe)&&r.createElement(O,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:pe},r.createElement(P,{className:"rdt_TableHeadRow",role:"row",dense:m},rt?r.createElement(r.Fragment,null,nn,tn):r.createElement(r.Fragment,null,tn,nn),ct.map((e=>r.createElement(ie,{key:e.id,column:e,selectedColumn:Pt,disabled:oe||0===Wt.length,pagination:be,paginationServer:W,persistSelectedOnSort:Ht,selectableRowsVisibleOnly:D,sortDirection:kt,sortIcon:Ie,sortServer:Le,onSort:Gt,onDragStart:pt,onDragOver:bt,onDragEnd:mt,onDragEnter:ut,onDragLeave:wt,draggingColumnId:gt,currentSortColumnId:st,currentSortDirection:dt}))))),!Wt.length&&!oe&&r.createElement(Fe,null,re),oe&&le&&r.createElement(Se,null,ae),!oe&&Wt.length>0&&r.createElement(ye,{className:"rdt_TableBody",role:"rowgroup"},Bt.map(((e,t)=>{const n=d(e,s),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=h(e,Rt,s),l=x(e,Et,s),i=!!(De&&Ue&&Ue(e)),c=!!(De&&$&&$(e));return r.createElement(ee,{id:o,key:o,keyField:s,"data-row-id":o,columns:ct,row:e,rowCount:Wt.length,rowIndex:t,selectableRows:f,expandableRows:De,expandableIcon:M,highlightOnHover:p,pointerOnHover:u,dense:m,expandOnRowClicked:We,expandOnRowDoubleClicked:Be,expandableRowsComponent:Me,expandableRowsComponentProps:Ne,expandableRowsHideExpander:ze,defaultExpanderDisabled:c,defaultExpanded:i,expandableInheritConditionalStyles:Xe,conditionalRowStyles:Qe,selected:a,expanded:l,selectableRowsHighlight:y,selectableRowsComponent:I,selectableRowsComponentProps:A,selectableRowDisabled:F,expandableRowDisabled:$,selectableRowsSingle:C,expandableRowsSingle:R,striped:g,keepExpandableFirst:rt,onRowExpandToggled:T,onRowClicked:Yt,onRowDoubleClicked:Kt,onSelectedRow:Xt,onExpandedRow:qt,draggingColumnId:gt,onDragStart:pt,onDragOver:bt,onDragEnd:mt,onDragEnter:ut,onDragLeave:wt})})))),it&&r.createElement("div",null,it))),Lt&&r.createElement("div",null,r.createElement(Mt,{onChangePage:Jt,onChangeRowsPerPage:Qt,rowCount:G||Wt.length,currentPage:Ct,rowsPerPage:xt,direction:at,paginationRowsPerPageOptions:q,paginationIconLastPage:Y,paginationIconFirstPage:K,paginationIconNext:J,paginationIconPrevious:Q,paginationComponentOptions:te})))}));e.STOP_PROP_TAG=X,e.createTheme=function(e="default",t,n="default"){return nt[e]||(nt[e]=et(nt[n],t||{})),nt[e]=et(nt[e],t||{}),nt[e]},e.default=at,e.defaultThemes=nt,Object.defineProperty(e,"__esModule",{value:!0})}));
