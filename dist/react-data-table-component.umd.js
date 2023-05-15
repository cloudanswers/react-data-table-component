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
`,k=s.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,P=(e,...t)=>n.css`
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
	${({hide:e})=>e&&"sm"===e&&P`
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
`,A=n.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,I=s.default($).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&A};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var T=r.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:b}=f(n,t.conditionalCellStyles,["rdt_TableCell"]);return r.createElement(I,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:u,isDragging:l,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p},!t.cell&&r.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):c(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));const _="input";var L=r.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:l=!1,onClick:i=m}){const s=t,d=s!==_?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(l),c=r.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return r.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:l?m:i,name:e,"aria-label":e,checked:a,disabled:l},c,{onChange:m}))}));const M=s.default(H)`
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
`;function ee({columns:e=[],conditionalRowStyles:t=[],defaultExpanderDisabled:n=!1,dense:o=!1,expandableIcon:a,expandableRows:l=!1,expandableRowsComponent:i,expandableRowsComponentProps:s,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:b,expandableInheritConditionalStyles:w,keyField:h,onRowClicked:x=m,onRowDoubleClicked:C=m,onRowExpandToggled:E=m,onSelectedRow:y=m,onExpandedRow:v=m,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:P,selectableRowDisabled:D=null,expandableRowDisabled:j=null,selectableRows:F=!1,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowsHighlight:A=!1,selectableRowsSingle:I=!1,expandableRowsSingle:_=!1,selected:L,expanded:M,striped:z=!1,keepExpandableFirst:W=!1,draggingColumnId:B,onDragStart:V,onDragOver:q,onDragEnd:Y,onDragEnter:K,onDragLeave:J}){const Q=r.useCallback((()=>{E(!M,O)}),[M,E,O]),ee=S||l&&(g||p),te=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===X&&(x(O,e),!n&&l&&g&&Q())}),[n,g,l,Q,x,O]),ne=r.useCallback((e=>{e.target&&e.target.getAttribute("data-tag")===X&&(C(O,e),!n&&l&&p&&Q())}),[n,p,l,Q,C,O]),oe=d(O,h),{style:ae,classNames:le}=f(O,t,["rdt_TableRow"]),re=A&&L,ie=w?ae:{},se=z&&P%2==0;const de=F&&r.createElement(N,{name:`select-row-${oe}`,keyField:h,row:O,rowCount:k,selected:L,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowDisabled:D,selectableRowsSingle:I,onSelectedRow:y}),ce=l&&!c&&r.createElement(G,{name:`expand-row-${oe}`,keyField:h,id:oe,expandableIcon:a,expanded:M,row:O,rowCount:k,expandableRowsSingle:_,expandableRowDisabled:j,onExpandedRow:v,disabled:n});return r.createElement(r.Fragment,null,r.createElement(Z,{id:`row-${b}`,role:"row",striped:se,highlightOnHover:u,pointerOnHover:!n&&ee,dense:o,onClick:te,onDoubleClick:ne,className:le,selected:re,style:ae},W?r.createElement(r.Fragment,null,ce,de):r.createElement(r.Fragment,null,de,ce),e.map((e=>e.omit?null:r.createElement(T,{id:`cell-${e.id}-${oe}`,key:`cell-${e.id}-${oe}`,dataTag:e.ignoreRowClick||e.button?null:X,column:e,row:O,rowIndex:P,isDragging:R(B,e.id),onDragStart:V,onDragOver:q,onDragEnd:Y,onDragEnter:K,onDragLeave:J})))),l&&M&&r.createElement(U,{key:`expander-${oe}`,data:O,extendedRowStyle:ie,extendedClassNames:le,ExpanderComponent:i,expanderComponentProps:s}))}const te=s.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,ne=({sortActive:e,sortDirection:t})=>i.default.createElement(te,{sortActive:e,sortDirection:t},"▲"),oe=s.default.span`
	padding: 0px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
`,ae=({})=>i.default.createElement(oe,null,i.default.createElement("svg",{width:"10px",height:"10px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},i.default.createElement("path",{d:"M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"}))),le=s.default($)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,re=n.css`
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
`,ie=s.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&re};
`,se=s.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var de=r.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:a,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:f,onDragLeave:h}){r.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[x,C]=r.useState(!1),E=r.useRef(null);if(r.useEffect((()=>{E.current&&C(E.current.scrollWidth>E.current.clientWidth)}),[x]),e.omit)return null;const y=()=>{if(!e.sortable&&!e.selector)return;let t=a;R(o.id,e.id)&&(t=a===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||p})},v=e=>r.createElement(ne,{sortActive:e,sortDirection:a}),S=()=>r.createElement("span",{className:[a,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!e.sortable||!R(o.id,e.id)),k=!e.sortable||t,P=e.sortable&&!i&&!e.right,D=e.sortable&&!i&&e.right,j=e.sortable&&i&&!e.right,F=e.sortable&&i&&e.right;return r.createElement(le,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:R(e.id,n),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:f,onDragLeave:h},e.name&&r.createElement(ie,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:k?void 0:y,onKeyPress:k?void 0:e=>{"Enter"===e.key&&y()},sortActive:!k&&O,disabled:k},e.reorder&&r.createElement(ae,null),!k&&F&&S(),!k&&D&&v(O),"string"==typeof e.name?r.createElement(se,{title:x?e.name:void 0,ref:E,"data-column-id":e.id},e.name):e.name,!k&&j&&S(),!k&&P&&v(O)))}));const ce=s.default(H)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ge({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=l.length>0&&!o,p=d?t.filter((e=>!d(e))):t,u=0===p.length,b=Math.min(t.length,p.length);return r.createElement(ce,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(L,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:u}))}function pe(t=e.Direction.AUTO){const n="object"==typeof window,[o,a]=r.useState(!1);return r.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const ue=s.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,be=s.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,we=s.default.div`
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
`;function me({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const l=pe(a),i=o>0;return n?r.createElement(we,{visible:i},r.cloneElement(n,{selectedCount:o})):r.createElement(we,{visible:i,rtl:l},r.createElement(ue,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,l)),r.createElement(be,null,t))}const fe=s.default.div`
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
`,xe=s.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Ce=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:l,direction:i,showMenu:s=!0})=>r.createElement(fe,{className:"rdt_TableHeader",role:"heading","aria-level":1},r.createElement(he,null,e),t&&r.createElement(xe,null,t),s&&r.createElement(me,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:l}))
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
	***************************************************************************** */;function Re(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const Ee={left:"flex-start",right:"flex-end",center:"center"},ye=s.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Ee[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,ve=e=>{var{align:t="right",wrapContent:n=!0}=e,o=Re(e,["align","wrapContent"]);return r.createElement(ye,Object.assign({align:t,wrapContent:n},o))},Se=s.default.div`
	display: flex;
	flex-direction: column;
`,Oe=s.default.div`
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
`,ke=s.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Pe=s.default.div`
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
`;function je({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,onToggled:a}){const l=n?o.expanded:o.collapsed,i=a;return r.createElement(De,{name:e,"aria-disabled":t,onClick:i,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},l)}const Fe=s.default(H)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function He({headCell:e=!0,rowData:t,keyField:n,allExpanded:o,mergeExpansions:a,expandedRows:l,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=l.length>0&&!o,g=s?t.filter((e=>!s(e))):t,p=0===g.length,u=Math.min(t.length,g.length);return r.createElement(Fe,{className:"rdt_TableCol",headCell:e,noPadding:!0},r.createElement(je,{name:"expand-all-rows",expanded:c||o,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:a,keyField:n})}}))}const $e=s.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Ae=()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M7 10l5 5 5-5z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Ie=s.default.select`
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
`,_e=e=>{var{defaultValue:t,onChange:n}=e,o=Re(e,["defaultValue","onChange"]);return r.createElement(Te,null,r.createElement(Ie,Object.assign({onChange:n,defaultValue:t},o)),r.createElement(Ae,null))},Le={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return i.default.createElement("div",null,"To add an expander pass in a component instance via ",i.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),i.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:i.default.createElement((()=>i.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},i.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),i.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:i.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:i.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:e.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),i.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:i.default.createElement((()=>i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),i.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:e.Direction.AUTO,onChangePage:m,onChangeRowsPerPage:m,onRowClicked:m,onRowDoubleClicked:m,onRowExpandToggled:m,onSelectedRowsChange:m,onExpandedRowsChange:m,onSort:m,onColumnOrderChange:m,keepExpandableFirst:!1,footer:null},Me={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Ne=s.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,ze=s.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,We=s.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${P`
    width: 100%;
    justify-content: space-around;
  `};
`,Be=s.default.span`
	flex-shrink: 1;
	user-select: none;
`,Ge=s.default(Be)`
	margin: 0 24px;
`,Ve=s.default(Be)`
	margin: 0 4px;
`;var Ue=r.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=Le.direction,paginationRowsPerPageOptions:a=Le.paginationRowsPerPageOptions,paginationIconLastPage:l=Le.paginationIconLastPage,paginationIconFirstPage:i=Le.paginationIconFirstPage,paginationIconNext:s=Le.paginationIconNext,paginationIconPrevious:d=Le.paginationIconPrevious,paginationComponentOptions:c=Le.paginationComponentOptions,onChangeRowsPerPage:g=Le.onChangeRowsPerPage,onChangePage:p=Le.onChangePage}){const u=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=r.useState(t);return r.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),w=pe(o),m=u.width&&u.width>599,f=b(t,e),h=n*e,x=h-e+1,C=1===n,R=n===f,E=Object.assign(Object.assign({},Me),c),y=n===f?`${x}-${t} ${E.rangeSeparatorText} ${t}`:`${x}-${h} ${E.rangeSeparatorText} ${t}`,v=r.useCallback((()=>p(n-1)),[n,p]),S=r.useCallback((()=>p(n+1)),[n,p]),O=r.useCallback((()=>p(1)),[p]),k=r.useCallback((()=>p(b(t,e))),[p,t,e]),P=r.useCallback((e=>g(Number(e.target.value),n)),[n,g]),D=a.map((e=>r.createElement("option",{key:e,value:e},e)));E.selectAllRowsItem&&D.push(r.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const j=r.createElement(_e,{onChange:P,defaultValue:e,"aria-label":E.rowsPerPageText},D);return r.createElement(Ne,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&r.createElement(r.Fragment,null,r.createElement(Ve,null,E.rowsPerPageText),j),m&&r.createElement(Ge,null,y),r.createElement(We,null,r.createElement(ze,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,isRTL:w},i),r.createElement(ze,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:v,disabled:C,isRTL:w},d),!m&&j,r.createElement(ze,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:S,disabled:R,isRTL:w},s),r.createElement(ze,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:k,disabled:R,isRTL:w},l)))}));const Xe=(e,t)=>{const n=r.useRef(!0);r.useEffect((()=>{n.current?n.current=!1:e()}),t)};var qe=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Ye}(e)}(e)};var Ye="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ke(e,t){return!1!==t.clone&&t.isMergeableObject(e)?tt((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Je(e,t,n){return e.concat(t).map((function(e){return Ke(e,n)}))}function Qe(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Ze(e,t){try{return t in e}catch(e){return!1}}function et(e,t,n){var o={};return n.isMergeableObject(e)&&Qe(e).forEach((function(t){o[t]=Ke(e[t],n)})),Qe(t).forEach((function(a){(function(e,t){return Ze(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ze(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return tt;var n=t.customMerge(e);return"function"==typeof n?n:tt}(a,n)(e[a],t[a],n):o[a]=Ke(t[a],n))})),o}function tt(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Je,n.isMergeableObject=n.isMergeableObject||qe,n.cloneUnlessOtherwiseSpecified=Ke;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):et(e,t,n):Ke(t,n)}tt.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return tt(e,n,t)}),{})};var nt=tt;const ot={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},at={default:ot,light:ot,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function lt(e,t,n,o){const[a,i]=r.useState((()=>u(e))),[s,d]=r.useState(""),c=r.useRef("");Xe((()=>{i(u(e))}),[e]);const g=r.useCallback((e=>{var t,n,o;const{attributes:l}=e.target,r=null===(t=l.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;r&&(c.current=(null===(o=null===(n=a[C(a,r)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[a]),p=r.useCallback((e=>{var n;const{attributes:o}=e.target,l=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(l&&c.current&&l!==c.current){const e=C(a,c.current),n=C(a,l),o=[...a];o[e]=a[n],o[n]=a[e],i(o),t(o)}}),[t,a]),b=r.useCallback((e=>{e.preventDefault()}),[]),w=r.useCallback((e=>{e.preventDefault()}),[]),m=r.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),f=function(e=!1){return e?l.ASC:l.DESC}(o),h=r.useMemo((()=>a[C(a,null==n?void 0:n.toString())]||{}),[n,a]);return{tableColumns:a,draggingColumnId:s,handleDragStart:g,handleDragEnter:p,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:f,defaultSortColumn:h}}var rt=r.memo((function(e){const{data:t=Le.data,columns:o=Le.columns,title:a=Le.title,actions:i=Le.actions,keyField:s=Le.keyField,striped:g=Le.striped,highlightOnHover:p=Le.highlightOnHover,pointerOnHover:u=Le.pointerOnHover,dense:m=Le.dense,selectableRows:f=Le.selectableRows,selectableRowsSingle:C=Le.selectableRowsSingle,expandableRowsSingle:R=Le.expandableRowsSingle,selectableRowsHighlight:y=Le.selectableRowsHighlight,selectableRowsNoSelectAll:S=Le.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=Le.expandableRowsNoExpandAll,selectableRowsVisibleOnly:D=Le.selectableRowsVisibleOnly,selectableRowSelected:j=Le.selectableRowSelected,selectableRowDisabled:F=Le.selectableRowDisabled,expandableRowDisabled:$=Le.expandableRowDisabled,selectableRowsComponent:A=Le.selectableRowsComponent,selectableRowsComponentProps:I=Le.selectableRowsComponentProps,onRowExpandToggled:T=Le.onRowExpandToggled,onSelectedRowsChange:_=Le.onSelectedRowsChange,onExpandedRowsChange:L=Le.onExpandedRowsChange,expandableIcon:M=Le.expandableIcon,onChangeRowsPerPage:N=Le.onChangeRowsPerPage,onChangePage:z=Le.onChangePage,paginationServer:W=Le.paginationServer,paginationServerOptions:B=Le.paginationServerOptions,paginationTotalRows:G=Le.paginationTotalRows,paginationDefaultPage:V=Le.paginationDefaultPage,paginationResetDefaultPage:U=Le.paginationResetDefaultPage,paginationPerPage:X=Le.paginationPerPage,paginationRowsPerPageOptions:q=Le.paginationRowsPerPageOptions,paginationIconLastPage:Y=Le.paginationIconLastPage,paginationIconFirstPage:K=Le.paginationIconFirstPage,paginationIconNext:J=Le.paginationIconNext,paginationIconPrevious:Q=Le.paginationIconPrevious,paginationComponent:Z=Le.paginationComponent,paginationComponentOptions:te=Le.paginationComponentOptions,responsive:ne=Le.responsive,progressPending:oe=Le.progressPending,progressComponent:ae=Le.progressComponent,persistTableHead:le=Le.persistTableHead,noDataComponent:re=Le.noDataComponent,disabled:ie=Le.disabled,noTableHead:se=Le.noTableHead,noHeader:ce=Le.noHeader,fixedHeader:pe=Le.fixedHeader,fixedHeaderScrollHeight:ue=Le.fixedHeaderScrollHeight,pagination:be=Le.pagination,subHeader:we=Le.subHeader,subHeaderAlign:me=Le.subHeaderAlign,subHeaderWrap:fe=Le.subHeaderWrap,subHeaderComponent:he=Le.subHeaderComponent,noContextMenu:xe=Le.noContextMenu,contextMessage:Re=Le.contextMessage,contextActions:Ee=Le.contextActions,contextComponent:ye=Le.contextComponent,expandableRows:De=Le.expandableRows,onRowClicked:je=Le.onRowClicked,onRowDoubleClicked:Fe=Le.onRowDoubleClicked,sortIcon:Ae=Le.sortIcon,onSort:Ie=Le.onSort,sortFunction:Te=Le.sortFunction,sortServer:_e=Le.sortServer,expandableRowsComponent:Me=Le.expandableRowsComponent,expandableRowsComponentProps:Ne=Le.expandableRowsComponentProps,expandableRowsHideExpander:ze=Le.expandableRowsHideExpander,expandOnRowClicked:We=Le.expandOnRowClicked,expandOnRowDoubleClicked:Be=Le.expandOnRowDoubleClicked,expandableRowExpanded:Ge=Le.expandableRowExpanded,expandableInheritConditionalStyles:Ve=Le.expandableInheritConditionalStyles,defaultSortFieldId:qe=Le.defaultSortFieldId,defaultSortAsc:Ye=Le.defaultSortAsc,clearSelectedRows:Ke=Le.clearSelectedRows,clearExpandedRows:Je=Le.clearExpandedRows,conditionalRowStyles:Qe=Le.conditionalRowStyles,theme:Ze=Le.theme,customStyles:et=Le.customStyles,direction:tt=Le.direction,onColumnOrderChange:ot=Le.onColumnOrderChange,keepExpandableFirst:rt=Le.keepExpandableFirst,footer:it=Le.footer}=e,{tableColumns:st,draggingColumnId:dt,handleDragStart:ct,handleDragEnter:gt,handleDragOver:pt,handleDragLeave:ut,handleDragEnd:bt,defaultSortDirection:wt,defaultSortColumn:mt}=lt(o,ot,qe,Ye),[{rowsPerPage:ft,currentPage:ht,selectedRows:xt,expandedRows:Ct,allSelected:Rt,allExpanded:Et,selectedCount:yt,expandedCount:vt,selectedColumn:St,sortDirection:Ot,toggleOnSelectedRowsChange:kt,toggleOnExpandedRowsChange:Pt},Dt]=r.useReducer(E,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:mt,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:wt,currentPage:V,rowsPerPage:X,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:Le.contextMessage}),{persistSelectedOnSort:jt=!1,persistSelectedOnPageChange:Ft=!1,persistExpandedOnSort:Ht=!1,persistExpandedOnPageChange:$t=!1}=B,At=!(!W||!Ft&&!jt),It=!(!W||!$t&&!Ht),Tt=be&&!oe&&t.length>0,_t=Z||Ue,Lt=r.useMemo((()=>((e={},t="default",n="default")=>{const o=at[t]?t:n;return nt({table:{style:{color:(a=at[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(et,Ze)),[et,Ze]),Mt=r.useMemo((()=>Object.assign({},"auto"!==tt&&{dir:tt})),[tt]),Nt=r.useMemo((()=>{if(_e)return t;if((null==St?void 0:St.sortFunction)&&"function"==typeof St.sortFunction){const e=St.sortFunction,n=Ot===l.ASC?e:(t,n)=>-1*e(t,n);return[...t].sort(n)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=c(e,t),l=c(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(t,null==St?void 0:St.selector,Ot,Te)}),[_e,St,Ot,t,Te]),zt=r.useMemo((()=>{if(be&&!W){const e=ht*ft,t=e-ft;return Nt.slice(t,e)}return Nt}),[ht,be,W,ft,Nt]),Wt=r.useCallback((e=>{Dt(e)}),[]),Bt=r.useCallback((e=>{Dt(e)}),[]),Gt=r.useCallback((e=>{Dt(e)}),[]),Vt=r.useCallback((e=>{Dt(e)}),[]),Ut=r.useCallback((e=>{Dt(e)}),[]),Xt=r.useCallback(((e,t)=>je(e,t)),[je]),qt=r.useCallback(((e,t)=>Fe(e,t)),[Fe]),Yt=r.useCallback((e=>Dt({type:"CHANGE_PAGE",page:e,paginationServer:W,visibleOnly:D,persistSelectedOnPageChange:Ft})),[W,Ft,D]),Kt=r.useCallback((e=>{const t=b(G||zt.length,e),n=w(ht,t);W||Yt(n),Dt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[ht,Yt,W,G,zt.length]);if(be&&!W&&Nt.length>0&&0===zt.length){const e=b(Nt.length,ft),t=w(ht,e);Yt(t)}Xe((()=>{_({allSelected:Rt,selectedCount:yt,selectedRows:xt})}),[kt]),Xe((()=>{L({allExpanded:Et,expandedCount:vt,expandedRows:Ct})}),[Pt]),Xe((()=>{Ie(St,Ot)}),[St,Ot]),Xe((()=>{z(ht,G||Nt.length)}),[ht]),Xe((()=>{N(ft,ht)}),[ft]),Xe((()=>{Yt(V)}),[V,U]),Xe((()=>{if(be&&W&&G>0){const e=b(G,ft),t=w(ht,e);ht!==t&&Yt(t)}}),[G]),r.useEffect((()=>{Dt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ke})}),[C,Ke]),r.useEffect((()=>{Dt({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Je})}),[R,Je]),r.useEffect((()=>{if(!j)return;const e=Nt.filter((e=>j(e))),t=C?e.slice(0,1):e;Dt({type:"SELECT_MULTIPLE_ROWS",keyField:s,selectedRows:t,totalRows:Nt.length,mergeSelections:At})}),[t,j]),r.useEffect((()=>{if(!Ge)return;const e=Nt.filter((e=>Ge(e))),t=R?e.slice(0,1):e;Dt({type:"EXPAND_MULTIPLE_ROWS",keyField:s,expandedRows:t,totalRows:Nt.length,mergeExpansions:It})}),[t,Ge]);const Jt=D?zt:Nt,Qt=$t||R||P,Zt=f&&(Ft||C||S?r.createElement(H,{style:{flex:"0 0 48px"}}):r.createElement(ge,{allSelected:Rt,selectedRows:xt,selectableRowsComponent:A,selectableRowsComponentProps:I,selectableRowDisabled:F,rowData:Jt,keyField:s,mergeSelections:At,onSelectAllRows:Bt})),en=De&&(Qt?r.createElement(H,{style:{flex:"0 0 48px"}}):r.createElement(He,{allExpanded:Et,expandedRows:Ct,rowData:Jt,keyField:s,mergeExpansions:It,onExpandAllRows:Gt,expandableIcon:M,expandableRowDisabled:$}));return r.createElement(n.ThemeProvider,{theme:Lt},!ce&&(!!a||!!i)&&r.createElement(Ce,{title:a,actions:i,showMenu:!xe,selectedCount:yt,direction:tt,contextActions:Ee,contextComponent:ye,contextMessage:Re}),we&&r.createElement(ve,{align:me,wrapContent:fe},he),r.createElement(Oe,Object.assign({responsive:ne,fixedHeader:pe,fixedHeaderScrollHeight:ue},Mt),r.createElement(Pe,null,oe&&!le&&r.createElement(ke,null,ae),r.createElement(v,{disabled:ie,className:"rdt_Table",role:"table"},!se&&(!!le||Nt.length>0&&!oe)&&r.createElement(O,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:pe},r.createElement(k,{className:"rdt_TableHeadRow",role:"row",dense:m},rt?r.createElement(r.Fragment,null,en,Zt):r.createElement(r.Fragment,null,Zt,en),st.map((e=>r.createElement(de,{key:e.id,column:e,selectedColumn:St,disabled:oe||0===Nt.length,pagination:be,paginationServer:W,persistSelectedOnSort:jt,selectableRowsVisibleOnly:D,sortDirection:Ot,sortIcon:Ae,sortServer:_e,onSort:Wt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut,draggingColumnId:dt}))))),!Nt.length&&!oe&&r.createElement($e,null,re),oe&&le&&r.createElement(ke,null,ae),!oe&&Nt.length>0&&r.createElement(Se,{className:"rdt_TableBody",role:"rowgroup"},zt.map(((e,t)=>{const n=d(e,s),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=h(e,xt,s),l=x(e,Ct,s),i=!!(De&&Ge&&Ge(e)),c=!!(De&&$&&$(e));return r.createElement(ee,{id:o,key:o,keyField:s,"data-row-id":o,columns:st,row:e,rowCount:Nt.length,rowIndex:t,selectableRows:f,expandableRows:De,expandableIcon:M,highlightOnHover:p,pointerOnHover:u,dense:m,expandOnRowClicked:We,expandOnRowDoubleClicked:Be,expandableRowsComponent:Me,expandableRowsComponentProps:Ne,expandableRowsHideExpander:ze,defaultExpanderDisabled:c,defaultExpanded:i,expandableInheritConditionalStyles:Ve,conditionalRowStyles:Qe,selected:a,expanded:l,selectableRowsHighlight:y,selectableRowsComponent:A,selectableRowsComponentProps:I,selectableRowDisabled:F,expandableRowDisabled:$,selectableRowsSingle:C,expandableRowsSingle:R,striped:g,keepExpandableFirst:rt,onRowExpandToggled:T,onRowClicked:Xt,onRowDoubleClicked:qt,onSelectedRow:Vt,onExpandedRow:Ut,draggingColumnId:dt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut})})))),it&&r.createElement("div",null,it))),Tt&&r.createElement("div",null,r.createElement(_t,{onChangePage:Yt,onChangeRowsPerPage:Kt,rowCount:G||Nt.length,currentPage:ht,rowsPerPage:ft,direction:tt,paginationRowsPerPageOptions:q,paginationIconLastPage:Y,paginationIconFirstPage:K,paginationIconNext:J,paginationIconPrevious:Q,paginationComponentOptions:te})))}));e.STOP_PROP_TAG=X,e.createTheme=function(e="default",t,n="default"){return at[e]||(at[e]=nt(at[n],t||{})),at[e]=nt(at[e],t||{}),at[e]},e.default=rt,e.defaultThemes=at,Object.defineProperty(e,"__esModule",{value:!0})}));
