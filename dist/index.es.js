import*as e from"react";import t from"react";import n,{css as o,ThemeProvider as a}from"styled-components";var l;function r(e,t){return e[t]}function i(e=""){return"number"!=typeof e&&(!e||0===e.length)}function s(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function d(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function c(e=[],t,n="id"){const o=e.slice(),a=r(t,n);return a?o.splice(o.findIndex((e=>r(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function g(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function p(e,t){return Math.ceil(e/t)}function u(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const b=()=>null;function w(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function m(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function x(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function h(e,t){return t?e.findIndex((e=>f(e.id,t))):-1}function f(e,t){return e==t}function R(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!m(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!m(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!x(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!x(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:c(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:d(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:c(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:d(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!m(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!x(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const C=o`
	pointer-events: none;
	opacity: 0.4;
`,E=n.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&C};
	${({theme:e})=>e.table.style};
`,y=o`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,v=n.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&y};
	${({theme:e})=>e.head.style};
`,S=n.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,O=(e,...t)=>o`
		@media screen and (max-width: ${599}px) {
			${o(e,...t)}
		}
	`,k=(e,...t)=>o`
		@media screen and (max-width: ${959}px) {
			${o(e,...t)}
		}
	`,D=(e,...t)=>o`
		@media screen and (max-width: ${1280}px) {
			${o(e,...t)}
		}
	`,P=e=>(t,...n)=>o`
				@media screen and (max-width: ${e}px) {
					${o(t,...n)}
				}
			`,F=n.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,H=n(F)`
	flex-grow: ${({button:e,grow:t})=>0===t||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&o`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&"sm"===e&&O`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&k`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&D`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&P(e)`
    display: none;
  `};
`,I=o`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,$=n(H).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&I};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var j=e.memo((function({id:t,column:n,row:o,rowIndex:a,dataTag:l,isDragging:r,onDragStart:i,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:b}=w(o,n.conditionalCellStyles,["rdt_TableCell"]);return e.createElement($,{id:t,"data-column-id":n.id,role:"gridcell",className:b,"data-tag":l,cellStyle:n.style,renderAsCell:!!n.cell,allowOverflow:n.allowOverflow,button:n.button,center:n.center,compact:n.compact,grow:n.grow,hide:n.hide,maxWidth:n.maxWidth,minWidth:n.minWidth,right:n.right,width:n.width,wrapCell:n.wrap,style:u,isDragging:r,onDragStart:i,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:p},!n.cell&&e.createElement("div",{"data-tag":l},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):s(e,t)}(o,n.selector,n.format,a)),n.cell&&n.cell(o,a,n,t))}));var T=e.memo((function({name:t,component:n="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:r=!1,onClick:i=b}){const s=n,d="input"!==s?o.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=e.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(o,a)),[o,a]);return e.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=a)},style:d,onClick:r?b:i,name:t,"aria-label":t,checked:l,disabled:r},c,{onChange:b}))}));const A=n(F)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function _({name:t,keyField:n,row:o,rowCount:a,selected:l,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(o));return e.createElement(A,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},e.createElement(T,{name:t,component:r,componentOptions:i,checked:l,"aria-checked":l,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:n,rowCount:a,singleSelect:s})},disabled:g}))}const L=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function M({name:t,disabled:n=!1,expanded:o=!1,expandableIcon:a,id:l,row:r,onToggled:i}){const s=o?a.expanded:a.collapsed;return e.createElement(L,{name:t,"aria-disabled":n,onClick:()=>i&&i(r),"data-testid":`expander-button-${l}`,disabled:n,"aria-label":o?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const N=n(F)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function z({name:t,row:n,expanded:o=!1,expandableIcon:a,id:l,keyField:r,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(n));return e.createElement(N,{onClick:e=>e.stopPropagation(),noPadding:!0},e.createElement(M,{name:t,id:l,row:n,expanded:o,expandableIcon:a,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:n,isExpanded:o,keyField:r,rowCount:i,singleExpand:d})}}))}const W=n.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var B=e.memo((function({data:t,ExpanderComponent:n,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const r=["rdt_ExpanderRow",...l.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return e.createElement(W,{className:r,extendedRowStyle:a},e.createElement(n,Object.assign({data:t},o)))}));const G="allowRowEvents";var V,U,X;!function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"}(V||(V={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(U||(U={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(X||(X={}));const Y=o`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,K=o`
	&:hover {
		cursor: pointer;
	}
`,q=n.div.attrs((e=>({style:e.style})))`
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
`;function J({columns:t=[],conditionalRowStyles:n=[],defaultExpanderDisabled:o=!1,dense:a=!1,expandableIcon:l,expandableRows:i=!1,expandableRowsComponent:s,expandableRowsComponentProps:d,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:u=!1,id:m,expandableInheritConditionalStyles:x,keyField:h,onRowClicked:R=b,onRowDoubleClicked:C=b,onRowExpandToggled:E=b,onSelectedRow:y=b,onExpandedRow:v=b,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:D,selectableRowDisabled:P=null,expandableRowDisabled:F=null,selectableRows:H=!1,selectableRowsComponent:I,selectableRowsComponentProps:$,selectableRowsHighlight:T=!1,selectableRowsSingle:A=!1,expandableRowsSingle:L=!1,selected:M,expanded:N,striped:W=!1,keepExpandableFirst:G=!1,draggingColumnId:V,onDragStart:U,onDragOver:X,onDragEnd:Y,onDragEnter:K,onDragLeave:J}){const Q=e.useCallback((()=>{E(!N,O)}),[N,E,O]),Z=S||i&&(g||p),ee=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(R(O,e),!o&&i&&g&&Q())}),[o,g,i,Q,R,O]),te=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(C(O,e),!o&&i&&p&&Q())}),[o,p,i,Q,C,O]),ne=r(O,h),{style:oe,classNames:ae}=w(O,n,["rdt_TableRow"]),le=T&&M,re=x?oe:{},ie=W&&D%2==0;const se=H&&e.createElement(_,{name:`select-row-${ne}`,keyField:h,row:O,rowCount:k,selected:M,selectableRowsComponent:I,selectableRowsComponentProps:$,selectableRowDisabled:P,selectableRowsSingle:A,onSelectedRow:y}),de=i&&!c&&e.createElement(z,{name:`expand-row-${ne}`,keyField:h,id:ne,expandableIcon:l,expanded:N,row:O,rowCount:k,expandableRowsSingle:L,expandableRowDisabled:F,onExpandedRow:v,disabled:o});return e.createElement(e.Fragment,null,e.createElement(q,{id:`row-${m}`,role:"row",striped:ie,highlightOnHover:u,pointerOnHover:!o&&Z,dense:a,onClick:ee,onDoubleClick:te,className:ae,selected:le,style:oe},G?e.createElement(e.Fragment,null,de,se):e.createElement(e.Fragment,null,se,de),t.map((t=>t.omit?null:e.createElement(j,{id:`cell-${t.id}-${ne}`,key:`cell-${t.id}-${ne}`,dataTag:t.ignoreRowClick||t.button?null:"allowRowEvents",column:t,row:O,rowIndex:D,isDragging:f(V,t.id),onDragStart:U,onDragOver:X,onDragEnd:Y,onDragEnter:K,onDragLeave:J})))),i&&N&&e.createElement(B,{key:`expander-${ne}`,data:O,extendedRowStyle:re,extendedClassNames:ae,ExpanderComponent:s,expanderComponentProps:d}))}const Q=n.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Z=({sortActive:e,sortDirection:n})=>t.createElement(Q,{sortActive:e,sortDirection:n},"▲"),ee=n(H)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,te=o`
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

	${({sortActive:e})=>!e&&o`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ne=n.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&te};
`,oe=n.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ae=e.memo((function({column:t,disabled:n,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h,currentSortColumnId:R,currentSortDirection:C}){e.useEffect((()=>{"string"==typeof t.selector&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[E,y]=e.useState(!1),v=e.useRef(null);if(e.useEffect((()=>{v.current&&y(v.current.scrollWidth>v.current.clientWidth)}),[E]),t.omit)return null;const S=()=>{if(!t.sortable&&!t.selector)return;let e=r;f(a.id,t.id)&&(e=r===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:e,selectedColumn:t,clearSelectedOnSort:d&&c&&!g||s||p})},O=t=>e.createElement(Z,{sortActive:t,sortDirection:null!=C?C:r}),k=()=>e.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),D=null!==R?!(!t.sortable||!f(R,t.id)):!(!t.sortable||!f(a.id,t.id)),P=!t.sortable||n,F=t.sortable&&!i&&!t.right,H=t.sortable&&!i&&t.right,I=t.sortable&&i&&!t.right,$=t.sortable&&i&&t.right;return e.createElement(ee,{"data-column-id":t.id,className:"rdt_TableCol",headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,isDragging:f(t.id,o),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:x,onDragLeave:h},t.name&&e.createElement(ne,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:P?void 0:S,onKeyPress:P?void 0:e=>{"Enter"===e.key&&S()},sortActive:!P&&D,disabled:P},!P&&$&&k(),!P&&H&&O(D),"string"==typeof t.name?e.createElement(oe,{title:E?t.name:void 0,ref:v,"data-column-id":t.id},t.name):t.name,!P&&I&&k(),!P&&F&&O(D)))}));const le=n(F)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function re({headCell:t=!0,rowData:n,keyField:o,allSelected:a,mergeSelections:l,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!a,p=d?n.filter((e=>!d(e))):n,u=0===p.length,b=Math.min(n.length,p.length);return e.createElement(le,{className:"rdt_TableCol",headCell:t,noPadding:!0},e.createElement(T,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:l,keyField:o})},checked:a,indeterminate:g,disabled:u}))}function ie(t=V.AUTO){const n="object"==typeof window,[o,a]=e.useState(!1);return e.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const se=n.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,de=n.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,ce=n.div`
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
`;function ge({contextMessage:t,contextActions:n,contextComponent:o,selectedCount:a,direction:l}){const r=ie(l),i=a>0;return o?e.createElement(ce,{visible:i},e.cloneElement(o,{selectedCount:a})):e.createElement(ce,{visible:i,rtl:r},e.createElement(se,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(t,a,r)),e.createElement(de,null,n))}const pe=n.div`
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
`,ue=n.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,be=n.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,we=({title:t,actions:n=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:r,direction:i,showMenu:s=!0})=>e.createElement(pe,{className:"rdt_TableHeader",role:"heading","aria-level":1},e.createElement(ue,null,t),n&&e.createElement(be,null,n),s&&e.createElement(ge,{contextMessage:o,contextActions:a,contextComponent:l,direction:i,selectedCount:r}))
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
***************************************************************************** */;function me(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const xe={left:"flex-start",right:"flex-end",center:"center"},he=n.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>xe[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,fe=t=>{var{align:n="right",wrapContent:o=!0}=t,a=me(t,["align","wrapContent"]);return e.createElement(he,Object.assign({align:n,wrapContent:o},a))},Re=n.div`
	display: flex;
	flex-direction: column;
`,Ce=n.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&o`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&o`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Ee=n.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ye=n.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ve=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Se({name:t,disabled:n=!1,expanded:o=!1,expandableIcon:a,onToggled:l}){const r=o?a.expanded:a.collapsed,i=l;return e.createElement(ve,{name:t,"aria-disabled":n,onClick:i,disabled:n,"aria-label":o?"Collapse Row":"Expand Row",role:"button",type:"button"},r)}const Oe=n(F)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ke({headCell:t=!0,rowData:n,keyField:o,allExpanded:a,mergeExpansions:l,expandedRows:r,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=r.length>0&&!a,g=s?n.filter((e=>!s(e))):n,p=0===g.length,u=Math.min(n.length,g.length);return e.createElement(Oe,{className:"rdt_TableCol",headCell:t,noPadding:!0},e.createElement(Se,{name:"expand-all-rows",expanded:c||a,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:l,keyField:o})}}))}const De=n.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Pe=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t.createElement("path",{d:"M7 10l5 5 5-5z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Fe=n.select`
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
`,He=n.div`
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
`,Ie=t=>{var{defaultValue:n,onChange:o}=t,a=me(t,["defaultValue","onChange"]);return e.createElement(He,null,e.createElement(Fe,Object.assign({onChange:o,defaultValue:n},a)),e.createElement(Pe,null))},$e={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return t.createElement("div",null,"To add an expander pass in a component instance via ",t.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),t.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),t.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:t.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:t.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:U.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),t.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:V.AUTO,onChangePage:b,onChangeRowsPerPage:b,onRowClicked:b,onRowDoubleClicked:b,onRowExpandToggled:b,onSelectedRowsChange:b,onExpandedRowsChange:b,onSort:b,onColumnOrderChange:b,keepExpandableFirst:!1,footer:null,currentSortColumnId:null,currentSortDirection:void 0,isInnerTable:!1},je={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Te=n.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Ae=n.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,_e=n.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${O`
    width: 100%;
    justify-content: space-around;
  `};
`,Le=n.span`
	flex-shrink: 1;
	user-select: none;
`,Me=n(Le)`
	margin: 0 24px;
`,Ne=n(Le)`
	margin: 0 4px;
`;var ze=e.memo((function({rowsPerPage:t,rowCount:n,currentPage:o,direction:a=$e.direction,paginationRowsPerPageOptions:l=$e.paginationRowsPerPageOptions,paginationIconLastPage:r=$e.paginationIconLastPage,paginationIconFirstPage:i=$e.paginationIconFirstPage,paginationIconNext:s=$e.paginationIconNext,paginationIconPrevious:d=$e.paginationIconPrevious,paginationComponentOptions:c=$e.paginationComponentOptions,onChangeRowsPerPage:g=$e.onChangeRowsPerPage,onChangePage:u=$e.onChangePage}){const b=(()=>{const t="object"==typeof window;function n(){return{width:t?window.innerWidth:void 0,height:t?window.innerHeight:void 0}}const[o,a]=e.useState(n);return e.useEffect((()=>{if(!t)return()=>null;function e(){a(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),o})(),w=ie(a),m=b.width&&b.width>599,x=p(n,t),h=o*t,f=h-t+1,R=1===o,C=o===x,E=Object.assign(Object.assign({},je),c),y=o===x?`${f}-${n} ${E.rangeSeparatorText} ${n}`:`${f}-${h} ${E.rangeSeparatorText} ${n}`,v=e.useCallback((()=>u(o-1)),[o,u]),S=e.useCallback((()=>u(o+1)),[o,u]),O=e.useCallback((()=>u(1)),[u]),k=e.useCallback((()=>u(p(n,t))),[u,n,t]),D=e.useCallback((e=>g(Number(e.target.value),o)),[o,g]),P=l.map((t=>e.createElement("option",{key:t,value:t},t)));E.selectAllRowsItem&&P.push(e.createElement("option",{key:-1,value:n},E.selectAllRowsItemText));const F=e.createElement(Ie,{onChange:D,defaultValue:t,"aria-label":E.rowsPerPageText},P);return e.createElement(Te,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&e.createElement(e.Fragment,null,e.createElement(Ne,null,E.rowsPerPageText),F),m&&e.createElement(Me,null,y),e.createElement(_e,null,e.createElement(Ae,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":R,onClick:O,disabled:R,isRTL:w},i),e.createElement(Ae,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":R,onClick:v,disabled:R,isRTL:w},d),!m&&F,e.createElement(Ae,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":C,onClick:S,disabled:C,isRTL:w},s),e.createElement(Ae,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":C,onClick:k,disabled:C,isRTL:w},r)))}));const We=(t,n)=>{const o=e.useRef(!0);e.useEffect((()=>{o.current?o.current=!1:t()}),n)};var Be=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Ge}(e)}(e)};var Ge="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ve(e,t){return!1!==t.clone&&t.isMergeableObject(e)?qe((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ue(e,t,n){return e.concat(t).map((function(e){return Ve(e,n)}))}function Xe(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Ye(e,t){try{return t in e}catch(e){return!1}}function Ke(e,t,n){var o={};return n.isMergeableObject(e)&&Xe(e).forEach((function(t){o[t]=Ve(e[t],n)})),Xe(t).forEach((function(a){(function(e,t){return Ye(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Ye(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return qe;var n=t.customMerge(e);return"function"==typeof n?n:qe}(a,n)(e[a],t[a],n):o[a]=Ve(t[a],n))})),o}function qe(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ue,n.isMergeableObject=n.isMergeableObject||Be,n.cloneUnlessOtherwiseSpecified=Ve;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ke(e,t,n):Ve(t,n)}qe.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return qe(e,n,t)}),{})};var Je=qe;const Qe={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ze={default:Qe,light:Qe,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function et(e="default",t,n="default"){return Ze[e]||(Ze[e]=Je(Ze[n],t||{})),Ze[e]=Je(Ze[e],t||{}),Ze[e]}function tt(t,n,o,a){const[r,i]=e.useState((()=>g(t))),[s,d]=e.useState(""),c=e.useRef("");We((()=>{i(g(t))}),[t]);const p=e.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(c.current=(null===(o=null===(n=r[h(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(c.current))}),[r]),u=e.useCallback((e=>{var t;const{attributes:o}=e.target,a=null===(t=o.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;if(a&&c.current&&a!==c.current){const e=h(r,c.current),t=h(r,a),o=[...r];o[e]=r[t],o[t]=r[e],i(o),n(o)}}),[n,r]),b=e.useCallback((e=>{e.preventDefault()}),[]),w=e.useCallback((e=>{e.preventDefault()}),[]),m=e.useCallback((e=>{e.preventDefault(),c.current="",d("")}),[]),x=function(e=!1){return e?l.ASC:l.DESC}(a),f=e.useMemo((()=>r[h(r,null==o?void 0:o.toString())]||{}),[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:p,handleDragEnter:u,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:x,defaultSortColumn:f}}var nt=e.memo((function(t){const{data:n=$e.data,columns:o=$e.columns,title:d=$e.title,actions:c=$e.actions,keyField:g=$e.keyField,striped:b=$e.striped,highlightOnHover:w=$e.highlightOnHover,pointerOnHover:h=$e.pointerOnHover,dense:f=$e.dense,selectableRows:C=$e.selectableRows,selectableRowsSingle:y=$e.selectableRowsSingle,expandableRowsSingle:O=$e.expandableRowsSingle,selectableRowsHighlight:k=$e.selectableRowsHighlight,selectableRowsNoSelectAll:D=$e.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=$e.expandableRowsNoExpandAll,selectableRowsVisibleOnly:H=$e.selectableRowsVisibleOnly,selectableRowSelected:I=$e.selectableRowSelected,selectableRowDisabled:$=$e.selectableRowDisabled,expandableRowDisabled:j=$e.expandableRowDisabled,selectableRowsComponent:T=$e.selectableRowsComponent,selectableRowsComponentProps:A=$e.selectableRowsComponentProps,onRowExpandToggled:_=$e.onRowExpandToggled,onSelectedRowsChange:L=$e.onSelectedRowsChange,onExpandedRowsChange:M=$e.onExpandedRowsChange,expandableIcon:N=$e.expandableIcon,onChangeRowsPerPage:z=$e.onChangeRowsPerPage,onChangePage:W=$e.onChangePage,paginationServer:B=$e.paginationServer,paginationServerOptions:G=$e.paginationServerOptions,paginationTotalRows:V=$e.paginationTotalRows,paginationDefaultPage:U=$e.paginationDefaultPage,paginationResetDefaultPage:X=$e.paginationResetDefaultPage,paginationPerPage:Y=$e.paginationPerPage,paginationRowsPerPageOptions:K=$e.paginationRowsPerPageOptions,paginationIconLastPage:q=$e.paginationIconLastPage,paginationIconFirstPage:Q=$e.paginationIconFirstPage,paginationIconNext:Z=$e.paginationIconNext,paginationIconPrevious:ee=$e.paginationIconPrevious,paginationComponent:te=$e.paginationComponent,paginationComponentOptions:ne=$e.paginationComponentOptions,responsive:oe=$e.responsive,progressPending:le=$e.progressPending,progressComponent:ie=$e.progressComponent,persistTableHead:se=$e.persistTableHead,noDataComponent:de=$e.noDataComponent,disabled:ce=$e.disabled,noTableHead:ge=$e.noTableHead,noHeader:pe=$e.noHeader,fixedHeader:ue=$e.fixedHeader,fixedHeaderScrollHeight:be=$e.fixedHeaderScrollHeight,pagination:me=$e.pagination,subHeader:xe=$e.subHeader,subHeaderAlign:he=$e.subHeaderAlign,subHeaderWrap:ve=$e.subHeaderWrap,subHeaderComponent:Se=$e.subHeaderComponent,noContextMenu:Oe=$e.noContextMenu,contextMessage:Pe=$e.contextMessage,contextActions:Fe=$e.contextActions,contextComponent:He=$e.contextComponent,expandableRows:Ie=$e.expandableRows,onRowClicked:je=$e.onRowClicked,onRowDoubleClicked:Te=$e.onRowDoubleClicked,sortIcon:Ae=$e.sortIcon,onSort:_e=$e.onSort,sortFunction:Le=$e.sortFunction,sortServer:Me=$e.sortServer,expandableRowsComponent:Ne=$e.expandableRowsComponent,expandableRowsComponentProps:Be=$e.expandableRowsComponentProps,expandableRowsHideExpander:Ge=$e.expandableRowsHideExpander,expandOnRowClicked:Ve=$e.expandOnRowClicked,expandOnRowDoubleClicked:Ue=$e.expandOnRowDoubleClicked,expandableRowExpanded:Xe=$e.expandableRowExpanded,expandableInheritConditionalStyles:Ye=$e.expandableInheritConditionalStyles,defaultSortFieldId:Ke=$e.defaultSortFieldId,defaultSortAsc:qe=$e.defaultSortAsc,clearSelectedRows:Qe=$e.clearSelectedRows,clearExpandedRows:et=$e.clearExpandedRows,conditionalRowStyles:nt=$e.conditionalRowStyles,theme:ot=$e.theme,customStyles:at=$e.customStyles,direction:lt=$e.direction,onColumnOrderChange:rt=$e.onColumnOrderChange,keepExpandableFirst:it=$e.keepExpandableFirst,footer:st=$e.footer,currentSortColumnId:dt=$e.currentSortColumnId,currentSortDirection:ct=$e.currentSortDirection,isInnerTable:gt=$e.isInnerTable}=t,{tableColumns:pt,draggingColumnId:ut,handleDragStart:bt,handleDragEnter:wt,handleDragOver:mt,handleDragLeave:xt,handleDragEnd:ht,defaultSortDirection:ft,defaultSortColumn:Rt}=tt(o,rt,Ke,qe),Ct=e.useMemo((()=>pt.reduce(((e,t)=>(t.freeze&&(e+=1),e)),0)),[pt]),Et=e.useMemo((()=>pt.slice(0,Ct)),[Ct,pt]),[{rowsPerPage:yt,currentPage:vt,selectedRows:St,expandedRows:Ot,allSelected:kt,allExpanded:Dt,selectedCount:Pt,expandedCount:Ft,selectedColumn:Ht,sortDirection:It,toggleOnSelectedRowsChange:$t,toggleOnExpandedRowsChange:jt},Tt]=e.useReducer(R,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:Rt,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:ft,currentPage:U,rowsPerPage:Y,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:$e.contextMessage}),{persistSelectedOnSort:At=!1,persistSelectedOnPageChange:_t=!1,persistExpandedOnSort:Lt=!1,persistExpandedOnPageChange:Mt=!1}=G,Nt=!(!B||!_t&&!At),zt=!(!B||!Mt&&!Lt),Wt=me&&!le&&n.length>0,Bt=te||ze,Gt=e.useMemo((()=>((e={},t="default",n="default")=>{const o=Ze[t]?t:n;return Je({table:{style:{color:(a=Ze[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(at,ot)),[at,ot]),Vt=e.useMemo((()=>Object.assign({},"auto"!==lt&&{dir:lt})),[lt]),Ut=e.useMemo((()=>{if(Me)return n;if((null==Ht?void 0:Ht.sortFunction)&&"function"==typeof Ht.sortFunction){const e=Ht.sortFunction,t=It===l.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=s(e,t),l=s(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==Ht?void 0:Ht.selector,It,Le)}),[Me,Ht,It,n,Le]),Xt=e.useMemo((()=>{if(me&&!B){const e=vt*yt,t=e-yt;return Ut.slice(t,e)}return Ut}),[vt,me,B,yt,Ut]),Yt=e.useCallback((e=>{Tt(e)}),[]),Kt=e.useCallback((e=>{Tt(e)}),[]),qt=e.useCallback((e=>{Tt(e)}),[]),Jt=e.useCallback((e=>{Tt(e)}),[]),Qt=e.useCallback((e=>{Tt(e)}),[]),Zt=e.useCallback(((e,t)=>je(e,t)),[je]),en=e.useCallback(((e,t)=>Te(e,t)),[Te]),tn=e.useCallback((e=>Tt({type:"CHANGE_PAGE",page:e,paginationServer:B,visibleOnly:H,persistSelectedOnPageChange:_t})),[B,_t,H]),nn=e.useCallback((e=>{const t=p(V||Xt.length,e),n=u(vt,t);B||tn(n),Tt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[vt,tn,B,V,Xt.length]),on=()=>!ge&&(!!se||Ut.length>0&&!le);if(me&&!B&&Ut.length>0&&0===Xt.length){const e=p(Ut.length,yt),t=u(vt,e);tn(t)}We((()=>{L({allSelected:kt,selectedCount:Pt,selectedRows:St})}),[$t]),We((()=>{M({allExpanded:Dt,expandedCount:Ft,expandedRows:Ot})}),[jt]),We((()=>{_e(Ht,It)}),[Ht,It]),We((()=>{W(vt,V||Ut.length)}),[vt]),We((()=>{z(yt,vt)}),[yt]),We((()=>{tn(U)}),[U,X]),We((()=>{if(me&&B&&V>0){const e=p(V,yt),t=u(vt,e);vt!==t&&tn(t)}}),[V]),e.useEffect((()=>{Tt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Qe})}),[y,Qe]),e.useEffect((()=>{Tt({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:et})}),[O,et]),e.useEffect((()=>{if(!I)return;const e=Ut.filter((e=>I(e))),t=y?e.slice(0,1):e;Tt({type:"SELECT_MULTIPLE_ROWS",keyField:g,selectedRows:t,totalRows:Ut.length,mergeSelections:Nt})}),[n,I]),e.useEffect((()=>{if(!Xe)return;const e=Ut.filter((e=>Xe(e))),t=O?e.slice(0,1):e;Tt({type:"EXPAND_MULTIPLE_ROWS",keyField:g,expandedRows:t,totalRows:Ut.length,mergeExpansions:zt})}),[n,Xe]);const an=H?Xt:Ut,ln=Mt||O||P,rn=C&&(_t||y||D?e.createElement(F,{style:{flex:"0 0 48px"}}):e.createElement(re,{allSelected:kt,selectedRows:St,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:$,rowData:an,keyField:g,mergeSelections:Nt,onSelectAllRows:Kt})),sn=Ie&&(ln?e.createElement(F,{style:{flex:"0 0 48px"}}):e.createElement(ke,{allExpanded:Dt,expandedRows:Ot,rowData:an,keyField:g,mergeExpansions:zt,onExpandAllRows:qt,expandableIcon:N,expandableRowDisabled:j}));return e.createElement(a,{theme:Gt},!pe&&(!!d||!!c)&&e.createElement(we,{title:d,actions:c,showMenu:!Oe,selectedCount:Pt,direction:lt,contextActions:Fe,contextComponent:He,contextMessage:Pe}),xe&&e.createElement(fe,{align:he,wrapContent:ve},Se),e.createElement("div",{style:{position:"relative"}},e.createElement(Ce,Object.assign({responsive:oe,fixedHeader:ue,fixedHeaderScrollHeight:be},Vt),e.createElement(ye,null,le&&!se&&e.createElement(Ee,null,ie),e.createElement(E,{disabled:ce,className:"rdt_Table",role:"table"},on()&&e.createElement(v,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},e.createElement(S,{className:"rdt_TableHeadRow",role:"row",dense:f},it?e.createElement(e.Fragment,null,sn,rn):e.createElement(e.Fragment,null,rn,sn),pt.map((t=>e.createElement(ae,{key:t.id,column:t,selectedColumn:Ht,disabled:le||0===Ut.length,pagination:me,paginationServer:B,persistSelectedOnSort:At,selectableRowsVisibleOnly:H,sortDirection:It,sortIcon:Ae,sortServer:Me,onSort:Yt,onDragStart:bt,onDragOver:mt,onDragEnd:ht,onDragEnter:wt,onDragLeave:xt,draggingColumnId:ut,currentSortColumnId:dt,currentSortDirection:ct}))))),!Ut.length&&!le&&e.createElement(De,null,de),le&&se&&e.createElement(Ee,null,ie),!le&&Ut.length>0&&e.createElement(Re,{className:"rdt_TableBody",role:"rowgroup"},Xt.map(((t,n)=>{const o=r(t,g),a=i(o)?n:o,l=m(t,St,g),s=x(t,Ot,g),d=!!(Ie&&Xe&&Xe(t)),c=!!(Ie&&j&&j(t));return e.createElement(J,{id:a,key:a,keyField:g,"data-row-id":a,columns:pt,row:t,rowCount:Ut.length,rowIndex:n,selectableRows:C,expandableRows:Ie,expandableIcon:N,highlightOnHover:w,pointerOnHover:h,dense:f,expandOnRowClicked:Ve,expandOnRowDoubleClicked:Ue,expandableRowsComponent:Ne,expandableRowsComponentProps:Be,expandableRowsHideExpander:Ge,defaultExpanderDisabled:c,defaultExpanded:d,expandableInheritConditionalStyles:Ye,conditionalRowStyles:nt,selected:l,expanded:s,selectableRowsHighlight:k,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:$,expandableRowDisabled:j,selectableRowsSingle:y,expandableRowsSingle:O,striped:b,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:Zt,onRowDoubleClicked:en,onSelectedRow:Jt,onExpandedRow:Qt,draggingColumnId:ut,onDragStart:bt,onDragOver:mt,onDragEnd:ht,onDragEnter:wt,onDragLeave:xt})})))),st&&e.createElement("div",null,st))),!Ie&&!gt&&Et.length>0&&e.createElement("div",{style:{position:"absolute",top:0,left:0,maxWidth:"100%",border:"1px solid black"}},e.createElement(E,{disabled:ce,className:"rdt_Table",role:"table"},on()&&e.createElement(v,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:ue},e.createElement(S,{className:"rdt_TableHeadRow",role:"row",dense:f},it?e.createElement(e.Fragment,null,sn,rn):e.createElement(e.Fragment,null,rn,sn),Et.map((t=>e.createElement(ae,{key:t.id,column:t,selectedColumn:Ht,disabled:le||0===Ut.length,pagination:me,paginationServer:B,persistSelectedOnSort:At,selectableRowsVisibleOnly:H,sortDirection:It,sortIcon:Ae,sortServer:Me,onSort:Yt,onDragStart:bt,onDragOver:mt,onDragEnd:ht,onDragEnter:wt,onDragLeave:xt,draggingColumnId:ut,currentSortColumnId:dt,currentSortDirection:ct}))))),!le&&Ut.length>0&&e.createElement(Re,{className:"rdt_TableBody",role:"rowgroup"},Xt.map(((t,n)=>{const o=r(t,g),a=i(o)?n:o,l=m(t,St,g),s=x(t,Ot,g),d=!!(Ie&&Xe&&Xe(t)),c=!!(Ie&&j&&j(t));return e.createElement(J,{id:a,key:a,keyField:g,"data-row-id":a,columns:Et,row:t,rowCount:Ut.length,rowIndex:n,selectableRows:C,expandableRows:Ie,expandableIcon:N,highlightOnHover:w,pointerOnHover:h,dense:f,expandOnRowClicked:Ve,expandOnRowDoubleClicked:Ue,expandableRowsComponent:Ne,expandableRowsComponentProps:Be,expandableRowsHideExpander:Ge,defaultExpanderDisabled:c,defaultExpanded:d,expandableInheritConditionalStyles:Ye,conditionalRowStyles:nt,selected:l,expanded:s,selectableRowsHighlight:k,selectableRowsComponent:T,selectableRowsComponentProps:A,selectableRowDisabled:$,expandableRowDisabled:j,selectableRowsSingle:y,expandableRowsSingle:O,striped:b,keepExpandableFirst:it,onRowExpandToggled:_,onRowClicked:Zt,onRowDoubleClicked:en,onSelectedRow:Jt,onExpandedRow:Qt,draggingColumnId:ut,onDragStart:bt,onDragOver:mt,onDragEnd:ht,onDragEnter:wt,onDragLeave:xt})})))),st&&e.createElement("div",null,st))),Wt&&e.createElement("div",null,e.createElement(Bt,{onChangePage:tn,onChangeRowsPerPage:nn,rowCount:V||Ut.length,currentPage:vt,rowsPerPage:yt,direction:lt,paginationRowsPerPageOptions:K,paginationIconLastPage:q,paginationIconFirstPage:Q,paginationIconNext:Z,paginationIconPrevious:ee,paginationComponentOptions:ne})))}));export{U as Alignment,V as Direction,X as Media,G as STOP_PROP_TAG,et as createTheme,nt as default,Ze as defaultThemes};
