"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a,l=o(e),r=n(e),i=n(t);function s(e,t){return e[t]}function d(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function c(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function g(e=[],t,n="id"){const o=e.slice(),a=s(t,n);return a?o.splice(o.findIndex((e=>s(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function p(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function u(e,t){return Math.ceil(e/t)}function b(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(a||(a={}));const w=()=>null;function m(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function x(e,t=[],n="id"){const o=s(e,n);return o?t.some((e=>s(e,n)===o)):t.some((t=>t===e))}function h(e,t=[],n="id"){const o=s(e,n);return o?t.some((e=>s(e,n)===o)):t.some((t=>t===e))}function f(e,t){return t?e.findIndex((e=>C(e.id,t))):-1}function C(e,t){return e==t}function R(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!x(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!x(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!h(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!h(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:g(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:c(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:g(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:c(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!x(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!h(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const E=t.css`
	pointer-events: none;
	opacity: 0.4;
`,y=i.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&E};
	${({theme:e})=>e.table.style};
`,v=t.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,S=i.default.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&v};
	${({theme:e})=>e.head.style};
`,O=i.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,k=(e,...n)=>t.css`
		@media screen and (max-width: ${599}px) {
			${t.css(e,...n)}
		}
	`,P=(e,...n)=>t.css`
		@media screen and (max-width: ${959}px) {
			${t.css(e,...n)}
		}
	`,D=(e,...n)=>t.css`
		@media screen and (max-width: ${1280}px) {
			${t.css(e,...n)}
		}
	`,F=e=>(n,...o)=>t.css`
				@media screen and (max-width: ${e}px) {
					${t.css(n,...o)}
				}
			`,j=i.default.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,H=i.default(j)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&t.css`
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
	${({hide:e})=>e&&"md"===e&&P`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&D`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&F(e)`
    display: none;
  `};
`,$=t.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,A=i.default(H).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&$};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var I=l.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:c,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:b}=m(n,t.conditionalCellStyles,["rdt_TableCell"]);return l.createElement(A,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:u,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:c,onDragEnter:g,onDragLeave:p},!t.cell&&l.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):d(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));var _=l.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:r=!1,onClick:i=w}){const s=t,d="input"!==s?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=l.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return l.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:r?w:i,name:e,"aria-label":e,checked:a,disabled:r},c,{onChange:w}))}));const T=i.default(j)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function L({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return l.createElement(T,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},l.createElement(_,{name:e,component:r,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const M=i.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function N({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=n?o.expanded:o.collapsed;return l.createElement(M,{name:e,"aria-disabled":t,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const z=i.default(j)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function W({name:e,row:t,expanded:n=!1,expandableIcon:o,id:a,keyField:r,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(t));return l.createElement(z,{onClick:e=>e.stopPropagation(),noPadding:!0},l.createElement(N,{name:e,id:a,row:t,expanded:n,expandableIcon:o,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:t,isExpanded:n,keyField:r,rowCount:i,singleExpand:d})}}))}const B=i.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var G=l.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const r=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return l.createElement(B,{className:r,extendedRowStyle:o},l.createElement(t,Object.assign({data:e},n)))}));var V,U,X;exports.Direction=void 0,(V=exports.Direction||(exports.Direction={})).LTR="ltr",V.RTL="rtl",V.AUTO="auto",exports.Alignment=void 0,(U=exports.Alignment||(exports.Alignment={})).LEFT="left",U.RIGHT="right",U.CENTER="center",exports.Media=void 0,(X=exports.Media||(exports.Media={})).SM="sm",X.MD="md",X.LG="lg";const q=t.css`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Y=t.css`
	&:hover {
		cursor: pointer;
	}
`,K=i.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&q};
	${({pointerOnHover:e})=>e&&Y};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function J({columns:e=[],conditionalRowStyles:t=[],defaultExpanderDisabled:n=!1,dense:o=!1,expandableIcon:a,expandableRows:r=!1,expandableRowsComponent:i,expandableRowsComponentProps:d,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:b,expandableInheritConditionalStyles:x,keyField:h,onRowClicked:f=w,onRowDoubleClicked:R=w,onRowExpandToggled:E=w,onSelectedRow:y=w,onExpandedRow:v=w,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:P,selectableRowDisabled:D=null,expandableRowDisabled:F=null,selectableRows:j=!1,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowsHighlight:A=!1,selectableRowsSingle:_=!1,expandableRowsSingle:T=!1,selected:M,expanded:N,striped:z=!1,keepExpandableFirst:B=!1,draggingColumnId:V,onDragStart:U,onDragOver:X,onDragEnd:q,onDragEnter:Y,onDragLeave:J}){const Q=l.useCallback((()=>{E(!N,O)}),[N,E,O]),Z=S||r&&(g||p),ee=l.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(f(O,e),!n&&r&&g&&Q())}),[n,g,r,Q,f,O]),te=l.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(R(O,e),!n&&r&&p&&Q())}),[n,p,r,Q,R,O]),ne=s(O,h),{style:oe,classNames:ae}=m(O,t,["rdt_TableRow"]),le=A&&M,re=x?oe:{},ie=z&&P%2==0;const se=j&&l.createElement(L,{name:`select-row-${ne}`,keyField:h,row:O,rowCount:k,selected:M,selectableRowsComponent:H,selectableRowsComponentProps:$,selectableRowDisabled:D,selectableRowsSingle:_,onSelectedRow:y}),de=r&&!c&&l.createElement(W,{name:`expand-row-${ne}`,keyField:h,id:ne,expandableIcon:a,expanded:N,row:O,rowCount:k,expandableRowsSingle:T,expandableRowDisabled:F,onExpandedRow:v,disabled:n});return l.createElement(l.Fragment,null,l.createElement(K,{id:`row-${b}`,role:"row",striped:ie,highlightOnHover:u,pointerOnHover:!n&&Z,dense:o,onClick:ee,onDoubleClick:te,className:ae,selected:le,style:oe},B?l.createElement(l.Fragment,null,de,se):l.createElement(l.Fragment,null,se,de),e.map((e=>e.omit?null:l.createElement(I,{id:`cell-${e.id}-${ne}`,key:`cell-${e.id}-${ne}`,dataTag:e.ignoreRowClick||e.button?null:"allowRowEvents",column:e,row:O,rowIndex:P,isDragging:C(V,e.id),onDragStart:U,onDragOver:X,onDragEnd:q,onDragEnter:Y,onDragLeave:J})))),r&&N&&l.createElement(G,{key:`expander-${ne}`,data:O,extendedRowStyle:re,extendedClassNames:ae,ExpanderComponent:i,expanderComponentProps:d}))}const Q=i.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Z=({sortActive:e,sortDirection:t})=>r.default.createElement(Q,{sortActive:e,sortDirection:t},"▲"),ee=i.default.span`
	padding: 0px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
`,te=({})=>r.default.createElement(ee,null,r.default.createElement("svg",{width:"10px",height:"10px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},r.default.createElement("path",{d:"M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"}))),ne=i.default(H)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,oe=t.css`
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

	${({sortActive:e})=>!e&&t.css`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ae=i.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&oe};
`,le=i.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var re=l.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h}){l.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[f,R]=l.useState(!1),E=l.useRef(null);if(l.useEffect((()=>{E.current&&R(E.current.scrollWidth>E.current.clientWidth)}),[f]),e.omit)return null;const y=()=>{if(!e.sortable&&!e.selector)return;let t=r;C(o.id,e.id)&&(t=r===a.ASC?a.DESC:a.ASC),u({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||p})},v=e=>l.createElement(Z,{sortActive:e,sortDirection:r}),S=()=>l.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!e.sortable||!C(o.id,e.id)),k=!e.sortable||t,P=e.sortable&&!i&&!e.right,D=e.sortable&&!i&&e.right,F=e.sortable&&i&&!e.right,j=e.sortable&&i&&e.right;return l.createElement(ne,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:C(e.id,n),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h},e.name&&l.createElement(ae,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:k?void 0:y,onKeyPress:k?void 0:e=>{"Enter"===e.key&&y()},sortActive:!k&&O,disabled:k},e.reorder&&l.createElement(te,null),!k&&j&&S(),!k&&D&&v(O),"string"==typeof e.name?l.createElement(le,{title:f?e.name:void 0,ref:E,"data-column-id":e.id},e.name):e.name,!k&&F&&S(),!k&&P&&v(O)))}));const ie=i.default(j)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function se({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!o,p=d?t.filter((e=>!d(e))):t,u=0===p.length,b=Math.min(t.length,p.length);return l.createElement(ie,{className:"rdt_TableCol",headCell:e,noPadding:!0},l.createElement(_,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:u}))}function de(e=exports.Direction.AUTO){const t="object"==typeof window,[n,o]=l.useState(!1);return l.useEffect((()=>{if(t)if("auto"!==e)o("rtl"===e);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],a="rtl"===t.dir||"rtl"===n.dir;o(e&&a)}}),[e,t]),n}const ce=i.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ge=i.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,pe=i.default.div`
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
`;function ue({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const r=de(a),i=o>0;return n?l.createElement(pe,{visible:i},l.cloneElement(n,{selectedCount:o})):l.createElement(pe,{visible:i,rtl:r},l.createElement(ce,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,r)),l.createElement(ge,null,t))}const be=i.default.div`
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
`,we=i.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,me=i.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,xe=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:r,direction:i,showMenu:s=!0})=>l.createElement(be,{className:"rdt_TableHeader",role:"heading","aria-level":1},l.createElement(we,null,e),t&&l.createElement(me,null,t),s&&l.createElement(ue,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:r}))
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
***************************************************************************** */;function he(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const fe={left:"flex-start",right:"flex-end",center:"center"},Ce=i.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>fe[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Re=e=>{var{align:t="right",wrapContent:n=!0}=e,o=he(e,["align","wrapContent"]);return l.createElement(Ce,Object.assign({align:t,wrapContent:n},o))},Ee=i.default.div`
	display: flex;
	flex-direction: column;
`,ye=i.default.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:n})=>e&&t.css`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${n?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:n="100vh"})=>e&&t.css`
			max-height: ${n};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,ve=i.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Se=i.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Oe=i.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function ke({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,onToggled:a}){const r=n?o.expanded:o.collapsed,i=a;return l.createElement(Oe,{name:e,"aria-disabled":t,onClick:i,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},r)}const Pe=i.default(j)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function De({headCell:e=!0,rowData:t,keyField:n,allExpanded:o,mergeExpansions:a,expandedRows:r,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=r.length>0&&!o,g=s?t.filter((e=>!s(e))):t,p=0===g.length,u=Math.min(t.length,g.length);return l.createElement(Pe,{className:"rdt_TableCol",headCell:e,noPadding:!0},l.createElement(ke,{name:"expand-all-rows",expanded:c||o,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:a,keyField:n})}}))}const Fe=i.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,je=()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M7 10l5 5 5-5z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),He=i.default.select`
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
`,$e=i.default.div`
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
`,Ae=e=>{var{defaultValue:t,onChange:n}=e,o=he(e,["defaultValue","onChange"]);return l.createElement($e,null,l.createElement(He,Object.assign({onChange:n,defaultValue:t},o)),l.createElement(je,null))},Ie={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return r.default.createElement("div",null,"To add an expander pass in a component instance via ",r.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),r.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),r.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:r.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:r.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:exports.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),r.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:exports.Direction.AUTO,onChangePage:w,onChangeRowsPerPage:w,onRowClicked:w,onRowDoubleClicked:w,onRowExpandToggled:w,onSelectedRowsChange:w,onExpandedRowsChange:w,onSort:w,onColumnOrderChange:w,keepExpandableFirst:!1,footer:null},_e={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Te=i.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Le=i.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Me=i.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${k`
    width: 100%;
    justify-content: space-around;
  `};
`,Ne=i.default.span`
	flex-shrink: 1;
	user-select: none;
`,ze=i.default(Ne)`
	margin: 0 24px;
`,We=i.default(Ne)`
	margin: 0 4px;
`;var Be=l.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=Ie.direction,paginationRowsPerPageOptions:a=Ie.paginationRowsPerPageOptions,paginationIconLastPage:r=Ie.paginationIconLastPage,paginationIconFirstPage:i=Ie.paginationIconFirstPage,paginationIconNext:s=Ie.paginationIconNext,paginationIconPrevious:d=Ie.paginationIconPrevious,paginationComponentOptions:c=Ie.paginationComponentOptions,onChangeRowsPerPage:g=Ie.onChangeRowsPerPage,onChangePage:p=Ie.onChangePage}){const b=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=l.useState(t);return l.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),w=de(o),m=b.width&&b.width>599,x=u(t,e),h=n*e,f=h-e+1,C=1===n,R=n===x,E=Object.assign(Object.assign({},_e),c),y=n===x?`${f}-${t} ${E.rangeSeparatorText} ${t}`:`${f}-${h} ${E.rangeSeparatorText} ${t}`,v=l.useCallback((()=>p(n-1)),[n,p]),S=l.useCallback((()=>p(n+1)),[n,p]),O=l.useCallback((()=>p(1)),[p]),k=l.useCallback((()=>p(u(t,e))),[p,t,e]),P=l.useCallback((e=>g(Number(e.target.value),n)),[n,g]),D=a.map((e=>l.createElement("option",{key:e,value:e},e)));E.selectAllRowsItem&&D.push(l.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const F=l.createElement(Ae,{onChange:P,defaultValue:e,"aria-label":E.rowsPerPageText},D);return l.createElement(Te,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&l.createElement(l.Fragment,null,l.createElement(We,null,E.rowsPerPageText),F),m&&l.createElement(ze,null,y),l.createElement(Me,null,l.createElement(Le,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,isRTL:w},i),l.createElement(Le,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:v,disabled:C,isRTL:w},d),!m&&F,l.createElement(Le,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:S,disabled:R,isRTL:w},s),l.createElement(Le,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:k,disabled:R,isRTL:w},r)))}));const Ge=(e,t)=>{const n=l.useRef(!0);l.useEffect((()=>{n.current?n.current=!1:e()}),t)};var Ve=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Ue}(e)}(e)};var Ue="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Xe(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Qe((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function qe(e,t,n){return e.concat(t).map((function(e){return Xe(e,n)}))}function Ye(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Ke(e,t){try{return t in e}catch(e){return!1}}function Je(e,t,n){var o={};return n.isMergeableObject(e)&&Ye(e).forEach((function(t){o[t]=Xe(e[t],n)})),Ye(t).forEach((function(a){(function(e,t){return Ke(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ke(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Qe;var n=t.customMerge(e);return"function"==typeof n?n:Qe}(a,n)(e[a],t[a],n):o[a]=Xe(t[a],n))})),o}function Qe(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||qe,n.isMergeableObject=n.isMergeableObject||Ve,n.cloneUnlessOtherwiseSpecified=Xe;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Je(e,t,n):Xe(t,n)}Qe.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Qe(e,n,t)}),{})};var Ze=Qe;const et={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},tt={default:et,light:et,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function nt(e,t,n,o){const[r,i]=l.useState((()=>p(e))),[s,d]=l.useState(""),c=l.useRef("");Ge((()=>{i(p(e))}),[e]);const g=l.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(c.current=(null===(o=null===(n=r[f(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[r]),u=l.useCallback((e=>{var n;const{attributes:o}=e.target,a=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(a&&c.current&&a!==c.current){const e=f(r,c.current),n=f(r,a),o=[...r];o[e]=r[n],o[n]=r[e],i(o),t(o)}}),[t,r]),b=l.useCallback((e=>{e.preventDefault()}),[]),w=l.useCallback((e=>{e.preventDefault()}),[]),m=l.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),x=function(e=!1){return e?a.ASC:a.DESC}(o),h=l.useMemo((()=>r[f(r,null==n?void 0:n.toString())]||{}),[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:g,handleDragEnter:u,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:x,defaultSortColumn:h}}var ot=l.memo((function(e){const{data:n=Ie.data,columns:o=Ie.columns,title:r=Ie.title,actions:i=Ie.actions,keyField:c=Ie.keyField,striped:g=Ie.striped,highlightOnHover:p=Ie.highlightOnHover,pointerOnHover:w=Ie.pointerOnHover,dense:m=Ie.dense,selectableRows:f=Ie.selectableRows,selectableRowsSingle:C=Ie.selectableRowsSingle,expandableRowsSingle:E=Ie.expandableRowsSingle,selectableRowsHighlight:v=Ie.selectableRowsHighlight,selectableRowsNoSelectAll:k=Ie.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=Ie.expandableRowsNoExpandAll,selectableRowsVisibleOnly:D=Ie.selectableRowsVisibleOnly,selectableRowSelected:F=Ie.selectableRowSelected,selectableRowDisabled:H=Ie.selectableRowDisabled,expandableRowDisabled:$=Ie.expandableRowDisabled,selectableRowsComponent:A=Ie.selectableRowsComponent,selectableRowsComponentProps:I=Ie.selectableRowsComponentProps,onRowExpandToggled:_=Ie.onRowExpandToggled,onSelectedRowsChange:T=Ie.onSelectedRowsChange,onExpandedRowsChange:L=Ie.onExpandedRowsChange,expandableIcon:M=Ie.expandableIcon,onChangeRowsPerPage:N=Ie.onChangeRowsPerPage,onChangePage:z=Ie.onChangePage,paginationServer:W=Ie.paginationServer,paginationServerOptions:B=Ie.paginationServerOptions,paginationTotalRows:G=Ie.paginationTotalRows,paginationDefaultPage:V=Ie.paginationDefaultPage,paginationResetDefaultPage:U=Ie.paginationResetDefaultPage,paginationPerPage:X=Ie.paginationPerPage,paginationRowsPerPageOptions:q=Ie.paginationRowsPerPageOptions,paginationIconLastPage:Y=Ie.paginationIconLastPage,paginationIconFirstPage:K=Ie.paginationIconFirstPage,paginationIconNext:Q=Ie.paginationIconNext,paginationIconPrevious:Z=Ie.paginationIconPrevious,paginationComponent:ee=Ie.paginationComponent,paginationComponentOptions:te=Ie.paginationComponentOptions,responsive:ne=Ie.responsive,progressPending:oe=Ie.progressPending,progressComponent:ae=Ie.progressComponent,persistTableHead:le=Ie.persistTableHead,noDataComponent:ie=Ie.noDataComponent,disabled:de=Ie.disabled,noTableHead:ce=Ie.noTableHead,noHeader:ge=Ie.noHeader,fixedHeader:pe=Ie.fixedHeader,fixedHeaderScrollHeight:ue=Ie.fixedHeaderScrollHeight,pagination:be=Ie.pagination,subHeader:we=Ie.subHeader,subHeaderAlign:me=Ie.subHeaderAlign,subHeaderWrap:he=Ie.subHeaderWrap,subHeaderComponent:fe=Ie.subHeaderComponent,noContextMenu:Ce=Ie.noContextMenu,contextMessage:Oe=Ie.contextMessage,contextActions:ke=Ie.contextActions,contextComponent:Pe=Ie.contextComponent,expandableRows:je=Ie.expandableRows,onRowClicked:He=Ie.onRowClicked,onRowDoubleClicked:$e=Ie.onRowDoubleClicked,sortIcon:Ae=Ie.sortIcon,onSort:_e=Ie.onSort,sortFunction:Te=Ie.sortFunction,sortServer:Le=Ie.sortServer,expandableRowsComponent:Me=Ie.expandableRowsComponent,expandableRowsComponentProps:Ne=Ie.expandableRowsComponentProps,expandableRowsHideExpander:ze=Ie.expandableRowsHideExpander,expandOnRowClicked:We=Ie.expandOnRowClicked,expandOnRowDoubleClicked:Ve=Ie.expandOnRowDoubleClicked,expandableRowExpanded:Ue=Ie.expandableRowExpanded,expandableInheritConditionalStyles:Xe=Ie.expandableInheritConditionalStyles,defaultSortFieldId:qe=Ie.defaultSortFieldId,defaultSortAsc:Ye=Ie.defaultSortAsc,clearSelectedRows:Ke=Ie.clearSelectedRows,clearExpandedRows:Je=Ie.clearExpandedRows,conditionalRowStyles:Qe=Ie.conditionalRowStyles,theme:et=Ie.theme,customStyles:ot=Ie.customStyles,direction:at=Ie.direction,onColumnOrderChange:lt=Ie.onColumnOrderChange,keepExpandableFirst:rt=Ie.keepExpandableFirst,footer:it=Ie.footer}=e,{tableColumns:st,draggingColumnId:dt,handleDragStart:ct,handleDragEnter:gt,handleDragOver:pt,handleDragLeave:ut,handleDragEnd:bt,defaultSortDirection:wt,defaultSortColumn:mt}=nt(o,lt,qe,Ye),[{rowsPerPage:xt,currentPage:ht,selectedRows:ft,expandedRows:Ct,allSelected:Rt,allExpanded:Et,selectedCount:yt,expandedCount:vt,selectedColumn:St,sortDirection:Ot,toggleOnSelectedRowsChange:kt,toggleOnExpandedRowsChange:Pt},Dt]=l.useReducer(R,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:mt,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:wt,currentPage:V,rowsPerPage:X,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:Ie.contextMessage}),{persistSelectedOnSort:Ft=!1,persistSelectedOnPageChange:jt=!1,persistExpandedOnSort:Ht=!1,persistExpandedOnPageChange:$t=!1}=B,At=!(!W||!jt&&!Ft),It=!(!W||!$t&&!Ht),_t=be&&!oe&&n.length>0,Tt=ee||Be,Lt=l.useMemo((()=>((e={},t="default",n="default")=>{const o=tt[t]?t:n;return Ze({table:{style:{color:(a=tt[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(ot,et)),[ot,et]),Mt=l.useMemo((()=>Object.assign({},"auto"!==at&&{dir:at})),[at]),Nt=l.useMemo((()=>{if(Le)return n;if((null==St?void 0:St.sortFunction)&&"function"==typeof St.sortFunction){const e=St.sortFunction,t=Ot===a.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=d(e,t),l=d(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==St?void 0:St.selector,Ot,Te)}),[Le,St,Ot,n,Te]),zt=l.useMemo((()=>{if(be&&!W){const e=ht*xt,t=e-xt;return Nt.slice(t,e)}return Nt}),[ht,be,W,xt,Nt]),Wt=l.useCallback((e=>{Dt(e)}),[]),Bt=l.useCallback((e=>{Dt(e)}),[]),Gt=l.useCallback((e=>{Dt(e)}),[]),Vt=l.useCallback((e=>{Dt(e)}),[]),Ut=l.useCallback((e=>{Dt(e)}),[]),Xt=l.useCallback(((e,t)=>He(e,t)),[He]),qt=l.useCallback(((e,t)=>$e(e,t)),[$e]),Yt=l.useCallback((e=>Dt({type:"CHANGE_PAGE",page:e,paginationServer:W,visibleOnly:D,persistSelectedOnPageChange:jt})),[W,jt,D]),Kt=l.useCallback((e=>{const t=u(G||zt.length,e),n=b(ht,t);W||Yt(n),Dt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[ht,Yt,W,G,zt.length]);if(be&&!W&&Nt.length>0&&0===zt.length){const e=u(Nt.length,xt),t=b(ht,e);Yt(t)}Ge((()=>{T({allSelected:Rt,selectedCount:yt,selectedRows:ft})}),[kt]),Ge((()=>{L({allExpanded:Et,expandedCount:vt,expandedRows:Ct})}),[Pt]),Ge((()=>{_e(St,Ot)}),[St,Ot]),Ge((()=>{z(ht,G||Nt.length)}),[ht]),Ge((()=>{N(xt,ht)}),[xt]),Ge((()=>{Yt(V)}),[V,U]),Ge((()=>{if(be&&W&&G>0){const e=u(G,xt),t=b(ht,e);ht!==t&&Yt(t)}}),[G]),l.useEffect((()=>{Dt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ke})}),[C,Ke]),l.useEffect((()=>{Dt({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Je})}),[E,Je]),l.useEffect((()=>{if(!F)return;const e=Nt.filter((e=>F(e))),t=C?e.slice(0,1):e;Dt({type:"SELECT_MULTIPLE_ROWS",keyField:c,selectedRows:t,totalRows:Nt.length,mergeSelections:At})}),[n,F]),l.useEffect((()=>{if(!Ue)return;const e=Nt.filter((e=>Ue(e))),t=E?e.slice(0,1):e;Dt({type:"EXPAND_MULTIPLE_ROWS",keyField:c,expandedRows:t,totalRows:Nt.length,mergeExpansions:It})}),[n,Ue]);const Jt=D?zt:Nt,Qt=$t||E||P,Zt=f&&(jt||C||k?l.createElement(j,{style:{flex:"0 0 48px"}}):l.createElement(se,{allSelected:Rt,selectedRows:ft,selectableRowsComponent:A,selectableRowsComponentProps:I,selectableRowDisabled:H,rowData:Jt,keyField:c,mergeSelections:At,onSelectAllRows:Bt})),en=je&&(Qt?l.createElement(j,{style:{flex:"0 0 48px"}}):l.createElement(De,{allExpanded:Et,expandedRows:Ct,rowData:Jt,keyField:c,mergeExpansions:It,onExpandAllRows:Gt,expandableIcon:M,expandableRowDisabled:$}));return l.createElement(t.ThemeProvider,{theme:Lt},!ge&&(!!r||!!i)&&l.createElement(xe,{title:r,actions:i,showMenu:!Ce,selectedCount:yt,direction:at,contextActions:ke,contextComponent:Pe,contextMessage:Oe}),we&&l.createElement(Re,{align:me,wrapContent:he},fe),l.createElement(ye,Object.assign({responsive:ne,fixedHeader:pe,fixedHeaderScrollHeight:ue},Mt),l.createElement(Se,null,oe&&!le&&l.createElement(ve,null,ae),l.createElement(y,{disabled:de,className:"rdt_Table",role:"table"},!ce&&(!!le||Nt.length>0&&!oe)&&l.createElement(S,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:pe},l.createElement(O,{className:"rdt_TableHeadRow",role:"row",dense:m},rt?l.createElement(l.Fragment,null,en,Zt):l.createElement(l.Fragment,null,Zt,en),st.map((e=>l.createElement(re,{key:e.id,column:e,selectedColumn:St,disabled:oe||0===Nt.length,pagination:be,paginationServer:W,persistSelectedOnSort:Ft,selectableRowsVisibleOnly:D,sortDirection:Ot,sortIcon:Ae,sortServer:Le,onSort:Wt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut,draggingColumnId:dt}))))),!Nt.length&&!oe&&l.createElement(Fe,null,ie),oe&&le&&l.createElement(ve,null,ae),!oe&&Nt.length>0&&l.createElement(Ee,{className:"rdt_TableBody",role:"rowgroup"},zt.map(((e,t)=>{const n=s(e,c),o=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(n)?t:n,a=x(e,ft,c),r=h(e,Ct,c),i=!!(je&&Ue&&Ue(e)),d=!!(je&&$&&$(e));return l.createElement(J,{id:o,key:o,keyField:c,"data-row-id":o,columns:st,row:e,rowCount:Nt.length,rowIndex:t,selectableRows:f,expandableRows:je,expandableIcon:M,highlightOnHover:p,pointerOnHover:w,dense:m,expandOnRowClicked:We,expandOnRowDoubleClicked:Ve,expandableRowsComponent:Me,expandableRowsComponentProps:Ne,expandableRowsHideExpander:ze,defaultExpanderDisabled:d,defaultExpanded:i,expandableInheritConditionalStyles:Xe,conditionalRowStyles:Qe,selected:a,expanded:r,selectableRowsHighlight:v,selectableRowsComponent:A,selectableRowsComponentProps:I,selectableRowDisabled:H,expandableRowDisabled:$,selectableRowsSingle:C,expandableRowsSingle:E,striped:g,keepExpandableFirst:rt,onRowExpandToggled:_,onRowClicked:Xt,onRowDoubleClicked:qt,onSelectedRow:Vt,onExpandedRow:Ut,draggingColumnId:dt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut})})))),it&&l.createElement("div",null,it))),_t&&l.createElement("div",null,l.createElement(Tt,{onChangePage:Yt,onChangeRowsPerPage:Kt,rowCount:G||Nt.length,currentPage:ht,rowsPerPage:xt,direction:at,paginationRowsPerPageOptions:q,paginationIconLastPage:Y,paginationIconFirstPage:K,paginationIconNext:Q,paginationIconPrevious:Z,paginationComponentOptions:te})))}));exports.STOP_PROP_TAG="allowRowEvents",exports.createTheme=function(e="default",t,n="default"){return tt[e]||(tt[e]=Ze(tt[n],t||{})),tt[e]=Ze(tt[e],t||{}),tt[e]},exports.default=ot,exports.defaultThemes=tt;
//# sourceMappingURL=index.cjs.js.map
