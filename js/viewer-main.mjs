const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('viewer', '', 'js/logger-B17mfx2H.chunk.mjs'),window.OC.filePath('viewer', '', 'css/logger-B6WZzrWi.chunk.css'),window.OC.filePath('viewer', '', 'js/NcActionLink-Dlg2N35F.chunk.mjs'),window.OC.filePath('viewer', '', 'js/actionText-fFcUPi2g-BuX-Hse9.chunk.mjs'),window.OC.filePath('viewer', '', 'css/NcActionLink-CRpLQTQ1.chunk.css'),window.OC.filePath('viewer', '', 'js/NcActionButton-DKptWG_j.chunk.mjs'),window.OC.filePath('viewer', '', 'css/NcActionButton-1r3w9zkv.chunk.css'),window.OC.filePath('viewer', '', 'css/index-vVhCG86e.chunk.css')])))=>i.map(i=>d[i]);
import{i as z,a as A,b as O,_ as P,c as E,n as d,g as F,d as B,e as D,f as T,h as q,j as N,p as $,k as R,l as G,m as K,o as W,q as j,r as s,s as f,u as w,t as v,v as x,w as g,x as U,V as p,y as Z,z as Y,A as J}from"./logger-B17mfx2H.chunk.mjs";const Q={computed:{isFullscreen(){return z.value}}},X={computed:{isMobile(){return A.value}}};function ee(e){const i=typeof e?.shareAttributes=="string"?JSON.parse(e.shareAttributes||"[]"):e?.shareAttributes;return i&&i.length>0?i.find(({scope:n,key:l})=>n==="permissions"&&l==="download")?.value!==!1:!0}async function te(){const e=await ie();if(!e)return{key:"basename",asc:!0};const i={mtime:"lastmod"}[e.sorting_mode]||e.sorting_mode||"basename",n=e.sorting_direction==="asc"||!e.sorting_direction;return{key:i,asc:n}}async function ie(){if(O())return null;const e=P("apps/files/api/v1/views");return await E.get(e).then(i=>i.data.data?.files).catch(()=>null)}const C=function(e){const i=new AbortController;return{request:async function(n,l){return e(n,{...l,signal:i.signal})},cancel:()=>i.abort()}},ne={name:"Error",props:{name:{type:String,default:""}}};var se=function(){var e=this,i=e._self._c;return i("div",{attrs:{id:"emptycontent"}},[i("div",{staticClass:"icon-error"}),i("h2",[e._t("default",function(){return[e._v(e._s(e.t("viewer","Error loading {name}",{name:e.name})))]})],2)])},re=[],le=d(ne,se,re,!1,null,"6a8e09db");const ae=le.exports;function u(e,i,n){const l={mime:i,modal:n,failed:!1,loaded:!1,davPath:F(e),source:e.source??F(e)};return Object.assign({},e,l)}async function oe(e,i={}){return(await B.getDirectoryContents(e,Object.assign({data:`<?xml version="1.0"?>
			<d:propfind ${D()}>
				<d:prop>
					<oc:tags />
					${T()}
				</d:prop>
			</d:propfind>`,details:!0},i))).data.map(q)}const de={computed:{previewPath(){return this.getPreviewIfAny({fileid:this.fileid,filename:this.filename,previewUrl:this.previewUrl,hasPreview:this.hasPreview,davPath:this.davPath,etag:this.$attrs.etag})},davPath(){return F({filename:this.filename,basename:this.basename})}},methods:{getPreviewIfAny(e){return N(e)}}};var m={exports:{}},ce=$.platform==="win32",he=/^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/,_={};function ue(e){return he.exec(e).slice(1)}_.parse=function(e){if(typeof e!="string")throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var i=ue(e);if(!i||i.length!==5)throw new TypeError("Invalid path '"+e+"'");return{root:i[1],dir:i[0]===i[1]?i[0]:i[0].slice(0,-1),base:i[2],ext:i[4],name:i[3]}};var me=/^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/,y={};function pe(e){return me.exec(e).slice(1)}y.parse=function(e){if(typeof e!="string")throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var i=pe(e);if(!i||i.length!==5)throw new TypeError("Invalid path '"+e+"'");return{root:i[1],dir:i[0].slice(0,-1),base:i[2],ext:i[4],name:i[3]}},ce?m.exports=_.parse:m.exports=y.parse,m.exports.posix=y.parse,m.exports.win32=_.parse;var fe=m.exports;const S=R(fe),ve={inheritAttrs:!1,mixins:[de],props:{active:{type:Boolean,default:!1},basename:{type:String,required:!0},filename:{type:String,required:!0},source:{type:String,default:void 0},previewUrl:{type:String,default:void 0},hasPreview:{type:Boolean,default:!1},fileid:{type:[Number,String],required:!1},fileList:{type:Array,default:()=>[]},mime:{type:String,required:!0},canSwipe:{type:Boolean,default:!0},canZoom:{type:Boolean,default:!1},loaded:{type:Boolean,default:!1},isSidebarShown:{type:Boolean,default:!1},isFullScreen:{type:Boolean,default:!1},metadataFilesLivePhoto:{type:Number,default:void 0}},data(){return{height:null,width:null,naturalHeight:null,naturalWidth:null,isLoaded:!1}},computed:{name(){return S(this.basename).name},ext(){return S(this.basename).ext},src(){return this.source??this.davPath}},watch:{active(e,i){e===!0&&i===!1&&this.isLoaded&&this.doneLoading()},isSidebarShown(){setTimeout(this.updateHeightWidth,200)}},mounted(){this.$el.addEventListener("error",e=>{console.error("Error loading",this.filename,e),this.$emit("error",e)}),window.addEventListener("resize",G(()=>{this.updateHeightWidth()},100))},methods:{doneLoading(){this.$emit("update:loaded",!0),this.isLoaded=!0},updateHeightWidth(){const e=this.$parent.$el.querySelector(".modal-wrapper");if(e&&this.naturalHeight>0&&this.naturalWidth>0){const i=e.querySelector(".modal-container"),n=i.clientHeight,l=i.clientWidth,r=n/this.naturalHeight,o=l/this.naturalWidth;r<o&&r<1?(this.height=n,this.width=Math.round(this.naturalWidth/this.naturalHeight*n)):r>o&&o<1?(this.width=l,this.height=Math.round(this.naturalHeight/this.naturalWidth*l)):(this.height=this.naturalHeight,this.width=this.naturalWidth)}else this.height=this.naturalHeight,this.width=this.naturalWidth},enableSwipe(){this.$emit("update:canSwipe",!0)},disableSwipe(){this.$emit("update:canSwipe",!1)},toggleFullScreen(){this.isFullScreen?document.exitFullscreen():this.$el.requestFullscreen()}}},we={name:"DeleteIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ge=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon delete-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},ye=[],be=d(we,ge,ye,!1,null,null);const Fe=be.exports,_e={name:"DownloadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var xe=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon download-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Ce=[],Se=d(_e,xe,Ce,!1,null,null);const Le=Se.exports,Ee={name:"FullscreenIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ke=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Ve=[],He=d(Ee,ke,Ve,!1,null,null);const Me=He.exports,Ie={name:"FullscreenExitIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ze=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-exit-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Ae=[],Oe=d(Ie,ze,Ae,!1,null,null);const Pe=Oe.exports,Be={name:"PencilIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var De=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon pencil-icon",attrs:{"aria-hidden":e.title?null:!0,"aria-label":e.title,role:"img"},on:{click:function(n){return e.$emit("click",n)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},Te=[],qe=d(Be,De,Te,!1,null,null);const Ne=qe.exports,$e=()=>v(()=>import("./logger-B17mfx2H.chunk.mjs").then(e=>e.bi),__vite__mapDeps([0,1]),import.meta.url),Re=()=>v(()=>import("./NcActionLink-Dlg2N35F.chunk.mjs"),__vite__mapDeps([2,3,0,1,4]),import.meta.url),Ge=()=>v(()=>import("./NcActionButton-DKptWG_j.chunk.mjs").then(e=>e.a),__vite__mapDeps([5,0,1,3,6]),import.meta.url),Ke={name:"Viewer",components:{Delete:Fe,Download:Le,Error:ae,Fullscreen:Me,FullscreenExit:Pe,NcActionButton:Ge,NcActionLink:Re,NcModal:$e,Pencil:Ne},filters:{uniqueKey(e){return""+e.fileid+e.source}},mixins:[Q,X],data(){return{Viewer:OCA.Viewer,Sidebar:null,handlers:OCA.Viewer.availableHandlers,components:{},mimeGroups:{},registeredHandlers:{},currentIndex:0,previousFile:{},currentFile:{},comparisonFile:null,nextFile:{},fileList:[],sortingConfig:null,isLoaded:!1,initiated:!1,editing:!1,cancelRequestFile:()=>{},cancelRequestFolder:()=>{},sidebarPosition:0,isSidebarShown:!1,isFullscreenMode:!1,canSwipe:!0,isStandalone:!1,theme:null,lightBackdrop:null,root:K,handlerId:"",trapElements:[]}},computed:{downloadPath(){return this.currentFile.source??this.currentFile.davPath},hasPrevious(){return this.fileList.length>1&&(this.canLoop||!this.isStartOfList)},hasNext(){return this.fileList.length>1&&(this.canLoop||!this.isEndOfList)},file(){return this.Viewer.file},fileInfo(){return this.Viewer.fileInfo},comparisonFileInfo(){return this.Viewer.compareFileInfo},files(){return this.Viewer.files},enableSidebar(){return this.Viewer.enableSidebar},el(){return this.Viewer.el},loadMore(){return this.Viewer.loadMore},canLoop(){return this.Viewer.canLoop},isStartOfList(){return this.currentIndex===0},isEndOfList(){return this.currentIndex===this.fileList.length-1},isImage(){return["image/jpeg","image/png","image/webp"].includes(this.currentFile?.mime)},sidebarFile(){return this.Sidebar&&this.Sidebar.file},sidebarOpenFilePath(){try{return this.currentFile?.davPath?.split(W)[1]?.split("/")?.map(decodeURIComponent)?.join("/")}catch{return!1}},canDelete(){return this.currentFile?.permissions?.includes("D")},canDownload(){return this.comparisonFile?!1:this.currentFile&&ee(this.currentFile)},canEdit(){return!this.isMobile&&this.canDownload&&this.currentFile?.permissions?.includes("W")&&this.isImage&&!this.comparisonFile&&(j("core","config",[])["enable_non-accessible_features"]??!0)},modalClass(){return{"icon-loading":!this.currentFile.loaded&&!this.currentFile.failed,"theme--undefined":this.theme===null,"theme--dark":this.theme==="dark","theme--light":this.theme==="light","theme--default":this.theme==="default","image--fullscreen":this.isImage&&this.isFullscreenMode}},showComparison(){return!this.isMobile},contentClass(){return{"viewer--split":this.comparisonFile}},isSameFile(){return(e=null,i=null)=>!!(i&&i===this.currentFile.path&&!this.currentFile.source||e&&e.fileid===this.currentFile.fileid&&e.mtime&&e.mtime===this.currentFile.mtime&&e.source&&e.source===this.currentFile.source)}},watch:{el(e){s.info(e),this.$nextTick(()=>{const i=document.getElementById("viewer");if(e){const n=document.querySelector(e);n?n.appendChild(i):s.warn("Could not find element ",{element:e})}else document.body.appendChild(i)})},file(e){e&&e.trim()!==""?(s.info("Opening viewer for file ",{path:e}),this.openFile(e,OCA.Viewer.overrideHandlerId)):this.cleanup()},fileInfo(e){e?(s.info("Opening viewer for fileInfo ",{fileInfo:e}),this.openFileInfo(e,OCA.Viewer.overrideHandlerId)):this.cleanup()},comparisonFileInfo(e){e?(s.info("Opening viewer for comparisonFileInfo ",{fileInfo:e}),this.compareFile(e)):this.cleanup()},files(e){const i=e.findIndex(n=>n.filename===this.currentFile.filename);i>-1&&(this.currentIndex=i,s.debug("The files list changed, new current file index is "+i)),this.fileList=e},async isEndOfList(e){if(!(!e||this.el)&&this.loadMore&&typeof this.loadMore=="function"){s.debug("Fetching additional files...");const i=await this.loadMore();Array.isArray(i)&&i.length>0&&this.fileList.push(...i)}}},beforeMount(){this.isStandalone=window.OCP?.Files===void 0,this.isStandalone&&s.info("No OCP.Files app found, viewer is now in standalone mode"),document.addEventListener("DOMContentLoaded",()=>{this.handlers.forEach(e=>{this.registerHandler(e)}),this.handlers.forEach(e=>{this.registerHandlerAlias(e)}),this.isLoaded=!0,OCA?.Files?.Sidebar&&(this.Sidebar=OCA.Files.Sidebar.state),s.info(`${this.handlers.length} viewer handlers registered`,{handlers:this.handlers})}),window.addEventListener("resize",this.onResize)},mounted(){f("files:sidebar:opened",this.handleAppSidebarOpen),f("files:sidebar:closed",this.handleAppSidebarClose),f("files:node:updated",this.handleFileUpdated),f("viewer:trapElements:changed",this.handleTrapElementsChange),window.addEventListener("keydown",this.keyboardDeleteFile),window.addEventListener("keydown",this.keyboardDownloadFile),window.addEventListener("keydown",this.keyboardEditFile),this.addFullscreenEventListeners()},beforeDestroy(){window.removeEventListener("resize",this.onResize)},destroyed(){w("files:sidebar:opened",this.handleAppSidebarOpen),w("files:sidebar:closed",this.handleAppSidebarClose),w("viewer:trapElements:changed",this.handleTrapElementsChange),window.removeEventListener("keydown",this.keyboardDeleteFile),window.removeEventListener("keydown",this.keyboardDownloadFile),window.removeEventListener("keydown",this.keyboardEditFile),this.removeFullscreenEventListeners()},methods:{preventContextMenu(e){this.canDownload||e.preventDefault()},async beforeOpen(){this.initiated=!0,OCA?.Files?.Sidebar?.setFullScreenMode&&OCA.Files.Sidebar.setFullScreenMode(!0),this.sortingConfig=await te(),window.loadRoboto&&(s.debug("⚠️ Loading roboto font for visual regression tests"),v(()=>Promise.resolve({}),__vite__mapDeps([7]),import.meta.url),delete window.loadRoboto)},async openFile(e,i=null){if(await this.beforeOpen(),this.cancelRequestFile(),this.isSameFile(null,e))return;const{request:n,cancel:l}=C(Y);this.cancelRequestFile=l;const[,r]=x(e);this.el||(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden");const o=document.getElementsByTagName("head")[0].getElementsByTagName("title")[0];o&&!o.dataset.old&&(o.dataset.old=document.title,this.updateTitle(r));try{const a=await n(e);console.debug("File info for "+e+" fetched",a),await this.openFileInfo(a,i)}catch(a){a?.response?.status===404?(s.error("The file no longer exists, error: ",{error:a}),g(t("viewer","This file no longer exists")),this.close()):console.error("Could not open file "+e,a)}},async openFileInfo(e,i=null){if(this.beforeOpen(),this.cancelRequestFolder(),this.isSameFile(e))return;const n=e.mime,l=n.split("/")[0];let r;if(i!==null&&(r=Object.values(this.registeredHandlers).find(h=>h.id===i)??r),r||(r=this.registeredHandlers[n]??this.registeredHandlers[l]),!r){s.error("The following file could not be displayed",{fileInfo:e}),g(t("viewer","There is no plugin available to display this file type")),this.close();return}this.theme=r.theme??"dark";const o=window.getComputedStyle(document.body).getPropertyValue("--background-invert-if-dark")!=="invert(100%)";this.lightBackdrop=r.theme==="light"||r.theme==="default"&&o,this.handlerId=r.id;const a=this.mimeGroups[n];if(this.files&&this.files.length>0)s.debug("A files list have been provided. No folder content will be fetched."),this.fileList=this.files,this.currentIndex=this.fileList.findIndex(h=>h.filename===e.filename);else if(a&&this.el===null){const h=this.mimeGroups[a]?this.mimeGroups[a]:[n],{request:k,cancel:V}=C(oe);this.cancelRequestFolder=V;const[H]=x(e.filename),M=(await k(H)).filter(c=>c.mime&&h.indexOf(c.mime)!==-1);this.fileList=M.sort((c,I)=>U(c,I,this.sortingConfig.key,this.sortingConfig.asc)),this.currentIndex=this.fileList.findIndex(c=>c.filename===e.filename)}else this.currentIndex=0,this.fileList=[e];e=this.fileList[this.currentIndex]??e,this.currentFile=new u(e,n,r.component),this.comparisonFile=null,this.updatePreviousNext(),this.changeSidebar()},openFileFromList(e){const i=e.mime;this.currentFile=new u(e,i,this.components[i]),this.changeSidebar(),this.updatePreviousNext()},async compareFile(e){this.comparisonFile=new u(e,e.mime,this.components[e.mime])},changeSidebar(){this.sidebarFile&&this.showSidebar()},updatePreviousNext(){const e=this.fileList[this.currentIndex-1],i=this.fileList[this.currentIndex+1];if(e){const n=e.mime;this.components[n]&&(this.previousFile=new u(e,n,this.components[n]))}else this.previousFile=null;if(i){const n=i.mime;this.components[n]&&(this.nextFile=new u(i,n,this.components[n]))}else this.nextFile=null},updateTitle(e){document.title=`${e} - ${OCA.Theming?.name??oc_defaults.name}`},registerHandler(e){if(e.id&&Object.values(this.registeredHandlers).findIndex(i=>i.id===e.id)>-1){s.error("The following handler is already registered",{handler:e});return}if(!e.id||e.id.trim()===""||typeof e.id!="string"){s.error("The following handler doesn't have a valid id",{handler:e});return}if(!(!(e.mimes&&Array.isArray(e.mimes))&&e.mimesAliases)){if(!(e.mimes&&Array.isArray(e.mimes))&&!e.mimesAliases){s.error("The following handler doesn't have a valid mime array",{handler:e});return}if(!e.component||typeof e.component!="object"&&typeof e.component!="function"){s.error("The following handler doesn't have a valid component",{handler:e});return}e.component.mixins=[...e?.component?.mixins??[],ve],e.mimes&&e.mimes.forEach(i=>{if(this.components[i]){s.error("The following mime is already registered",{mime:i,handler:e});return}this.registerGroups({mime:i,group:e.group}),this.components[i]=e.component,p.component(e.component.name,e.component),this.registeredHandlers[i]=e})}},registerHandlerAlias(e){e.mimesAliases&&Object.keys(e.mimesAliases).forEach(i=>{if(e.mimesAliases&&typeof e.mimesAliases!="object"){s.error("The following handler doesn't have a valid mimesAliases object",{handler:e});return}const n=e.mimesAliases[i];if(this.components[i]){s.error("The following mime is already registered",{mime:i,handler:e});return}if(!this.components[n]){s.error("The requested alias does not exists",{alias:n,mime:i,handler:e});return}this.registerGroups({mime:i,group:this.mimeGroups[n]}),this.components[i]=this.components[n],this.registeredHandlers[i]=e})},registerGroups({mime:e,group:i}){i&&(this.mimeGroups[e]=i,this.mimeGroups[i]||(this.mimeGroups[i]=[]),this.mimeGroups[i].push(e))},close(){OCA.Viewer.close(),OCA?.Files?.Sidebar&&OCA.Files.Sidebar.setFullScreenMode(!1),this.isFullscreenMode&&this.exitFullscreen()},keyboardDeleteFile(e){this.canDelete&&e.key==="Delete"&&e.ctrlKey===!0&&this.onDelete()},keyboardDownloadFile(e){if(e.key==="s"&&e.ctrlKey===!0&&(e.preventDefault(),this.canDownload)){const i=document.createElement("a");i.href=this.currentFile.davPath,i.download=this.currentFile.basename,document.body.appendChild(i),i.click(),document.body.removeChild(i)}},keyboardEditFile(e){e.key==="e"&&e.ctrlKey===!0&&(e.preventDefault(),this.canEdit&&this.onEdit())},cleanup(){this.currentFile={},this.comparisonFile=null,this.currentModal=null,this.fileList=[],this.initiated=!1,this.theme=null,this.cancelRequestFile(),this.cancelRequestFolder(),document.body.style.overflow=null,document.documentElement.style.overflow=null,this.Viewer.onClose();const e=document.getElementsByTagName("head")[0].getElementsByTagName("title")[0];e&&e.dataset.old&&(document.title=e.dataset.old,delete e.dataset.old)},previous(){const e=this.fileList[this.currentIndex];this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.fileList.length-1);const i=this.fileList[this.currentIndex];this.openFileFromList(i),this.Viewer.onPrev(i,e),this.updateTitle(this.currentFile.basename)},next(){const e=this.fileList[this.currentIndex];this.currentIndex++,this.currentIndex>this.fileList.length-1&&(this.currentIndex=0);const i=this.fileList[this.currentIndex];this.openFileFromList(i),this.Viewer.onNext(i,e),this.updateTitle(this.currentFile.basename)},comparisonFailed(){this.comparisonFile.failed=!0},previousFailed(){this.previousFile.failed=!0},currentFailed(){this.currentFile.failed=!0},nextFailed(){this.nextFile.failed=!0},async showSidebar(){this.enableSidebar&&OCA?.Files?.Sidebar&&await OCA.Files.Sidebar.open(this.sidebarOpenFilePath)},handleAppSidebarOpen(){this.isSidebarShown=!0;const e=document.querySelector("aside.app-sidebar");e&&(this.sidebarPosition=e.getBoundingClientRect().left,this.trapElements=[e])},handleAppSidebarClose(){this.isSidebarShown=!1,this.trapElements=[]},async handleFileUpdated(e){const i=this.fileList.findIndex(({fileid:n})=>n===e.fileid);e.etag=e.attributes.etag,this.fileList.splice(i,1,e),e.fileid===this.currentFile.fileid&&(this.currentFile.etag=e.attributes.etag)},onResize(){const e=document.querySelector("aside.app-sidebar");e&&(this.sidebarPosition=e.getBoundingClientRect().left)},async onDelete(){try{const e=this.currentFile.fileid,i=this.source??this.currentFile.davPath;await E.delete(i),Z("files:node:deleted",{fileid:e});const n=this.fileList.findIndex(l=>l.filename===this.currentFile.filename);this.hasPrevious||this.hasNext?(this.hasPrevious?this.previous():this.next(),this.fileList.splice(n,1)):this.close()}catch(e){console.error(e),g(e)}},onEdit(){this.editing=!0},handleTrapElementsChange(e){this.trapElements.push(e)},toggleFullScreen(){this.isFullscreenMode?this.exitFullscreen():this.requestFullscreen()},requestFullscreen(){const e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},addFullscreenEventListeners(){document.addEventListener("fullscreenchange",this.onFullscreenchange),document.addEventListener("webkitfullscreenchange",this.onFullscreenchange)},removeFullscreenEventListeners(){document.addEventListener("fullscreenchange",this.onFullscreenchange),document.addEventListener("webkitfullscreenchange",this.onFullscreenchange)},onFullscreenchange(){document.fullscreenElement===document.documentElement||document.webkitFullscreenElement===document.documentElement?this.isFullscreenMode=!0:this.isFullscreenMode=!1}}};var We=function(){var e=this,i=e._self._c;return e.el?i("div",{attrs:{id:"viewer","data-handler":e.handlerId}},[e.currentFile.failed?i("Error",{attrs:{name:e.currentFile.basename}}):i(e.currentFile.modal,e._b({key:e._f("uniqueKey")(e.currentFile),ref:"content",tag:"component",staticClass:"viewer__file viewer__file--active",attrs:{active:!0,"can-swipe":!1,"can-zoom":!1,"file-list":[e.currentFile],"is-full-screen":!1,loaded:e.currentFile.loaded,"is-sidebar-shown":!1},on:{"update:loaded":function(n){return e.$set(e.currentFile,"loaded",n)},error:e.currentFailed}},"component",e.currentFile,!1))],1):e.initiated||e.currentFile.modal?i("NcModal",{staticClass:"viewer",class:e.modalClass,style:{width:e.isSidebarShown?`${e.sidebarPosition}px`:null},attrs:{id:"viewer","additional-trap-elements":e.trapElements,"clear-view-delay":-1,"close-button-contained":!1,dark:!0,"light-backdrop":e.lightBackdrop,"data-handler":e.handlerId,"enable-slideshow":e.hasPrevious||e.hasNext,"slideshow-paused":e.editing,"enable-swipe":e.canSwipe&&!e.editing,"has-next":e.hasNext,"has-previous":e.hasPrevious,"inline-actions":e.canEdit?1:0,"spread-navigation":!0,name:e.currentFile.basename,size:"full"},on:{close:e.close,previous:e.previous,next:e.next},scopedSlots:e._u([{key:"actions",fn:function(){return[e.canEdit?i("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.onEdit},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Pencil",{attrs:{size:20}})]},proxy:!0}],null,!1,580569589)},[e._v(" "+e._s(e.t("viewer","Edit"))+" ")]):e._e(),i("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.toggleFullScreen},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isFullscreenMode?i("FullscreenExit",{attrs:{size:20}}):i("Fullscreen",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "+e._s(e.isFullscreenMode?e.t("viewer","Exit full screen"):e.t("viewer","Full screen"))+" ")]),e.enableSidebar&&e.Sidebar&&e.sidebarOpenFilePath&&!e.isSidebarShown?i("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-menu-sidebar"},on:{click:e.showSidebar}},[e._v(" "+e._s(e.t("viewer","Open sidebar"))+" ")]):e._e(),e.canDownload?i("NcActionLink",{attrs:{download:e.currentFile.basename,"close-after-click":!0,href:e.downloadPath},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Download",{attrs:{size:20}})]},proxy:!0}],null,!1,3312959228)},[e._v(" "+e._s(e.t("viewer","Download"))+" ")]):e._e(),e.canDelete?i("NcActionButton",{attrs:{"close-after-click":!0},on:{click:e.onDelete},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Delete",{attrs:{size:20}})]},proxy:!0}],null,!1,2705356561)},[e._v(" "+e._s(e.t("viewer","Delete"))+" ")]):e._e()]},proxy:!0}])},[i("div",{staticClass:"viewer__content",class:e.contentClass,on:{click:function(n){return n.target!==n.currentTarget||n.ctrlKey||n.shiftKey||n.altKey||n.metaKey?null:e.close.apply(null,arguments)},contextmenu:e.preventContextMenu}},[e.comparisonFile&&!e.comparisonFile.failed&&e.showComparison?i("div",{staticClass:"viewer__file-wrapper"},[i(e.comparisonFile.modal,e._b({key:e._f("uniqueKey")(e.comparisonFile),ref:"comparison-content",tag:"component",staticClass:"viewer__file viewer__file--active",attrs:{active:!0,"can-swipe":!1,"can-zoom":!1,editing:!1,"is-full-screen":e.isFullscreen,"is-sidebar-shown":e.isSidebarShown,loaded:e.comparisonFile.loaded},on:{"update:loaded":function(n){return e.$set(e.comparisonFile,"loaded",n)},error:e.comparisonFailed}},"component",e.comparisonFile,!1))],1):e._e(),e.previousFile?i("div",{key:e._f("uniqueKey")(e.previousFile),staticClass:"viewer__file-wrapper viewer__file-wrapper--hidden",attrs:{"aria-hidden":"true",inert:""}},[e.previousFile.failed?i("Error",{attrs:{name:e.previousFile.basename}}):i(e.previousFile.modal,e._b({ref:"previous-content",tag:"component",staticClass:"viewer__file",attrs:{"file-list":e.fileList},on:{error:e.previousFailed}},"component",e.previousFile,!1))],1):e._e(),i("div",{key:e._f("uniqueKey")(e.currentFile),staticClass:"viewer__file-wrapper"},[e.currentFile.failed?i("Error",{attrs:{name:e.currentFile.basename}}):i(e.currentFile.modal,e._b({ref:"content",tag:"component",staticClass:"viewer__file viewer__file--active",attrs:{active:!0,"can-swipe":e.canSwipe,"can-zoom":!0,editing:e.editing,"file-list":e.fileList,"is-full-screen":e.isFullscreen,"is-sidebar-shown":e.isSidebarShown,loaded:e.currentFile.loaded},on:{"update:canSwipe":function(n){e.canSwipe=n},"update:can-swipe":function(n){e.canSwipe=n},"update:editing":function(n){e.editing=n},"update:loaded":function(n){return e.$set(e.currentFile,"loaded",n)},error:e.currentFailed}},"component",e.currentFile,!1))],1),e.nextFile?i("div",{key:e._f("uniqueKey")(e.nextFile),staticClass:"viewer__file-wrapper viewer__file-wrapper--hidden",attrs:{"aria-hidden":"true",inert:""}},[e.nextFile.failed?i("Error",{attrs:{name:e.nextFile.basename}}):i(e.nextFile.modal,e._b({ref:"next-content",tag:"component",staticClass:"viewer__file",attrs:{"file-list":e.fileList},on:{error:e.nextFailed}},"component",e.nextFile,!1))],1):e._e()])]):e._e()},je=[],Ue=d(Ke,We,je,!1,null,"42db2dc9");const Ze=Ue.exports;p.mixin({methods:{t:J}}),p.prototype.OC=window.OC,p.prototype.OCA=window.OCA;const L=document.createElement("div");L.id="viewer",document.body.appendChild(L);const b=document.createElement("div");b.innerHTML='<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="plyr-airplay" viewBox="0 0 18 18"><path d="M16 1H2a1 1 0 00-1 1v10a1 1 0 001 1h3v-2H3V3h12v8h-2v2h3a1 1 0 001-1V2a1 1 0 00-1-1z"/><path d="M4 17h10l-5-6z"/></symbol><symbol id="plyr-captions-off" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd" fill-opacity=".5"/></symbol><symbol id="plyr-captions-on" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"/></symbol><symbol id="plyr-download" viewBox="0 0 18 18"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"/></symbol><symbol id="plyr-enter-fullscreen" viewBox="0 0 18 18"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/></symbol><symbol id="plyr-exit-fullscreen" viewBox="0 0 18 18"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/></symbol><symbol id="plyr-fast-forward" viewBox="0 0 18 18"><path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"/></symbol><symbol id="plyr-logo-vimeo" viewBox="0 0 18 18"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"/></symbol><symbol id="plyr-logo-youtube" viewBox="0 0 18 18"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"/></symbol><symbol id="plyr-muted" viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/></symbol><symbol id="plyr-pause" viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"/></symbol><symbol id="plyr-pip" viewBox="0 0 18 18"><path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"/><path d="M13 15H3V5h5V3H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h-2v5z"/></symbol><symbol id="plyr-play" viewBox="0 0 18 18"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"/></symbol><symbol id="plyr-restart" viewBox="0 0 18 18"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"/></symbol><symbol id="plyr-rewind" viewBox="0 0 18 18"><path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"/></symbol><symbol id="plyr-settings" viewBox="0 0 18 18"><path d="M16.135 7.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 01-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 110-6 3 3 0 010 6z"/></symbol><symbol id="plyr-volume" viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"/><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/></symbol></svg>',b.style.display="none",document.body.appendChild(b),new p({el:"#viewer",name:"ViewerRoot",render:e=>e(Ze)});
