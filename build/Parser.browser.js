var edjsParser=function(t){"use strict";function c(t){return'<div class="ce-block"><div class="ce-block__content">'.concat(t,"</div></div>")}return t.delimiter=function(){return'<div class="ce-delimiter ce-block"></div>'},t.header=function(t){var n=t.data,e=n.anchor,a=n.level,i=n.text;return c("<h".concat(a,' class="ce-header" id="').concat(e,'">').concat(i,"</h").concat(a,">"))},t.nestedList=function(t){var n=t.data,e="unordered"===n.style?"ul":"ol",a=function(t,c){var n=t.map((function(t){if(!t.content&&!t.items)return"<li>HELLO".concat(t,"</li>");var n="";return t.items&&(n=a(t.items,c)),'<li class="cdx-nested-list__item">\n                <div class="cdx-nested-list__item-body">\n                  <div class="cdx-nested-list__item-content">'.concat(t.content||"","</div>\n                  ").concat(n,"\n                </div>\n              </li>")}));return"<".concat(c,' class="cdx-nested-list cdx-block cdx-nested-list--ordered">').concat(n.join(""),"</").concat(c,">")};return c(a(n.items,e))},t.paragraph=function(t){var n=t.data,e=n.alignment||n.align||"inherit";return c('<p class="ce-paragraph cdx-block" style="text-align:'.concat(e,'">').concat(n.text,"</p>"))},t.table=function(t){var n=t.data;return c('<div class="cdx-block tc-wrap tc-wrap--readonly">\n            <div class="tc-table">\n              '.concat(n.content.map((function(t){return'<div class="tc-row">'.concat(t.map((function(t){return'<div class="tc-cell">'.concat(t,"</div>")})).join(""),"</div>")})).join(""),"\n            </div>\n          </div>"))},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
