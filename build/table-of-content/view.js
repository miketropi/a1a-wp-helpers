/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/table-of-content/view.js ***!
  \**************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end 
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any 
 * JavaScript running in the front-end, then you should delete this file and remove 
 * the `viewScript` property from `block.json`. 
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
// console.log("Hello World! (from create-block-table-of-content block)");
(w => {
  'use strict';

  const tableOfContentElems = document.querySelectorAll('.wp-block-a1a-table-of-content');
  if (tableOfContentElems.length == 0) return;
  [...tableOfContentElems].forEach((elem, __index) => {
    let self = elem;
    let containerClass = self.dataset.containerClass;
    let contentElem = document.querySelector(containerClass);
    let headings = contentElem.querySelectorAll('h1,h2,h3,h4,h5,h6,.heading-tof');
    let tableOfContentHeadings_Html = ``;
    headings.forEach((h, __h_index) => {
      if (h.classList.contains('not-in-toc')) return;
      let headingID = h.id;
      let headingKey = headingID ? headingID : `heading_${(Math.random() + 1).toString(36).substring(7)}`;
      h.id = headingKey;
      tableOfContentHeadings_Html += `<li><a href="#${headingKey}">${h.textContent}</a></li>`;
    });
    self.innerHTML = `<div class="__block-inner">
      <h4 class="a1a-block-heading not-in-toc">Table of Contents</h4>
      <ol>${tableOfContentHeadings_Html}</ol>
    </div>`;
  });
})(window);
/* eslint-enable no-console */

// alert('1')
/******/ })()
;
//# sourceMappingURL=view.js.map