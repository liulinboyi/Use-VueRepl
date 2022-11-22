## install 
```shell
yarn
```
## run
```shell
yarn dev
```
## check
Open the Browser Console

```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "count": "setup-ref"
} */
import { defineComponent as _defineComponent } from 'vue'
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "count" }

import { ref } from "vue";

const __sfc__ = /*#__PURE__*/_defineComponent({
  __name: 'Any',
  setup(__props) {

const count = ref(0);

return (_ctx,_cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createTextVNode(_toDisplayString(count.value) + " ", 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => (count.value++))
    }, "Add")
  ]))
}
}

})
__sfc__.__file = "Any.vue"
export default __sfc__
```
```css
.count {
background: pink;
}
```