!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),s?S(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function h(e){return f=void 0,g&&o?S(e):(o=i=void 0,u)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const S=document.querySelector(".feedback-form"),j=document.querySelector('[name ="email"]'),O=document.querySelector('[name ="message"]'),T="feedback-form-state";!function(){const e=localStorage.getItem(T),t=JSON.parse(e);t&&(j.value=t.emailEl,O.value=t.textareaEl)}(),S.addEventListener("input",e(t)((function(){const e={emailEl:j.value,textareaEl:O.value};localStorage.setItem(T,JSON.stringify(e))}),500)),S.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.value||""===O.value)return alert("Всі поля мають бути заповнені!!!");const t=localStorage.getItem(T),n=JSON.parse(t);console.log(n),localStorage.removeItem(T),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.9b423a0c.js.map