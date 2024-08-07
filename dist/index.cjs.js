"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a,l=o(e),r=n(e),i=n(t);function s(e,t){return e[t]}function d(e=""){return"number"!=typeof e&&(!e||0===e.length)}function c(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function g(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function p(e=[],t,n="id"){const o=e.slice(),a=s(t,n);return a?o.splice(o.findIndex((e=>s(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function u(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function b(e,t){return Math.ceil(e/t)}function w(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(a||(a={}));const m=()=>null;function x(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function h(e,t=[],n="id"){const o=s(e,n);return o?t.some((e=>s(e,n)===o)):t.some((t=>t===e))}function f(e,t=[],n="id"){const o=s(e,n);return o?t.some((e=>s(e,n)===o)):t.some((t=>t===e))}function R(e,t){return t?e.findIndex((e=>C(e.id,t))):-1}function C(e,t){return e==t}function E(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!h(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!h(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!f(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!f(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:p(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:g(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:p(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:g(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!h(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!f(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const y=t.css`
	pointer-events: none;
	opacity: 0.4;
`,v=i.default.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&y};
	${({theme:e})=>e.table.style};
`,S=t.css`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,O=i.default.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&S};
	${({theme:e})=>e.head.style};
`,k=i.default.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,D=(e,...n)=>t.css`
		@media screen and (max-width: ${599}px) {
			${t.css(e,...n)}
		}
	`,P=(e,...n)=>t.css`
		@media screen and (max-width: ${959}px) {
			${t.css(e,...n)}
		}
	`,F=(e,...n)=>t.css`
		@media screen and (max-width: ${1280}px) {
			${t.css(e,...n)}
		}
	`,H=e=>(n,...o)=>t.css`
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
`,$=i.default(j)`
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
	${({hide:e})=>e&&"sm"===e&&D`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&P`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&F`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&H(e)`
    display: none;
  `};
`,I=t.css`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,A=i.default($).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&I};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var T=l.memo((function({id:e,column:t,row:n,rowIndex:o,dataTag:a,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:b}=x(n,t.conditionalCellStyles,["rdt_TableCell"]);return l.createElement(A,{id:e,"data-column-id":t.id,role:"gridcell",className:b,"data-tag":a,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:u,isDragging:r,onDragStart:i,onDragOver:s,onDragEnd:d,onDragEnter:g,onDragLeave:p},!t.cell&&l.createElement("div",{"data-tag":a},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):c(e,t)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}));var _=l.memo((function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:a=!1,disabled:r=!1,onClick:i=m}){const s=t,d="input"!==s?n.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=l.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(n,o)),[n,o]);return l.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=o)},style:d,onClick:r?m:i,name:e,"aria-label":e,checked:a,disabled:r},c,{onChange:m}))}));const L=i.default(j)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function M({name:e,keyField:t,row:n,rowCount:o,selected:a,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(n));return l.createElement(L,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},l.createElement(_,{name:e,component:r,componentOptions:i,checked:a,"aria-checked":a,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:n,isSelected:a,keyField:t,rowCount:o,singleSelect:s})},disabled:g}))}const N=i.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function z({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=n?o.expanded:o.collapsed;return l.createElement(N,{name:e,"aria-disabled":t,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const W=i.default(j)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function B({name:e,row:t,expanded:n=!1,expandableIcon:o,id:a,keyField:r,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(t));return l.createElement(W,{onClick:e=>e.stopPropagation(),noPadding:!0},l.createElement(z,{name:e,id:a,row:t,expanded:n,expandableIcon:o,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:t,isExpanded:n,keyField:r,rowCount:i,singleExpand:d})}}))}const G=i.default.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var V=l.memo((function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:a}){const r=["rdt_ExpanderRow",...a.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return l.createElement(G,{className:r,extendedRowStyle:o},l.createElement(t,Object.assign({data:e},n)))}));var U,X,q;exports.Direction=void 0,(U=exports.Direction||(exports.Direction={})).LTR="ltr",U.RTL="rtl",U.AUTO="auto",exports.Alignment=void 0,(X=exports.Alignment||(exports.Alignment={})).LEFT="left",X.RIGHT="right",X.CENTER="center",exports.Media=void 0,(q=exports.Media||(exports.Media={})).SM="sm",q.MD="md",q.LG="lg";const Y=t.css`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,K=t.css`
	&:hover {
		cursor: pointer;
	}
`,J=i.default.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&Y};
	${({pointerOnHover:e})=>e&&K};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function Q({columns:e=[],conditionalRowStyles:t=[],defaultExpanderDisabled:n=!1,dense:o=!1,expandableIcon:a,expandableRows:r=!1,expandableRowsComponent:i,expandableRowsComponentProps:d,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:b,expandableInheritConditionalStyles:w,keyField:h,onRowClicked:f=m,onRowDoubleClicked:R=m,onRowExpandToggled:E=m,onSelectedRow:y=m,onExpandedRow:v=m,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:D,selectableRowDisabled:P=null,expandableRowDisabled:F=null,selectableRows:H=!1,selectableRowsComponent:j,selectableRowsComponentProps:$,selectableRowsHighlight:I=!1,selectableRowsSingle:A=!1,expandableRowsSingle:_=!1,selected:L,expanded:N,striped:z=!1,keepExpandableFirst:W=!1,draggingColumnId:G,onDragStart:U,onDragOver:X,onDragEnd:q,onDragEnter:Y,onDragLeave:K}){const Q=l.useCallback((()=>{E(!N,O)}),[N,E,O]),Z=S||r&&(g||p),ee=l.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(f(O,e),!n&&r&&g&&Q())}),[n,g,r,Q,f,O]),te=l.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(R(O,e),!n&&r&&p&&Q())}),[n,p,r,Q,R,O]),ne=s(O,h),{style:oe,classNames:ae}=x(O,t,["rdt_TableRow"]),le=I&&L,re=w?oe:{},ie=z&&D%2==0;const se=H&&l.createElement(M,{name:`select-row-${ne}`,keyField:h,row:O,rowCount:k,selected:L,selectableRowsComponent:j,selectableRowsComponentProps:$,selectableRowDisabled:P,selectableRowsSingle:A,onSelectedRow:y}),de=r&&!c&&l.createElement(B,{name:`expand-row-${ne}`,keyField:h,id:ne,expandableIcon:a,expanded:N,row:O,rowCount:k,expandableRowsSingle:_,expandableRowDisabled:F,onExpandedRow:v,disabled:n});return l.createElement(l.Fragment,null,l.createElement(J,{id:`row-${b}`,role:"row",striped:ie,highlightOnHover:u,pointerOnHover:!n&&Z,dense:o,onClick:ee,onDoubleClick:te,className:ae,selected:le,style:oe},W?l.createElement(l.Fragment,null,de,se):l.createElement(l.Fragment,null,se,de),e.map((e=>e.omit?null:l.createElement(T,{id:`cell-${e.id}-${ne}`,key:`cell-${e.id}-${ne}`,dataTag:e.ignoreRowClick||e.button?null:"allowRowEvents",column:e,row:O,rowIndex:D,isDragging:C(G,e.id),onDragStart:U,onDragOver:X,onDragEnd:q,onDragEnter:Y,onDragLeave:K})))),r&&N&&l.createElement(V,{key:`expander-${ne}`,data:O,extendedRowStyle:re,extendedClassNames:ae,ExpanderComponent:i,expanderComponentProps:d}))}const Z=i.default.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,ee=({sortActive:e,sortDirection:t})=>r.default.createElement(Z,{sortActive:e,sortDirection:t},"▲"),te=i.default($)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,ne=t.css`
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
`,oe=i.default.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&ne};
`,ae=i.default.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var le=l.memo((function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h,currentSortColumnId:f,currentSortDirection:R}){l.useEffect((()=>{"string"==typeof e.selector&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[E,y]=l.useState(!1),v=l.useRef(null);if(l.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[E]),e.omit)return null;const S=()=>{if(!e.sortable&&!e.selector)return;let t=r;C(o.id,e.id)&&(t=r===a.ASC?a.DESC:a.ASC),u({type:"SORT_CHANGE",sortDirection:t,selectedColumn:e,clearSelectedOnSort:d&&c&&!g||s||p})},O=e=>l.createElement(ee,{sortActive:e,sortDirection:null!=R?R:r}),k=()=>l.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),D=null!==f?!(!e.sortable||!C(f,e.id)):!(!e.sortable||!C(o.id,e.id)),P=!e.sortable||t,F=e.sortable&&!i&&!e.right,H=e.sortable&&!i&&e.right,j=e.sortable&&i&&!e.right,$=e.sortable&&i&&e.right;return l.createElement(te,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:C(e.id,n),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h},e.name&&l.createElement(oe,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:P?void 0:S,onKeyPress:P?void 0:e=>{"Enter"===e.key&&S()},sortActive:!P&&D,disabled:P},!P&&$&&k(),!P&&H&&O(D),"string"==typeof e.name?l.createElement(ae,{title:E?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!P&&j&&k(),!P&&F&&O(D)))}));const re=i.default(j)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ie({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:a,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!o,p=d?t.filter((e=>!d(e))):t,u=0===p.length,b=Math.min(t.length,p.length);return l.createElement(re,{className:"rdt_TableCol",headCell:e,noPadding:!0},l.createElement(_,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:a,keyField:n})},checked:o,indeterminate:g,disabled:u}))}function se(e=exports.Direction.AUTO){const t="object"==typeof window,[n,o]=l.useState(!1);return l.useEffect((()=>{if(t)if("auto"!==e)o("rtl"===e);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],a="rtl"===t.dir||"rtl"===n.dir;o(e&&a)}}),[e,t]),n}const de=i.default.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ce=i.default.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ge=i.default.div`
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
`;function pe({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:a}){const r=se(a),i=o>0;return n?l.createElement(ge,{visible:i},l.cloneElement(n,{selectedCount:o})):l.createElement(ge,{visible:i,rtl:r},l.createElement(de,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(e,o,r)),l.createElement(ce,null,t))}const ue=i.default.div`
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
`,be=i.default.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,we=i.default.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,me=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:a,selectedCount:r,direction:i,showMenu:s=!0})=>l.createElement(ue,{className:"rdt_TableHeader",role:"heading","aria-level":1},l.createElement(be,null,e),t&&l.createElement(we,null,t),s&&l.createElement(pe,{contextMessage:n,contextActions:o,contextComponent:a,direction:i,selectedCount:r}))
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
***************************************************************************** */;function xe(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const he={left:"flex-start",right:"flex-end",center:"center"},fe=i.default.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>he[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Re=e=>{var{align:t="right",wrapContent:n=!0}=e,o=xe(e,["align","wrapContent"]);return l.createElement(fe,Object.assign({align:t,wrapContent:n},o))},Ce=i.default.div`
	display: flex;
	flex-direction: column;
`,Ee=i.default.div`
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
`,ye=i.default.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ve=i.default.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Se=i.default.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Oe({name:e,disabled:t=!1,expanded:n=!1,expandableIcon:o,onToggled:a}){const r=n?o.expanded:o.collapsed,i=a;return l.createElement(Se,{name:e,"aria-disabled":t,onClick:i,disabled:t,"aria-label":n?"Collapse Row":"Expand Row",role:"button",type:"button"},r)}const ke=i.default(j)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function De({headCell:e=!0,rowData:t,keyField:n,allExpanded:o,mergeExpansions:a,expandedRows:r,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=r.length>0&&!o,g=s?t.filter((e=>!s(e))):t,p=0===g.length,u=Math.min(t.length,g.length);return l.createElement(ke,{className:"rdt_TableCol",headCell:e,noPadding:!0},l.createElement(Oe,{name:"expand-all-rows",expanded:c||o,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:a,keyField:n})}}))}const Pe=i.default.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Fe=()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M7 10l5 5 5-5z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),He=i.default.select`
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
`,je=i.default.div`
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
`,$e=e=>{var{defaultValue:t,onChange:n}=e,o=xe(e,["defaultValue","onChange"]);return l.createElement(je,null,l.createElement(He,Object.assign({onChange:n,defaultValue:t},o)),l.createElement(Fe,null))},Ie={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return r.default.createElement("div",null,"To add an expander pass in a component instance via ",r.default.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),r.default.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:r.default.createElement((()=>r.default.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),r.default.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:r.default.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:r.default.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:exports.Alignment.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),r.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:r.default.createElement((()=>r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},r.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),r.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:exports.Direction.AUTO,onChangePage:m,onChangeRowsPerPage:m,onRowClicked:m,onRowDoubleClicked:m,onRowExpandToggled:m,onSelectedRowsChange:m,onExpandedRowsChange:m,onSort:m,onColumnOrderChange:m,keepExpandableFirst:!1,footer:null,currentSortColumnId:null,currentSortDirection:void 0},Ae={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Te=i.default.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,_e=i.default.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Le=i.default.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${D`
    width: 100%;
    justify-content: space-around;
  `};
`,Me=i.default.span`
	flex-shrink: 1;
	user-select: none;
`,Ne=i.default(Me)`
	margin: 0 24px;
`,ze=i.default(Me)`
	margin: 0 4px;
`;var We=l.memo((function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=Ie.direction,paginationRowsPerPageOptions:a=Ie.paginationRowsPerPageOptions,paginationIconLastPage:r=Ie.paginationIconLastPage,paginationIconFirstPage:i=Ie.paginationIconFirstPage,paginationIconNext:s=Ie.paginationIconNext,paginationIconPrevious:d=Ie.paginationIconPrevious,paginationComponentOptions:c=Ie.paginationComponentOptions,onChangeRowsPerPage:g=Ie.onChangeRowsPerPage,onChangePage:p=Ie.onChangePage}){const u=(()=>{const e="object"==typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}const[n,o]=l.useState(t);return l.useEffect((()=>{if(!e)return()=>null;function n(){o(t())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[]),n})(),w=se(o),m=u.width&&u.width>599,x=b(t,e),h=n*e,f=h-e+1,R=1===n,C=n===x,E=Object.assign(Object.assign({},Ae),c),y=n===x?`${f}-${t} ${E.rangeSeparatorText} ${t}`:`${f}-${h} ${E.rangeSeparatorText} ${t}`,v=l.useCallback((()=>p(n-1)),[n,p]),S=l.useCallback((()=>p(n+1)),[n,p]),O=l.useCallback((()=>p(1)),[p]),k=l.useCallback((()=>p(b(t,e))),[p,t,e]),D=l.useCallback((e=>g(Number(e.target.value),n)),[n,g]),P=a.map((e=>l.createElement("option",{key:e,value:e},e)));E.selectAllRowsItem&&P.push(l.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const F=l.createElement($e,{onChange:D,defaultValue:e,"aria-label":E.rowsPerPageText},P);return l.createElement(Te,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&l.createElement(l.Fragment,null,l.createElement(ze,null,E.rowsPerPageText),F),m&&l.createElement(Ne,null,y),l.createElement(Le,null,l.createElement(_e,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":R,onClick:O,disabled:R,isRTL:w},i),l.createElement(_e,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":R,onClick:v,disabled:R,isRTL:w},d),!m&&F,l.createElement(_e,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":C,onClick:S,disabled:C,isRTL:w},s),l.createElement(_e,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":C,onClick:k,disabled:C,isRTL:w},r)))}));const Be=(e,t)=>{const n=l.useRef(!0);l.useEffect((()=>{n.current?n.current=!1:e()}),t)};var Ge=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Ve}(e)}(e)};var Ve="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ue(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Je((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Xe(e,t,n){return e.concat(t).map((function(e){return Ue(e,n)}))}function qe(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Ye(e,t){try{return t in e}catch(e){return!1}}function Ke(e,t,n){var o={};return n.isMergeableObject(e)&&qe(e).forEach((function(t){o[t]=Ue(e[t],n)})),qe(t).forEach((function(a){(function(e,t){return Ye(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ye(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Je;var n=t.customMerge(e);return"function"==typeof n?n:Je}(a,n)(e[a],t[a],n):o[a]=Ue(t[a],n))})),o}function Je(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Xe,n.isMergeableObject=n.isMergeableObject||Ge,n.cloneUnlessOtherwiseSpecified=Ue;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ke(e,t,n):Ue(t,n)}Je.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Je(e,n,t)}),{})};var Qe=Je;const Ze={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},et={default:Ze,light:Ze,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function tt(e,t,n,o){const[r,i]=l.useState((()=>u(e))),[s,d]=l.useState(""),c=l.useRef("");Be((()=>{i(u(e))}),[e]);const g=l.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(c.current=(null===(o=null===(n=r[R(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[r]),p=l.useCallback((e=>{var n;const{attributes:o}=e.target,a=null===(n=o.getNamedItem("data-column-id"))||void 0===n?void 0:n.value;if(a&&c.current&&a!==c.current){const e=R(r,c.current),n=R(r,a),o=[...r];o[e]=r[n],o[n]=r[e],i(o),t(o)}}),[t,r]),b=l.useCallback((e=>{e.preventDefault()}),[]),w=l.useCallback((e=>{e.preventDefault()}),[]),m=l.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),x=function(e=!1){return e?a.ASC:a.DESC}(o),h=l.useMemo((()=>r[R(r,null==n?void 0:n.toString())]||{}),[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:g,handleDragEnter:p,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:x,defaultSortColumn:h}}var nt=l.memo((function(e){const{data:n=Ie.data,columns:o=Ie.columns,title:r=Ie.title,actions:i=Ie.actions,keyField:g=Ie.keyField,striped:p=Ie.striped,highlightOnHover:u=Ie.highlightOnHover,pointerOnHover:m=Ie.pointerOnHover,dense:x=Ie.dense,selectableRows:R=Ie.selectableRows,selectableRowsSingle:C=Ie.selectableRowsSingle,expandableRowsSingle:y=Ie.expandableRowsSingle,selectableRowsHighlight:S=Ie.selectableRowsHighlight,selectableRowsNoSelectAll:D=Ie.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=Ie.expandableRowsNoExpandAll,selectableRowsVisibleOnly:F=Ie.selectableRowsVisibleOnly,selectableRowSelected:H=Ie.selectableRowSelected,selectableRowDisabled:$=Ie.selectableRowDisabled,expandableRowDisabled:I=Ie.expandableRowDisabled,selectableRowsComponent:A=Ie.selectableRowsComponent,selectableRowsComponentProps:T=Ie.selectableRowsComponentProps,onRowExpandToggled:_=Ie.onRowExpandToggled,onSelectedRowsChange:L=Ie.onSelectedRowsChange,onExpandedRowsChange:M=Ie.onExpandedRowsChange,expandableIcon:N=Ie.expandableIcon,onChangeRowsPerPage:z=Ie.onChangeRowsPerPage,onChangePage:W=Ie.onChangePage,paginationServer:B=Ie.paginationServer,paginationServerOptions:G=Ie.paginationServerOptions,paginationTotalRows:V=Ie.paginationTotalRows,paginationDefaultPage:U=Ie.paginationDefaultPage,paginationResetDefaultPage:X=Ie.paginationResetDefaultPage,paginationPerPage:q=Ie.paginationPerPage,paginationRowsPerPageOptions:Y=Ie.paginationRowsPerPageOptions,paginationIconLastPage:K=Ie.paginationIconLastPage,paginationIconFirstPage:J=Ie.paginationIconFirstPage,paginationIconNext:Z=Ie.paginationIconNext,paginationIconPrevious:ee=Ie.paginationIconPrevious,paginationComponent:te=Ie.paginationComponent,paginationComponentOptions:ne=Ie.paginationComponentOptions,responsive:oe=Ie.responsive,progressPending:ae=Ie.progressPending,progressComponent:re=Ie.progressComponent,persistTableHead:se=Ie.persistTableHead,noDataComponent:de=Ie.noDataComponent,disabled:ce=Ie.disabled,noTableHead:ge=Ie.noTableHead,noHeader:pe=Ie.noHeader,fixedHeader:ue=Ie.fixedHeader,fixedHeaderScrollHeight:be=Ie.fixedHeaderScrollHeight,pagination:we=Ie.pagination,subHeader:xe=Ie.subHeader,subHeaderAlign:he=Ie.subHeaderAlign,subHeaderWrap:fe=Ie.subHeaderWrap,subHeaderComponent:Se=Ie.subHeaderComponent,noContextMenu:Oe=Ie.noContextMenu,contextMessage:ke=Ie.contextMessage,contextActions:Fe=Ie.contextActions,contextComponent:He=Ie.contextComponent,expandableRows:je=Ie.expandableRows,onRowClicked:$e=Ie.onRowClicked,onRowDoubleClicked:Ae=Ie.onRowDoubleClicked,sortIcon:Te=Ie.sortIcon,onSort:_e=Ie.onSort,sortFunction:Le=Ie.sortFunction,sortServer:Me=Ie.sortServer,expandableRowsComponent:Ne=Ie.expandableRowsComponent,expandableRowsComponentProps:ze=Ie.expandableRowsComponentProps,expandableRowsHideExpander:Ge=Ie.expandableRowsHideExpander,expandOnRowClicked:Ve=Ie.expandOnRowClicked,expandOnRowDoubleClicked:Ue=Ie.expandOnRowDoubleClicked,expandableRowExpanded:Xe=Ie.expandableRowExpanded,expandableInheritConditionalStyles:qe=Ie.expandableInheritConditionalStyles,defaultSortFieldId:Ye=Ie.defaultSortFieldId,defaultSortAsc:Ke=Ie.defaultSortAsc,clearSelectedRows:Je=Ie.clearSelectedRows,clearExpandedRows:Ze=Ie.clearExpandedRows,conditionalRowStyles:nt=Ie.conditionalRowStyles,theme:ot=Ie.theme,customStyles:at=Ie.customStyles,direction:lt=Ie.direction,onColumnOrderChange:rt=Ie.onColumnOrderChange,keepExpandableFirst:it=Ie.keepExpandableFirst,footer:st=Ie.footer,currentSortColumnId:dt=Ie.currentSortColumnId,currentSortDirection:ct=Ie.currentSortDirection}=e,{tableColumns:gt,draggingColumnId:pt,handleDragStart:ut,handleDragEnter:bt,handleDragOver:wt,handleDragLeave:mt,handleDragEnd:xt,defaultSortDirection:ht,defaultSortColumn:ft}=tt(o,rt,Ye,Ke),Rt=l.useMemo((()=>{const e=gt.findIndex((e=>e.freeze));return gt.slice(0,e+1)}),[gt]),[{rowsPerPage:Ct,currentPage:Et,selectedRows:yt,expandedRows:vt,allSelected:St,allExpanded:Ot,selectedCount:kt,expandedCount:Dt,selectedColumn:Pt,sortDirection:Ft,toggleOnSelectedRowsChange:Ht,toggleOnExpandedRowsChange:jt},$t]=l.useReducer(E,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:ft,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:ht,currentPage:U,rowsPerPage:q,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:Ie.contextMessage}),{persistSelectedOnSort:It=!1,persistSelectedOnPageChange:At=!1,persistExpandedOnSort:Tt=!1,persistExpandedOnPageChange:_t=!1}=G,Lt=!(!B||!At&&!It),Mt=!(!B||!_t&&!Tt),Nt=we&&!ae&&n.length>0,zt=te||We,Wt=l.useMemo((()=>((e={},t="default",n="default")=>{const o=et[t]?t:n;return Qe({table:{style:{color:(a=et[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(at,ot)),[at,ot]),Bt=l.useMemo((()=>Object.assign({},"auto"!==lt&&{dir:lt})),[lt]),Gt=l.useMemo((()=>{if(Me)return n;if((null==Pt?void 0:Pt.sortFunction)&&"function"==typeof Pt.sortFunction){const e=Pt.sortFunction,t=Ft===a.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=c(e,t),l=c(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==Pt?void 0:Pt.selector,Ft,Le)}),[Me,Pt,Ft,n,Le]),Vt=l.useMemo((()=>{if(we&&!B){const e=Et*Ct,t=e-Ct;return Gt.slice(t,e)}return Gt}),[Et,we,B,Ct,Gt]),Ut=l.useCallback((e=>{$t(e)}),[]),Xt=l.useCallback((e=>{$t(e)}),[]),qt=l.useCallback((e=>{$t(e)}),[]),Yt=l.useCallback((e=>{$t(e)}),[]),Kt=l.useCallback((e=>{$t(e)}),[]),Jt=l.useCallback(((e,t)=>$e(e,t)),[$e]),Qt=l.useCallback(((e,t)=>Ae(e,t)),[Ae]),Zt=l.useCallback((e=>$t({type:"CHANGE_PAGE",page:e,paginationServer:B,visibleOnly:F,persistSelectedOnPageChange:At})),[B,At,F]),en=l.useCallback((e=>{const t=b(V||Vt.length,e),n=w(Et,t);B||Zt(n),$t({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[Et,Zt,B,V,Vt.length]),tn=()=>!ge&&(!!se||Gt.length>0&&!ae);if(we&&!B&&Gt.length>0&&0===Vt.length){const e=b(Gt.length,Ct),t=w(Et,e);Zt(t)}Be((()=>{L({allSelected:St,selectedCount:kt,selectedRows:yt})}),[Ht]),Be((()=>{M({allExpanded:Ot,expandedCount:Dt,expandedRows:vt})}),[jt]),Be((()=>{_e(Pt,Ft)}),[Pt,Ft]),Be((()=>{W(Et,V||Gt.length)}),[Et]),Be((()=>{z(Ct,Et)}),[Ct]),Be((()=>{Zt(U)}),[U,X]),Be((()=>{if(we&&B&&V>0){const e=b(V,Ct),t=w(Et,e);Et!==t&&Zt(t)}}),[V]),l.useEffect((()=>{$t({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Je})}),[C,Je]),l.useEffect((()=>{$t({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Ze})}),[y,Ze]),l.useEffect((()=>{if(!H)return;const e=Gt.filter((e=>H(e))),t=C?e.slice(0,1):e;$t({type:"SELECT_MULTIPLE_ROWS",keyField:g,selectedRows:t,totalRows:Gt.length,mergeSelections:Lt})}),[n,H]),l.useEffect((()=>{if(!Xe)return;const e=Gt.filter((e=>Xe(e))),t=y?e.slice(0,1):e;$t({type:"EXPAND_MULTIPLE_ROWS",keyField:g,expandedRows:t,totalRows:Gt.length,mergeExpansions:Mt})}),[n,Xe]);const nn=F?Vt:Gt,on=_t||y||P,an=R&&(At||C||D?l.createElement(j,{style:{flex:"0 0 48px"}}):l.createElement(ie,{allSelected:St,selectedRows:yt,selectableRowsComponent:A,selectableRowsComponentProps:T,selectableRowDisabled:$,rowData:nn,keyField:g,mergeSelections:Lt,onSelectAllRows:Xt})),ln=je&&(on?l.createElement(j,{style:{flex:"0 0 48px"}}):l.createElement(De,{allExpanded:Ot,expandedRows:vt,rowData:nn,keyField:g,mergeExpansions:Mt,onExpandAllRows:qt,expandableIcon:N,expandableRowDisabled:I}));return l.createElement(t.ThemeProvider,{theme:Wt},!pe&&(!!r||!!i)&&l.createElement(me,{title:r,actions:i,showMenu:!Oe,selectedCount:kt,direction:lt,contextActions:Fe,contextComponent:He,contextMessage:ke}),xe&&l.createElement(Re,{align:he,wrapContent:fe},Se),l.createElement("div",{style:{position:"relative"}},l.createElement(Ee,Object.assign({responsive:oe,fixedHeader:ue,fixedHeaderScrollHeight:be},Bt),l.createElement(ve,null,ae&&!se&&l.createElement(ye,null,re),l.createElement(v,{disabled:ce,className:"rdt_Table",role:"table"},tn()&&l.createElement(O,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},l.createElement(k,{className:"rdt_TableHeadRow",role:"row",dense:x},it?l.createElement(l.Fragment,null,ln,an):l.createElement(l.Fragment,null,an,ln),gt.map((e=>l.createElement(le,{key:e.id,column:e,selectedColumn:Pt,disabled:ae||0===Gt.length,pagination:we,paginationServer:B,persistSelectedOnSort:It,selectableRowsVisibleOnly:F,sortDirection:Ft,sortIcon:Te,sortServer:Me,onSort:Ut,onDragStart:ut,onDragOver:wt,onDragEnd:xt,onDragEnter:bt,onDragLeave:mt,draggingColumnId:pt,currentSortColumnId:dt,currentSortDirection:ct}))))),!Gt.length&&!ae&&l.createElement(Pe,null,de),ae&&se&&l.createElement(ye,null,re),!ae&&Gt.length>0&&l.createElement(Ce,{className:"rdt_TableBody",role:"rowgroup"},Vt.map(((e,t)=>{const n=s(e,g),o=d(n)?t:n,a=h(e,yt,g),r=f(e,vt,g),i=!!(je&&Xe&&Xe(e)),c=!!(je&&I&&I(e));return l.createElement(Q,{id:o,key:o,keyField:g,"data-row-id":o,columns:gt,row:e,rowCount:Gt.length,rowIndex:t,selectableRows:R,expandableRows:je,expandableIcon:N,highlightOnHover:u,pointerOnHover:m,dense:x,expandOnRowClicked:Ve,expandOnRowDoubleClicked:Ue,expandableRowsComponent:Ne,expandableRowsComponentProps:ze,expandableRowsHideExpander:Ge,defaultExpanderDisabled:c,defaultExpanded:i,expandableInheritConditionalStyles:qe,conditionalRowStyles:nt,selected:a,expanded:r,selectableRowsHighlight:S,selectableRowsComponent:A,selectableRowsComponentProps:T,selectableRowDisabled:$,expandableRowDisabled:I,selectableRowsSingle:C,expandableRowsSingle:y,striped:p,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:Jt,onRowDoubleClicked:Qt,onSelectedRow:Yt,onExpandedRow:Kt,draggingColumnId:pt,onDragStart:ut,onDragOver:wt,onDragEnd:xt,onDragEnter:bt,onDragLeave:mt})})))),st&&l.createElement("div",null,st))),l.createElement("div",{style:{position:"absolute",top:0,left:0}},l.createElement(v,{disabled:ce,className:"rdt_Table",role:"table"},tn()&&l.createElement(O,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},l.createElement(k,{className:"rdt_TableHeadRow",role:"row",dense:x},it?l.createElement(l.Fragment,null,ln,an):l.createElement(l.Fragment,null,an,ln),Rt.slice(0,3).map((e=>l.createElement(le,{key:e.id,column:e,selectedColumn:Pt,disabled:ae||0===Gt.length,pagination:we,paginationServer:B,persistSelectedOnSort:It,selectableRowsVisibleOnly:F,sortDirection:Ft,sortIcon:Te,sortServer:Me,onSort:Ut,onDragStart:ut,onDragOver:wt,onDragEnd:xt,onDragEnter:bt,onDragLeave:mt,draggingColumnId:pt,currentSortColumnId:dt,currentSortDirection:ct}))))),!ae&&Gt.length>0&&l.createElement(Ce,{className:"rdt_TableBody",role:"rowgroup"},Vt.map(((e,t)=>{const n=s(e,g),o=d(n)?t:n,a=h(e,yt,g),r=f(e,vt,g),i=!!(je&&Xe&&Xe(e)),c=!!(je&&I&&I(e));return l.createElement(Q,{id:o,key:o,keyField:g,"data-row-id":o,columns:Rt,row:e,rowCount:Gt.length,rowIndex:t,selectableRows:R,expandableRows:je,expandableIcon:N,highlightOnHover:u,pointerOnHover:m,dense:x,expandOnRowClicked:Ve,expandOnRowDoubleClicked:Ue,expandableRowsComponent:Ne,expandableRowsComponentProps:ze,expandableRowsHideExpander:Ge,defaultExpanderDisabled:c,defaultExpanded:i,expandableInheritConditionalStyles:qe,conditionalRowStyles:nt,selected:a,expanded:r,selectableRowsHighlight:S,selectableRowsComponent:A,selectableRowsComponentProps:T,selectableRowDisabled:$,expandableRowDisabled:I,selectableRowsSingle:C,expandableRowsSingle:y,striped:p,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:Jt,onRowDoubleClicked:Qt,onSelectedRow:Yt,onExpandedRow:Kt,draggingColumnId:pt,onDragStart:ut,onDragOver:wt,onDragEnd:xt,onDragEnter:bt,onDragLeave:mt})})))),st&&l.createElement("div",null,st))),Nt&&l.createElement("div",null,l.createElement(zt,{onChangePage:Zt,onChangeRowsPerPage:en,rowCount:V||Gt.length,currentPage:Et,rowsPerPage:Ct,direction:lt,paginationRowsPerPageOptions:Y,paginationIconLastPage:K,paginationIconFirstPage:J,paginationIconNext:Z,paginationIconPrevious:ee,paginationComponentOptions:ne})))}));exports.STOP_PROP_TAG="allowRowEvents",exports.createTheme=function(e="default",t,n="default"){return et[e]||(et[e]=Qe(et[n],t||{})),et[e]=Qe(et[e],t||{}),et[e]},exports.default=nt,exports.defaultThemes=et;
//# sourceMappingURL=index.cjs.js.map
