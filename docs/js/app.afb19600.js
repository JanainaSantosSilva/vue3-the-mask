(function(e){function a(a){for(var s,n,r=a[0],d=a[1],o=a[2],v=0,u=[];v<r.length;v++)n=r[v],i[n]&&u.push(i[n][0]),i[n]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(a);while(u.length)u.shift()();return l.push.apply(l,o||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],s=!0,r=1;r<t.length;r++){var d=t[r];0!==i[d]&&(s=!1)}s&&(l.splice(a--,1),e=n(n.s=t[0]))}return e}var s={},i={1:0},l=[];function n(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=s,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="./";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var c=d;l.push([3,0]),t()})({"+jeM":function(e,a,t){"use strict";var s=t("CiiB"),i=t.n(s);i.a},3:function(e,a,t){e.exports=t("QfWi")},CiiB:function(e,a,t){},IklH:function(e,a,t){},QfWi:function(e,a,t){"use strict";t.r(a);t("fcBr");var s=t("mGku"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"ui form"},[t("div",{staticClass:"ui dividing header"},[t("div",{staticClass:"ui equal width grid",staticStyle:{"align-items":"center"}},[e._m(0),e._v(" "),t("div",{staticClass:"two wide column"},[t("div",{staticClass:"switch__container"},[t("input",{directives:[{name:"model",rawName:"v-model",modelValue:e.masked, onUpdateModelValue: (newValue) => { e.masked = newValue; }, expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(a){var t=e.masked,s=a.target,i=!!s.checked;if(Array.isArray(t)){var l=null,n=e._i(t,l);s.checked?n<0&&(e.masked=t.concat([l])):n>-1&&(e.masked=t.slice(0,n).concat(t.slice(n+1)))}else e.masked=i}}}),e._v(" "),t("label",{attrs:{for:"switch-shadow"}})])]),e._v(" "),e._m(1)])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Zip",mask:"#####",value:"12345",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil Zip",mask:"#####-###",value:"87010-230",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Brazil CPF",mask:"###.###.###-##",value:"12345678901",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil CNPJ",mask:"##.###.###/####-##",value:"27.865.757/0063-05",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Phone",mask:"+1 (###) ###-####",value:"2025550134",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Brazil Phone",mask:"+55 (##) ####-####",value:"4432211266",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"DateTime",mask:"##/##/#### ##:##:##",value:"04011981 060515",placeholder:"dd/mm/yyyy hh:mm:ss",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Credit Card",mask:"#### #### #### ####",value:"4916479938940351",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Date",mask:"##/##/####",placeholder:"dd/mm/yyyy",value:"04011981",masked:e.masked}}),e._v(" "),t("field",{attrs:{label:"Time",mask:"##:##:##",placeholder:"hh:mm:ss",value:"060515",masked:e.masked}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Br Car Plate",mask:"AAA ####",value:"IVY1703",masked:e.masked,type:"text"}}),e._v(" "),t("field",{attrs:{label:"Canada Zip",mask:"S#S #S#",value:"M5P 2N7",masked:e.masked,type:"text"}})],1),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("IBAN "+e._s(e.iban))]),e._v(" "),t("the-mask",{attrs:{mask:"AA## #### #### #### #### #### ###",masked:e.masked},model:{value:e.iban,callback:function(a){e.iban=a},expression:"iban"}})],1),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("Vehicle Identification "+e._s(e.vehicle))]),e._v(" "),t("the-mask",{attrs:{mask:"XX.XX.XXXXX.X.X.XXXXXX",masked:e.masked},model:{value:e.vehicle,callback:function(a){e.vehicle=a},expression:"vehicle"}})],1)]),e._v(" "),t("h4",{staticClass:"ui dividing header"},[e._v("Dynamic Masks (Using Array)")]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"CPF/CNPJ",mask:["###.###.###-##","##.###.###/####-##"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###.###.###-##', '##.###.###/####-##']\" />")])]),e._v(" "),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Brazil 9th digit",mask:["(##) ####-####","(##) #####-####"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['(##) ####-####', '(##) #####-####']\" />")])])]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Agency",mask:["###","###-#","###-##"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###', '###-#', '###-##']\" />")])]),e._v(" "),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Account",mask:["###-#","####-#","#####-#","######-#"],masked:e.masked}})],1),e._v(" "),t("pre",[e._v("<the-mask :mask=\"['###-#', '####-#', '#####-#', '######-#']\" />")])])]),e._v(" "),t("h4",{staticClass:"ui dividing header"},[e._v("Custom Tokens (Creates token F to represent a hexadecimal [0-9A-F])")]),e._v(" "),t("div",[t("field",{attrs:{label:"Hex. Color",mask:"FFFFFF",masked:e.masked,tokens:e.hexTokens}}),e._v(" "),t("pre",[e._v('<the-mask mask="FFFFFF" :tokens="hexTokens" />')]),e._v(" "),t("pre",[e._v("hexTokens: {\n  F: {\n    pattern: /[0-9a-fA-F]/,\n    transform: v => v.toLocaleUpperCase()\n  }\n}")])],1),e._v(" "),t("h1",{attrs:{id:"tokens"}},[e._v("Tokens")]),e._v(" "),t("pre",[e._v("    '#': {pattern: /\\d/},\n    'X': {pattern: /[0-9a-zA-Z]/},\n    'S': {pattern: /[a-zA-Z]/},\n    'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},\n    'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},\n    '!': {escape: true}\n    ")]),e._v(" "),t("h1",[e._v("Try it now")]),e._v(" "),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("masked")]),e._v(" "),t("div",{staticClass:"switch__container small",staticStyle:{margin:"0"}},[t("input",{directives:[{name:"model",rawName:"v-model",modelValue:e.masked,onUpdateModelValue: (newValue) => { e.masked = newValue; },expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(a){var t=e.masked,s=a.target,i=!!s.checked;if(Array.isArray(t)){var l=null,n=e._i(t,l);s.checked?n<0&&(e.masked=t.concat([l])):n>-1&&(e.masked=t.slice(0,n).concat(t.slice(n+1)))}else e.masked=i}}}),e._v(" "),t("label",{attrs:{for:"switch-shadow"}})])]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("mask")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",modelValue:e.mask,onUpdateModelValue: (newValue) => { e.masked = newValue; },expression:"mask"}],domProps:{value:e.mask},on:{input:function(a){a.target.composing||(e.mask=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("value")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",modelValue:e.value, onUpdateModelValue: (newValue) => { e.value = newValue; },  expression:"value"}],domProps:{value:e.value},on:{input:function(a){a.target.composing||(e.value=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("placeholder")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",modelValue:e.placeholder,onUpdateModelValue: (newValue) => { e.placeholder = newValue; },expression:"placeholder"}],domProps:{value:e.placeholder},on:{input:function(a){a.target.composing||(e.placeholder=a.target.value)}}})]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("type")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.type=a.target.multiple?t:t[0]}}},[t("option",[e._v("text")]),e._v(" "),t("option",[e._v("tel")])])])]),e._v(" "),t("div",{staticClass:"field"},[t("label",[e._v("Test your input mask below")]),e._v(" "),t("the-mask",{attrs:{mask:e.mask,value:e.value,type:e.type,masked:e.masked,placeholder:e.placeholder}})],1),e._v(" "),t("pre",[e._v(e._s(e.code))]),e._v(" "),t("h2",[e._v("Directive Usage")]),e._v(" "),t("div",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"field"},[t("input",{attrs:{type:"tel",placeholder:"dd/mm/yyyy"}})]),e._v(" "),t("pre",[e._v(e._s(e.directive))]),e._v(" "),t("div",{staticClass:"ui tertiary inverted red segment"},[e._v("\n      The value returned from directive is always masked!\n    ")]),e._v(" "),t("div",{staticClass:"ui tertiary inverted orange segment"},[e._v('\n      When possible, prefer to use input type="tel" to avoid glitch on android devices\n    ')])])])},l=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"right aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("raw")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("masked")])])}],n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"inline field"},[t("label",[e._v(e._s(e.label))]),e._v(" "),t("the-mask",{attrs:{mask:e.mask,tokens:e.tokens,placeholder:e.placeholder,masked:e.masked,type:e.type||"tel"},model:{value:e.editableValue,callback:function(a){e.editableValue=a},expression:"editableValue"}}),e._v(" "),t("span",[e._v(e._s(e.editableValue))])],1)},r=[],d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("input",{directives:[{name:"mask",rawName:"v-mask",modelValue:e.config,onUpdateModelValue: (newValue) => { e.config = newValue; },expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},o=[];t("jrxT");function c(e,a){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3?arguments[3]:void 0;e=e||"",a=a||"";var i=0,l=0,n="";while(i<a.length&&l<e.length){var r=a[i],d=s[r],o=e[l];d&&!d.escape?(d.pattern.test(o)&&(n+=d.transform?d.transform(o):o,i++),l++):(d&&d.escape&&(i++,r=a[i]),t&&(n+=r),o===r&&l++,i++)}var c="";while(i<a.length&&t){r=a[i];if(s[r]){c="";break}c+=r,i++}return n+c}t("9XrY");function v(e,a,t){return a=a.sort(function(e,a){return e.length-a.length}),function(s,i){var l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;while(n<a.length){var r=a[n];n++;var d=a[n];if(!(d&&e(s,d,!0,t).length>r.length))return e(s,r,l,t)}return""}}var u=function(e,a){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3?arguments[3]:void 0;return Array.isArray(a)?v(c,a,s)(e,a,t,s):c(e,a,t,s)},m={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}};function p(e){var a=document.createEvent("Event");return a.initEvent(e,!0,!0),a}var k=function(e,a){var t=a.value;if((Array.isArray(t)||"string"===typeof t)&&(t={mask:t,tokens:m}),"INPUT"!==e.tagName.toLocaleUpperCase()){var s=e.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);e=s[0]}e.oninput=function(a){if(a.isTrusted){var s=e.selectionEnd,i=e.value[s-1];e.value=u(e.value,t.mask,!0,t.tokens);while(s<e.value.length&&e.value.charAt(s-1)!==i)s++;e===document.activeElement&&(e.setSelectionRange(s,s),setTimeout(function(){e.setSelectionRange(s,s)},0)),e.dispatchEvent(p("input"))}};var i=u(e.value,t.mask,!0,t.tokens);i!==e.value&&(e.value=i,e.dispatchEvent(p("input")))},h={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return m}}},directives:{mask:k},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},emits:['input'], computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=u(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}},f=h,_=t("ydrt"),y=Object(_["a"])(f,d,o,!1,null,null,null),g=y.exports,b={components:{TheMask:g},props:["label","mask","placeholder","masked","type","tokens","value"],data:function(){return{editableValue:this.value}}},w=b,C=(t("lyNc"),Object(_["a"])(w,n,r,!1,null,null,null)),A=C.exports,x={components:{Field:A,TheMask:g},data:function(){return{masked:!1,iban:"BR0500000000011870000713973C1",vehicle:"KNDJB723025140702",hexTokens:{F:{pattern:/[0-9a-fA-F]/,transform:function(e){return e.toLocaleUpperCase()}}},type:"text",placeholder:"test your mask here",mask:"#XSAa",value:"12TgB",directive:'<input type="tel" v-mask="\'##/##/####\'" />'}},computed:{code:function(){return'<the-mask mask="'.concat(this.mask,'" value="').concat(this.value,'" type="').concat(this.type,'" masked="').concat(this.masked,'" placeholder="').concat(this.placeholder,'"></the-mask>')}},directives:{mask:k}},X=x,F=(t("mclH"),t("+jeM"),Object(_["a"])(X,i,l,!1,null,null,null)),N=F.exports;new s["a"]({el:"#app",render:function(e){return e(N)}})},WDXN:function(e,a,t){},lyNc:function(e,a,t){"use strict";var s=t("IklH"),i=t.n(s);i.a},mclH:function(e,a,t){"use strict";var s=t("WDXN"),i=t.n(s);i.a}});
//# sourceMappingURL=app.afb19600.js.map