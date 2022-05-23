import*as e from"react";import t from"react";import n,{css as o,ThemeProvider as a}from"styled-components";var l;function r(e,t){return e[t]}function i(e,t){return t.split(".").reduce(((e,t)=>{const n=t.match(/[^\]\\[.]+/g);if(n&&n.length>1)for(let t=0;t<n.length;t++)return e[n[t]][n[t+1]];return e[t]}),e)}function s(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function d(e=[],t,n="id"){const o=e.slice(),a=r(t,n);return a?o.splice(o.findIndex((e=>r(e,n)===a)),1):o.splice(o.findIndex((e=>e===t)),1),o}function c(e){return e.map(((e,t)=>{const n=Object.assign(Object.assign({},e),{sortable:e.sortable||!!e.sortFunction||void 0});return e.id||(n.id=t+1),n}))}function g(e,t){return Math.ceil(e/t)}function p(e,t){return Math.min(e,t)}!function(e){e.ASC="asc",e.DESC="desc"}(l||(l={}));const u=()=>null;function b(e,t=[],n=[]){let o={},a=[...n];return t.length&&t.forEach((t=>{if(!t.when||"function"!=typeof t.when)throw new Error('"when" must be defined in the conditional style object and must be function');t.when(e)&&(o=t.style||{},t.classNames&&(a=[...a,...t.classNames]),"function"==typeof t.style&&(o=t.style(e)||{}))})),{style:o,classNames:a.join(" ")}}function w(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function m(e,t=[],n="id"){const o=r(e,n);return o?t.some((e=>r(e,n)===o)):t.some((t=>t===e))}function h(e,t){return t?e.findIndex((e=>x(e.id,t))):-1}function x(e,t){return e==t}function f(e,t){const n=!e.toggleOnSelectedRowsChange,o=!e.toggleOnExpandedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeSelections:l}=t,r=!e.allSelected,i=!e.toggleOnSelectedRowsChange;if(l){const t=r?[...e.selectedRows,...o.filter((t=>!w(t,e.selectedRows,n)))]:e.selectedRows.filter((e=>!w(e,o,n)));return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:t.length,selectedRows:t,toggleOnSelectedRowsChange:i})}return Object.assign(Object.assign({},e),{allSelected:r,selectedCount:r?a:0,selectedRows:r?o:[],toggleOnSelectedRowsChange:i})}case"EXPAND_ALL_ROWS":{const{keyField:n,rows:o,rowCount:a,mergeExpansions:l}=t,r=!e.allExpanded,i=!e.toggleOnExpandedRowsChange;if(l){const t=r?[...e.expandedRows,...o.filter((t=>!m(t,e.expandedRows,n)))]:e.expandedRows.filter((e=>!m(e,o,n)));return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:t.length,expandedRows:t,toggleOnExpandedRowsChange:i})}return Object.assign(Object.assign({},e),{allExpanded:r,expandedCount:r?a:0,expandedRows:r?o:[],toggleOnExpandedRowsChange:i})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:a,isSelected:l,rowCount:r,singleSelect:i}=t;return i?l?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[a],toggleOnSelectedRowsChange:n}):l?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:d(e.selectedRows,a,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===r,selectedRows:s(e.selectedRows,a),toggleOnSelectedRowsChange:n})}case"EXPAND_SINGLE_ROW":{const{keyField:n,row:a,isExpanded:l,rowCount:r,singleExpand:i}=t;return i?l?Object.assign(Object.assign({},e),{expandedCount:0,allExpanded:!1,expandedRows:[],toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:1,allExpanded:!1,expandedRows:[a],toggleOnExpandedRowsChange:o}):l?Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length>0?e.expandedRows.length-1:0,allExpanded:!1,expandedRows:d(e.expandedRows,a,n),toggleOnExpandedRowsChange:o}):Object.assign(Object.assign({},e),{expandedCount:e.expandedRows.length+1,allExpanded:e.expandedRows.length+1===r,expandedRows:s(e.expandedRows,a),toggleOnExpandedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:a,totalRows:l,mergeSelections:r}=t;if(r){const t=[...e.selectedRows,...a.filter((t=>!w(t,e.selectedRows,o)))];return Object.assign(Object.assign({},e),{selectedCount:t.length,allSelected:!1,selectedRows:t,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:a.length,allSelected:a.length===l,selectedRows:a,toggleOnSelectedRowsChange:n})}case"EXPAND_MULTIPLE_ROWS":{const{keyField:n,expandedRows:a,totalRows:l,mergeExpansions:r}=t;if(r){const t=[...e.expandedRows,...a.filter((t=>!m(t,e.expandedRows,n)))];return Object.assign(Object.assign({},e),{expandedCount:t.length,allExpanded:!1,expandedRows:t,toggleOnExpandedRowsChange:o})}return Object.assign(Object.assign({},e),{expandedCount:a.length,allExpanded:a.length===l,expandedRows:a,toggleOnExpandedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:n})}case"CLEAR_EXPANDED_ROWS":{const{expandedRowsFlag:n}=t;return Object.assign(Object.assign({},e),{allExpanded:!1,expandedCount:0,expandedRows:[],expandedRowsFlag:n})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:a,clearSelectedOnSort:l}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:a,sortDirection:o,currentPage:1}),l&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:a,visibleOnly:l,persistSelectedOnPageChange:r}=t,i=a&&r,s=a&&!r||l;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),i&&{allSelected:!1}),s&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:n,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:n})}}}const C=o`
	pointer-events: none;
	opacity: 0.4;
`,R=n.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&C};
	${({theme:e})=>e.table.style};
`,E=o`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,y=n.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&E};
	${({theme:e})=>e.head.style};
`,v=n.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,S=(e,...t)=>o`
		@media screen and (max-width: ${599}px) {
			${o(e,...t)}
		}
	`,O=(e,...t)=>o`
		@media screen and (max-width: ${959}px) {
			${o(e,...t)}
		}
	`,k=(e,...t)=>o`
		@media screen and (max-width: ${1280}px) {
			${o(e,...t)}
		}
	`,P=e=>(t,...n)=>o`
				@media screen and (max-width: ${e}px) {
					${o(t,...n)}
				}
			`,D=n.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,F=n(D)`
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
	${({hide:e})=>e&&"sm"===e&&S`
    display: none;
  `};
	${({hide:e})=>e&&"md"===e&&O`
    display: none;
  `};
	${({hide:e})=>e&&"lg"===e&&k`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&P(e)`
    display: none;
  `};
`,H=o`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,$=n(F).attrs((e=>({style:e.style})))`
	${({renderAsCell:e})=>!e&&H};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var j=e.memo((function({id:t,column:n,row:o,rowIndex:a,dataTag:l,isDragging:r,onDragStart:s,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:p}){const{style:u,classNames:w}=b(o,n.conditionalCellStyles,["rdt_TableCell"]);return e.createElement($,{id:t,"data-column-id":n.id,role:"gridcell",className:w,"data-tag":l,cellStyle:n.style,renderAsCell:!!n.cell,allowOverflow:n.allowOverflow,button:n.button,center:n.center,compact:n.compact,grow:n.grow,hide:n.hide,maxWidth:n.maxWidth,minWidth:n.minWidth,right:n.right,width:n.width,wrapCell:n.wrap,style:u,isDragging:r,onDragStart:s,onDragOver:d,onDragEnd:c,onDragEnter:g,onDragLeave:p},!n.cell&&e.createElement("div",{"data-tag":l},function(e,t,n,o){if(!t)return null;if("string"!=typeof t&&"function"!=typeof t)throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return n&&"function"==typeof n?n(e,o):t&&"function"==typeof t?t(e,o):i(e,t)}(o,n.selector,n.format,a)),n.cell&&n.cell(o,a,n,t))}));var I=e.memo((function({name:t,component:n="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:l=!1,disabled:r=!1,onClick:i=u}){const s=n,d="input"!==s?o.style:(e=>Object.assign(Object.assign({fontSize:"18px"},!e&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(r),c=e.useMemo((()=>function(e,...t){let n;return Object.keys(e).map((t=>e[t])).forEach(((o,a)=>{const l=e;"function"==typeof o&&(n=Object.assign(Object.assign({},l),{[Object.keys(e)[a]]:o(...t)}))})),n||e}(o,a)),[o,a]);return e.createElement(s,Object.assign({type:"checkbox",ref:e=>{e&&(e.indeterminate=a)},style:d,onClick:r?u:i,name:t,"aria-label":t,checked:l,disabled:r},c,{onChange:u}))}));const A=n(D)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function T({name:t,keyField:n,row:o,rowCount:a,selected:l,selectableRowsComponent:r,selectableRowsComponentProps:i,selectableRowsSingle:s,selectableRowDisabled:d,onSelectedRow:c}){const g=!(!d||!d(o));return e.createElement(A,{onClick:e=>e.stopPropagation(),className:"rdt_TableCell",noPadding:!0},e.createElement(I,{name:t,component:r,componentOptions:i,checked:l,"aria-checked":l,onClick:()=>{c({type:"SELECT_SINGLE_ROW",row:o,isSelected:l,keyField:n,rowCount:a,singleSelect:s})},disabled:g}))}const _=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function L({name:t,disabled:n=!1,expanded:o=!1,expandableIcon:a,id:l,row:r,onToggled:i}){const s=o?a.expanded:a.collapsed;return e.createElement(_,{name:t,"aria-disabled":n,onClick:()=>i&&i(r),"data-testid":`expander-button-${l}`,disabled:n,"aria-label":o?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const M=n(D)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function N({name:t,row:n,expanded:o=!1,expandableIcon:a,id:l,keyField:r,rowCount:i,onExpandedRow:s,expandableRowsSingle:d,expandableRowDisabled:c}){const g=!(!c||!c(n));return e.createElement(M,{onClick:e=>e.stopPropagation(),noPadding:!0},e.createElement(L,{name:t,id:l,row:n,expanded:o,expandableIcon:a,disabled:g,onToggled:()=>{s({type:"EXPAND_SINGLE_ROW",row:n,isExpanded:o,keyField:r,rowCount:i,singleExpand:d})}}))}const z=n.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var W=e.memo((function({data:t,ExpanderComponent:n,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:l}){const r=["rdt_ExpanderRow",...l.split(" ").filter((e=>"rdt_TableRow"!==e))].join(" ");return e.createElement(z,{className:r,extendedRowStyle:a},e.createElement(n,Object.assign({data:t},o)))}));const B="allowRowEvents";var G,V,U;!function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"}(G||(G={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(V||(V={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(U||(U={}));const X=o`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Y=o`
	&:hover {
		cursor: pointer;
	}
`,K=n.div.attrs((e=>({style:e.style})))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&X};
	${({pointerOnHover:e})=>e&&Y};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function q({columns:t=[],conditionalRowStyles:n=[],defaultExpanderDisabled:o=!1,dense:a=!1,expandableIcon:l,expandableRows:i=!1,expandableRowsComponent:s,expandableRowsComponentProps:d,expandableRowsHideExpander:c,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:w=!1,id:m,expandableInheritConditionalStyles:h,keyField:f,onRowClicked:C=u,onRowDoubleClicked:R=u,onRowExpandToggled:E=u,onSelectedRow:y=u,onExpandedRow:v=u,pointerOnHover:S=!1,row:O,rowCount:k,rowIndex:P,selectableRowDisabled:D=null,expandableRowDisabled:F=null,selectableRows:H=!1,selectableRowsComponent:$,selectableRowsComponentProps:I,selectableRowsHighlight:A=!1,selectableRowsSingle:_=!1,expandableRowsSingle:L=!1,selected:M,expanded:z,striped:B=!1,keepExpandableFirst:G=!1,draggingColumnId:V,onDragStart:U,onDragOver:X,onDragEnd:Y,onDragEnter:q,onDragLeave:J}){const Q=e.useCallback((()=>{E(!z,O)}),[z,E,O]),Z=S||i&&(g||p),ee=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(C(O,e),!o&&i&&g&&Q())}),[o,g,i,Q,C,O]),te=e.useCallback((e=>{e.target&&"allowRowEvents"===e.target.getAttribute("data-tag")&&(R(O,e),!o&&i&&p&&Q())}),[o,p,i,Q,R,O]),ne=r(O,f),{style:oe,classNames:ae}=b(O,n,["rdt_TableRow"]),le=A&&M,re=h?oe:{},ie=B&&P%2==0;const se=H&&e.createElement(T,{name:`select-row-${ne}`,keyField:f,row:O,rowCount:k,selected:M,selectableRowsComponent:$,selectableRowsComponentProps:I,selectableRowDisabled:D,selectableRowsSingle:_,onSelectedRow:y}),de=i&&!c&&e.createElement(N,{name:`expand-row-${ne}`,keyField:f,id:ne,expandableIcon:l,expanded:z,row:O,rowCount:k,expandableRowsSingle:L,expandableRowDisabled:F,onExpandedRow:v,disabled:o});return e.createElement(e.Fragment,null,e.createElement(K,{id:`row-${m}`,role:"row",striped:ie,highlightOnHover:w,pointerOnHover:!o&&Z,dense:a,onClick:ee,onDoubleClick:te,className:ae,selected:le,style:oe},G?e.createElement(e.Fragment,null,de,se):e.createElement(e.Fragment,null,se,de),t.map((t=>t.omit?null:e.createElement(j,{id:`cell-${t.id}-${ne}`,key:`cell-${t.id}-${ne}`,dataTag:t.ignoreRowClick||t.button?null:"allowRowEvents",column:t,row:O,rowIndex:P,isDragging:x(V,t.id),onDragStart:U,onDragOver:X,onDragEnd:Y,onDragEnter:q,onDragLeave:J})))),i&&z&&e.createElement(W,{key:`expander-${ne}`,data:O,extendedRowStyle:re,extendedClassNames:ae,ExpanderComponent:s,expanderComponentProps:d}))}const J=n.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>"desc"===e&&"transform: rotate(180deg)"};
`,Q=({sortActive:e,sortDirection:n})=>t.createElement(J,{sortActive:e,sortDirection:n},"▲"),Z=n(F)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,ee=o`
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
`,te=n.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&ee};
`,ne=n.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var oe=e.memo((function({column:t,disabled:n,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:c,persistSelectedOnSort:g,selectableRowsVisibleOnly:p,onSort:u,onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:h,onDragLeave:f}){e.useEffect((()=>{"string"==typeof t.selector&&console.error(`Warning: ${t.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)}),[]);const[C,R]=e.useState(!1),E=e.useRef(null);if(e.useEffect((()=>{E.current&&R(E.current.scrollWidth>E.current.clientWidth)}),[C]),t.omit)return null;const y=()=>{if(!t.sortable&&!t.selector)return;let e=r;x(a.id,t.id)&&(e=r===l.ASC?l.DESC:l.ASC),u({type:"SORT_CHANGE",sortDirection:e,selectedColumn:t,clearSelectedOnSort:d&&c&&!g||s||p})},v=t=>e.createElement(Q,{sortActive:t,sortDirection:r}),S=()=>e.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),O=!(!t.sortable||!x(a.id,t.id)),k=!t.sortable||n,P=t.sortable&&!i&&!t.right,D=t.sortable&&!i&&t.right,F=t.sortable&&i&&!t.right,H=t.sortable&&i&&t.right;return e.createElement(Z,{"data-column-id":t.id,className:"rdt_TableCol",headCell:!0,allowOverflow:t.allowOverflow,button:t.button,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,center:t.center,width:t.width,draggable:t.reorder,isDragging:x(t.id,o),onDragStart:b,onDragOver:w,onDragEnd:m,onDragEnter:h,onDragLeave:f},t.name&&e.createElement(te,{"data-column-id":t.id,"data-sort-id":t.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:k?void 0:y,onKeyPress:k?void 0:e=>{"Enter"===e.key&&y()},sortActive:!k&&O,disabled:k},!k&&H&&S(),!k&&D&&v(O),"string"==typeof t.name?e.createElement(ne,{title:C?t.name:void 0,ref:E,"data-column-id":t.id},t.name):t.name,!k&&F&&S(),!k&&P&&v(O)))}));const ae=n(D)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function le({headCell:t=!0,rowData:n,keyField:o,allSelected:a,mergeSelections:l,selectedRows:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowDisabled:d,onSelectAllRows:c}){const g=r.length>0&&!a,p=d?n.filter((e=>!d(e))):n,u=0===p.length,b=Math.min(n.length,p.length);return e.createElement(ae,{className:"rdt_TableCol",headCell:t,noPadding:!0},e.createElement(I,{name:"select-all-rows",component:i,componentOptions:s,onClick:()=>{c({type:"SELECT_ALL_ROWS",rows:p,rowCount:b,mergeSelections:l,keyField:o})},checked:a,indeterminate:g,disabled:u}))}function re(t=G.AUTO){const n="object"==typeof window,[o,a]=e.useState(!1);return e.useEffect((()=>{if(n)if("auto"!==t)a("rtl"===t);else{const e=!(!window.document||!window.document.createElement),t=document.getElementsByTagName("BODY")[0],n=document.getElementsByTagName("HTML")[0],o="rtl"===t.dir||"rtl"===n.dir;a(e&&o)}}),[t,n]),o}const ie=n.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,se=n.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,de=n.div`
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
`;function ce({contextMessage:t,contextActions:n,contextComponent:o,selectedCount:a,direction:l}){const r=re(l),i=a>0;return o?e.createElement(de,{visible:i},e.cloneElement(o,{selectedCount:a})):e.createElement(de,{visible:i,rtl:r},e.createElement(ie,null,((e,t,n)=>{if(0===t)return null;const o=1===t?e.singular:e.plural;return n?`${t} ${e.message||""} ${o}`:`${t} ${o} ${e.message||""}`})(t,a,r)),e.createElement(se,null,n))}const ge=n.div`
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
`,pe=n.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,ue=n.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,be=({title:t,actions:n=null,contextMessage:o,contextActions:a,contextComponent:l,selectedCount:r,direction:i,showMenu:s=!0})=>e.createElement(ge,{className:"rdt_TableHeader",role:"heading","aria-level":1},e.createElement(pe,null,t),n&&e.createElement(ue,null,n),s&&e.createElement(ce,{contextMessage:o,contextActions:a,contextComponent:l,direction:i,selectedCount:r}))
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
***************************************************************************** */;function we(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}const me={left:"flex-start",right:"flex-end",center:"center"},he=n.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>me[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,xe=t=>{var{align:n="right",wrapContent:o=!0}=t,a=we(t,["align","wrapContent"]);return e.createElement(he,Object.assign({align:n,wrapContent:o},a))},fe=n.div`
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
`,Re=n.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Ee=n.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ye=n.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function ve({name:t,disabled:n=!1,expanded:o=!1,expandableIcon:a,onToggled:l}){const r=o?a.expanded:a.collapsed,i=l;return e.createElement(ye,{name:t,"aria-disabled":n,onClick:i,disabled:n,"aria-label":o?"Collapse Row":"Expand Row",role:"button",type:"button"},r)}const Se=n(D)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Oe({headCell:t=!0,rowData:n,keyField:o,allExpanded:a,mergeExpansions:l,expandedRows:r,expandableIcon:i,expandableRowDisabled:s,onExpandAllRows:d}){const c=r.length>0&&!a,g=s?n.filter((e=>!s(e))):n,p=0===g.length,u=Math.min(n.length,g.length);return e.createElement(Se,{className:"rdt_TableCol",headCell:t,noPadding:!0},e.createElement(ve,{name:"expand-all-rows",expanded:c||a,expandableIcon:i,disabled:p,onToggled:()=>{d({type:"EXPAND_ALL_ROWS",rows:g,rowCount:u,mergeExpansions:l,keyField:o})}}))}const ke=n.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Pe=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t.createElement("path",{d:"M7 10l5 5 5-5z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),De=n.select`
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
`,Fe=n.div`
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
`,He=t=>{var{defaultValue:n,onChange:o}=t,a=we(t,["defaultValue","onChange"]);return e.createElement(Fe,null,e.createElement(De,Object.assign({onChange:o,defaultValue:n},a)),e.createElement(Pe,null))},$e={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,expandableRowsNoExpandAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,expandableRowsSingle:!1,clearSelectedRows:!1,clearExpandedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return t.createElement("div",null,"To add an expander pass in a component instance via ",t.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),t.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"}))),null),expanded:t.createElement((()=>t.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),t.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"}))),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:t.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:t.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:V.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1,persistExpandedOnSort:!1,persistExpandedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),t.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"}))),null),paginationIconLastPage:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}))),null),paginationIconNext:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),paginationIconPrevious:t.createElement((()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},t.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),t.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:G.AUTO,onChangePage:u,onChangeRowsPerPage:u,onRowClicked:u,onRowDoubleClicked:u,onRowExpandToggled:u,onSelectedRowsChange:u,onExpandedRowsChange:u,onSort:u,onColumnOrderChange:u,keepExpandableFirst:!1,footer:null},je={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Ie=n.nav`
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
`,Te=n.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${S`
    width: 100%;
    justify-content: space-around;
  `};
`,_e=n.span`
	flex-shrink: 1;
	user-select: none;
`,Le=n(_e)`
	margin: 0 24px;
`,Me=n(_e)`
	margin: 0 4px;
`;var Ne=e.memo((function({rowsPerPage:t,rowCount:n,currentPage:o,direction:a=$e.direction,paginationRowsPerPageOptions:l=$e.paginationRowsPerPageOptions,paginationIconLastPage:r=$e.paginationIconLastPage,paginationIconFirstPage:i=$e.paginationIconFirstPage,paginationIconNext:s=$e.paginationIconNext,paginationIconPrevious:d=$e.paginationIconPrevious,paginationComponentOptions:c=$e.paginationComponentOptions,onChangeRowsPerPage:p=$e.onChangeRowsPerPage,onChangePage:u=$e.onChangePage}){const b=(()=>{const t="object"==typeof window;function n(){return{width:t?window.innerWidth:void 0,height:t?window.innerHeight:void 0}}const[o,a]=e.useState(n);return e.useEffect((()=>{if(!t)return()=>null;function e(){a(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),o})(),w=re(a),m=b.width&&b.width>599,h=g(n,t),x=o*t,f=x-t+1,C=1===o,R=o===h,E=Object.assign(Object.assign({},je),c),y=o===h?`${f}-${n} ${E.rangeSeparatorText} ${n}`:`${f}-${x} ${E.rangeSeparatorText} ${n}`,v=e.useCallback((()=>u(o-1)),[o,u]),S=e.useCallback((()=>u(o+1)),[o,u]),O=e.useCallback((()=>u(1)),[u]),k=e.useCallback((()=>u(g(n,t))),[u,n,t]),P=e.useCallback((e=>p(Number(e.target.value),o)),[o,p]),D=l.map((t=>e.createElement("option",{key:t,value:t},t)));E.selectAllRowsItem&&D.push(e.createElement("option",{key:-1,value:n},E.selectAllRowsItemText));const F=e.createElement(He,{onChange:P,defaultValue:t,"aria-label":E.rowsPerPageText},D);return e.createElement(Ie,{className:"rdt_Pagination"},!E.noRowsPerPage&&m&&e.createElement(e.Fragment,null,e.createElement(Me,null,E.rowsPerPageText),F),m&&e.createElement(Le,null,y),e.createElement(Te,null,e.createElement(Ae,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":C,onClick:O,disabled:C,isRTL:w},i),e.createElement(Ae,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":C,onClick:v,disabled:C,isRTL:w},d),!m&&F,e.createElement(Ae,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":R,onClick:S,disabled:R,isRTL:w},s),e.createElement(Ae,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":R,onClick:k,disabled:R,isRTL:w},r)))}));const ze=(t,n)=>{const o=e.useRef(!0);e.useEffect((()=>{o.current?o.current=!1:t()}),n)};var We=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===Be}(e)}(e)};var Be="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Ge(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Ke((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ve(e,t,n){return e.concat(t).map((function(e){return Ge(e,n)}))}function Ue(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Xe(e,t){try{return t in e}catch(e){return!1}}function Ye(e,t,n){var o={};return n.isMergeableObject(e)&&Ue(e).forEach((function(t){o[t]=Ge(e[t],n)})),Ue(t).forEach((function(a){(function(e,t){return Xe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(Xe(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return Ke;var n=t.customMerge(e);return"function"==typeof n?n:Ke}(a,n)(e[a],t[a],n):o[a]=Ge(t[a],n))})),o}function Ke(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ve,n.isMergeableObject=n.isMergeableObject||We,n.cloneUnlessOtherwiseSpecified=Ge;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Ye(e,t,n):Ge(t,n)}Ke.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Ke(e,n,t)}),{})};var qe=Ke;const Je={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Qe={default:Je,light:Je,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ze(e="default",t,n="default"){return Qe[e]||(Qe[e]=qe(Qe[n],t||{})),Qe[e]=qe(Qe[e],t||{}),Qe[e]}function et(t,n,o,a){const[r,i]=e.useState((()=>c(t))),[s,d]=e.useState(""),g=e.useRef("");ze((()=>{i(c(t))}),[t]);const p=e.useCallback((e=>{var t,n,o;const{attributes:a}=e.target,l=null===(t=a.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;l&&(g.current=(null===(o=null===(n=r[h(r,l)])||void 0===n?void 0:n.id)||void 0===o?void 0:o.toString())||"",d(g.current))}),[r]),u=e.useCallback((e=>{var t;const{attributes:o}=e.target,a=null===(t=o.getNamedItem("data-column-id"))||void 0===t?void 0:t.value;if(a&&g.current&&a!==g.current){const e=h(r,g.current),t=h(r,a),o=[...r];o[e]=r[t],o[t]=r[e],i(o),n(o)}}),[n,r]),b=e.useCallback((e=>{e.preventDefault()}),[]),w=e.useCallback((e=>{e.preventDefault()}),[]),m=e.useCallback((e=>{e.preventDefault(),g.current="",d("")}),[]),x=function(e=!1){return e?l.ASC:l.DESC}(a),f=e.useMemo((()=>r[h(r,null==o?void 0:o.toString())]||{}),[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:p,handleDragEnter:u,handleDragOver:b,handleDragLeave:w,handleDragEnd:m,defaultSortDirection:x,defaultSortColumn:f}}var tt=e.memo((function(t){const{data:n=$e.data,columns:o=$e.columns,title:s=$e.title,actions:d=$e.actions,keyField:c=$e.keyField,striped:u=$e.striped,highlightOnHover:b=$e.highlightOnHover,pointerOnHover:h=$e.pointerOnHover,dense:x=$e.dense,selectableRows:C=$e.selectableRows,selectableRowsSingle:E=$e.selectableRowsSingle,expandableRowsSingle:S=$e.expandableRowsSingle,selectableRowsHighlight:O=$e.selectableRowsHighlight,selectableRowsNoSelectAll:k=$e.selectableRowsNoSelectAll,expandableRowsNoExpandAll:P=$e.expandableRowsNoExpandAll,selectableRowsVisibleOnly:F=$e.selectableRowsVisibleOnly,selectableRowSelected:H=$e.selectableRowSelected,selectableRowDisabled:$=$e.selectableRowDisabled,expandableRowDisabled:j=$e.expandableRowDisabled,selectableRowsComponent:I=$e.selectableRowsComponent,selectableRowsComponentProps:A=$e.selectableRowsComponentProps,onRowExpandToggled:T=$e.onRowExpandToggled,onSelectedRowsChange:_=$e.onSelectedRowsChange,onExpandedRowsChange:L=$e.onExpandedRowsChange,expandableIcon:M=$e.expandableIcon,onChangeRowsPerPage:N=$e.onChangeRowsPerPage,onChangePage:z=$e.onChangePage,paginationServer:W=$e.paginationServer,paginationServerOptions:B=$e.paginationServerOptions,paginationTotalRows:G=$e.paginationTotalRows,paginationDefaultPage:V=$e.paginationDefaultPage,paginationResetDefaultPage:U=$e.paginationResetDefaultPage,paginationPerPage:X=$e.paginationPerPage,paginationRowsPerPageOptions:Y=$e.paginationRowsPerPageOptions,paginationIconLastPage:K=$e.paginationIconLastPage,paginationIconFirstPage:J=$e.paginationIconFirstPage,paginationIconNext:Q=$e.paginationIconNext,paginationIconPrevious:Z=$e.paginationIconPrevious,paginationComponent:ee=$e.paginationComponent,paginationComponentOptions:te=$e.paginationComponentOptions,responsive:ne=$e.responsive,progressPending:ae=$e.progressPending,progressComponent:re=$e.progressComponent,persistTableHead:ie=$e.persistTableHead,noDataComponent:se=$e.noDataComponent,disabled:de=$e.disabled,noTableHead:ce=$e.noTableHead,noHeader:ge=$e.noHeader,fixedHeader:pe=$e.fixedHeader,fixedHeaderScrollHeight:ue=$e.fixedHeaderScrollHeight,pagination:we=$e.pagination,subHeader:me=$e.subHeader,subHeaderAlign:he=$e.subHeaderAlign,subHeaderWrap:ye=$e.subHeaderWrap,subHeaderComponent:ve=$e.subHeaderComponent,noContextMenu:Se=$e.noContextMenu,contextMessage:Pe=$e.contextMessage,contextActions:De=$e.contextActions,contextComponent:Fe=$e.contextComponent,expandableRows:He=$e.expandableRows,onRowClicked:je=$e.onRowClicked,onRowDoubleClicked:Ie=$e.onRowDoubleClicked,sortIcon:Ae=$e.sortIcon,onSort:Te=$e.onSort,sortFunction:_e=$e.sortFunction,sortServer:Le=$e.sortServer,expandableRowsComponent:Me=$e.expandableRowsComponent,expandableRowsComponentProps:We=$e.expandableRowsComponentProps,expandableRowsHideExpander:Be=$e.expandableRowsHideExpander,expandOnRowClicked:Ge=$e.expandOnRowClicked,expandOnRowDoubleClicked:Ve=$e.expandOnRowDoubleClicked,expandableRowExpanded:Ue=$e.expandableRowExpanded,expandableInheritConditionalStyles:Xe=$e.expandableInheritConditionalStyles,defaultSortFieldId:Ye=$e.defaultSortFieldId,defaultSortAsc:Ke=$e.defaultSortAsc,clearSelectedRows:Je=$e.clearSelectedRows,clearExpandedRows:Ze=$e.clearExpandedRows,conditionalRowStyles:tt=$e.conditionalRowStyles,theme:nt=$e.theme,customStyles:ot=$e.customStyles,direction:at=$e.direction,onColumnOrderChange:lt=$e.onColumnOrderChange,keepExpandableFirst:rt=$e.keepExpandableFirst,footer:it=$e.footer}=t,{tableColumns:st,draggingColumnId:dt,handleDragStart:ct,handleDragEnter:gt,handleDragOver:pt,handleDragLeave:ut,handleDragEnd:bt,defaultSortDirection:wt,defaultSortColumn:mt}=et(o,lt,Ye,Ke),[{rowsPerPage:ht,currentPage:xt,selectedRows:ft,expandedRows:Ct,allSelected:Rt,allExpanded:Et,selectedCount:yt,expandedCount:vt,selectedColumn:St,sortDirection:Ot,toggleOnSelectedRowsChange:kt,toggleOnExpandedRowsChange:Pt},Dt]=e.useReducer(f,{allSelected:!1,allExpanded:!1,selectedCount:0,expandedCount:0,selectedRows:[],expandedRows:[],selectedColumn:mt,toggleOnSelectedRowsChange:!1,toggleOnExpandedRowsChange:!1,sortDirection:wt,currentPage:V,rowsPerPage:X,selectedRowsFlag:!1,expandedRowsFlag:!1,contextMessage:$e.contextMessage}),{persistSelectedOnSort:Ft=!1,persistSelectedOnPageChange:Ht=!1,persistExpandedOnSort:$t=!1,persistExpandedOnPageChange:jt=!1}=B,It=!(!W||!Ht&&!Ft),At=!(!W||!jt&&!$t),Tt=we&&!ae&&n.length>0,_t=ee||Ne,Lt=e.useMemo((()=>((e={},t="default",n="default")=>{const o=Qe[t]?t:n;return qe({table:{style:{color:(a=Qe[o]).text.primary,backgroundColor:a.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:a.text.primary,backgroundColor:a.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:a.background.default,minHeight:"52px"}},head:{style:{color:a.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:a.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:a.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:a.context.background,fontSize:"18px",fontWeight:400,color:a.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:a.text.primary,backgroundColor:a.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:a.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:a.selected.text,backgroundColor:a.selected.default,borderBottomColor:a.background.default}},highlightOnHoverStyle:{color:a.highlightOnHover.text,backgroundColor:a.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:a.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:a.background.default},stripedStyle:{color:a.striped.text,backgroundColor:a.striped.default}},expanderRow:{style:{color:a.text.primary,backgroundColor:a.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:a.button.default,fill:a.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:a.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:a.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:a.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:a.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:a.button.default,fill:a.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:a.button.disabled,fill:a.button.disabled},"&:hover:not(:disabled)":{backgroundColor:a.button.hover},"&:focus":{outline:"none",backgroundColor:a.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:a.text.primary,backgroundColor:a.background.default}}},e);var a})(ot,nt)),[ot,nt]),Mt=e.useMemo((()=>Object.assign({},"auto"!==at&&{dir:at})),[at]),Nt=e.useMemo((()=>{if(Le)return n;if((null==St?void 0:St.sortFunction)&&"function"==typeof St.sortFunction){const e=St.sortFunction,t=Ot===l.ASC?e:(t,n)=>-1*e(t,n);return[...n].sort(t)}return function(e,t,n,o){return t?o&&"function"==typeof o?o(e.slice(0),t,n):e.slice(0).sort(((e,o)=>{let a,l;if("string"==typeof t?(a=i(e,t),l=i(o,t)):(a=t(e),l=t(o)),"asc"===n){if(a<l)return-1;if(a>l)return 1}if("desc"===n){if(a>l)return-1;if(a<l)return 1}return 0})):e}(n,null==St?void 0:St.selector,Ot,_e)}),[Le,St,Ot,n,_e]),zt=e.useMemo((()=>{if(we&&!W){const e=xt*ht,t=e-ht;return Nt.slice(t,e)}return Nt}),[xt,we,W,ht,Nt]),Wt=e.useCallback((e=>{Dt(e)}),[]),Bt=e.useCallback((e=>{Dt(e)}),[]),Gt=e.useCallback((e=>{Dt(e)}),[]),Vt=e.useCallback((e=>{Dt(e)}),[]),Ut=e.useCallback((e=>{Dt(e)}),[]),Xt=e.useCallback(((e,t)=>je(e,t)),[je]),Yt=e.useCallback(((e,t)=>Ie(e,t)),[Ie]),Kt=e.useCallback((e=>Dt({type:"CHANGE_PAGE",page:e,paginationServer:W,visibleOnly:F,persistSelectedOnPageChange:Ht})),[W,Ht,F]),qt=e.useCallback((e=>{const t=g(G||zt.length,e),n=p(xt,t);W||Kt(n),Dt({type:"CHANGE_ROWS_PER_PAGE",page:n,rowsPerPage:e})}),[xt,Kt,W,G,zt.length]);if(we&&!W&&Nt.length>0&&0===zt.length){const e=g(Nt.length,ht),t=p(xt,e);Kt(t)}ze((()=>{_({allSelected:Rt,selectedCount:yt,selectedRows:ft})}),[kt]),ze((()=>{L({allExpanded:Et,expandedCount:vt,expandedRows:Ct})}),[Pt]),ze((()=>{Te(St,Ot)}),[St,Ot]),ze((()=>{z(xt,G||Nt.length)}),[xt]),ze((()=>{N(ht,xt)}),[ht]),ze((()=>{Kt(V)}),[V,U]),ze((()=>{if(we&&W&&G>0){const e=g(G,ht),t=p(xt,e);xt!==t&&Kt(t)}}),[G]),e.useEffect((()=>{Dt({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Je})}),[E,Je]),e.useEffect((()=>{Dt({type:"CLEAR_EXPANDED_ROWS",expandedRowsFlag:Ze})}),[S,Ze]),e.useEffect((()=>{if(!H)return;const e=Nt.filter((e=>H(e))),t=E?e.slice(0,1):e;Dt({type:"SELECT_MULTIPLE_ROWS",keyField:c,selectedRows:t,totalRows:Nt.length,mergeSelections:It})}),[n,H]),e.useEffect((()=>{if(!Ue)return;const e=Nt.filter((e=>Ue(e))),t=S?e.slice(0,1):e;Dt({type:"EXPAND_MULTIPLE_ROWS",keyField:c,expandedRows:t,totalRows:Nt.length,mergeExpansions:At})}),[n,Ue]);const Jt=F?zt:Nt,Qt=jt||S||P,Zt=C&&(Ht||E||k?e.createElement(D,{style:{flex:"0 0 48px"}}):e.createElement(le,{allSelected:Rt,selectedRows:ft,selectableRowsComponent:I,selectableRowsComponentProps:A,selectableRowDisabled:$,rowData:Jt,keyField:c,mergeSelections:It,onSelectAllRows:Bt})),en=He&&(Qt?e.createElement(D,{style:{flex:"0 0 48px"}}):e.createElement(Oe,{allExpanded:Et,expandedRows:Ct,rowData:Jt,keyField:c,mergeExpansions:At,onExpandAllRows:Gt,expandableIcon:M,expandableRowDisabled:j}));return e.createElement(a,{theme:Lt},!ge&&(!!s||!!d)&&e.createElement(be,{title:s,actions:d,showMenu:!Se,selectedCount:yt,direction:at,contextActions:De,contextComponent:Fe,contextMessage:Pe}),me&&e.createElement(xe,{align:he,wrapContent:ye},ve),e.createElement(Ce,Object.assign({responsive:ne,fixedHeader:pe,fixedHeaderScrollHeight:ue},Mt),e.createElement(Ee,null,ae&&!ie&&e.createElement(Re,null,re),e.createElement(R,{disabled:de,className:"rdt_Table",role:"table"},!ce&&(!!ie||Nt.length>0&&!ae)&&e.createElement(y,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:pe},e.createElement(v,{className:"rdt_TableHeadRow",role:"row",dense:x},rt?e.createElement(e.Fragment,null,en,Zt):e.createElement(e.Fragment,null,Zt,en),st.map((t=>e.createElement(oe,{key:t.id,column:t,selectedColumn:St,disabled:ae||0===Nt.length,pagination:we,paginationServer:W,persistSelectedOnSort:Ft,selectableRowsVisibleOnly:F,sortDirection:Ot,sortIcon:Ae,sortServer:Le,onSort:Wt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut,draggingColumnId:dt}))))),!Nt.length&&!ae&&e.createElement(ke,null,se),ae&&ie&&e.createElement(Re,null,re),!ae&&Nt.length>0&&e.createElement(fe,{className:"rdt_TableBody",role:"rowgroup"},zt.map(((t,n)=>{const o=r(t,c),a=function(e=""){return"number"!=typeof e&&(!e||0===e.length)}(o)?n:o,l=w(t,ft,c),i=m(t,Ct,c),s=!!(He&&Ue&&Ue(t)),d=!!(He&&j&&j(t));return e.createElement(q,{id:a,key:a,keyField:c,"data-row-id":a,columns:st,row:t,rowCount:Nt.length,rowIndex:n,selectableRows:C,expandableRows:He,expandableIcon:M,highlightOnHover:b,pointerOnHover:h,dense:x,expandOnRowClicked:Ge,expandOnRowDoubleClicked:Ve,expandableRowsComponent:Me,expandableRowsComponentProps:We,expandableRowsHideExpander:Be,defaultExpanderDisabled:d,defaultExpanded:s,expandableInheritConditionalStyles:Xe,conditionalRowStyles:tt,selected:l,expanded:i,selectableRowsHighlight:O,selectableRowsComponent:I,selectableRowsComponentProps:A,selectableRowDisabled:$,expandableRowDisabled:j,selectableRowsSingle:E,expandableRowsSingle:S,striped:u,keepExpandableFirst:rt,onRowExpandToggled:T,onRowClicked:Xt,onRowDoubleClicked:Yt,onSelectedRow:Vt,onExpandedRow:Ut,draggingColumnId:dt,onDragStart:ct,onDragOver:pt,onDragEnd:bt,onDragEnter:gt,onDragLeave:ut})})))),it&&e.createElement("div",null,it))),Tt&&e.createElement("div",null,e.createElement(_t,{onChangePage:Kt,onChangeRowsPerPage:qt,rowCount:G||Nt.length,currentPage:xt,rowsPerPage:ht,direction:at,paginationRowsPerPageOptions:Y,paginationIconLastPage:K,paginationIconFirstPage:J,paginationIconNext:Q,paginationIconPrevious:Z,paginationComponentOptions:te})))}));export{V as Alignment,G as Direction,U as Media,B as STOP_PROP_TAG,Ze as createTheme,tt as default,Qe as defaultThemes};
