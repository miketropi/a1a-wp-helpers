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
((w) => {
  'use strict';

  const tableOfContentElems = document.querySelectorAll('.wp-block-a1a-table-of-content');
  if(tableOfContentElems.length == 0) return;
  
  [...tableOfContentElems].forEach((elem, __index) => {
    let self = elem;
    let containerClass = self.dataset.containerClass;
    let contentElem = document.querySelector(containerClass);
    // let headings = contentElem.querySelectorAll('h1,h2,h3,h4,h5,h6,.heading-tof');
    let headings = contentElem.querySelectorAll('h2,h3,.heading-tof');
    
    let tableOfContentHeadings_Html = ``;
    headings.forEach((h, __h_index) => {
      if(h.classList.contains('not-in-toc')) return;
      let headingID = h.id;
      let headingKey = (headingID ? headingID : `heading_${ (Math.random() + 1).toString(36).substring(7) }`);

      // Get the tag name (h2, h3, etc) of the heading element
      let headingTag = h.tagName.toLowerCase();

      h.id = headingKey;
      tableOfContentHeadings_Html += `<li><a class="__is-${ headingTag }" href="#${ headingKey }">${ h.textContent }</a></li>`
    })

    if(!tableOfContentHeadings_Html) {
      self.innerHTML = ''
      return;
    };
    
    self.innerHTML = `<div class="__block-inner">
      <h4 class="a1a-block-heading not-in-toc">
        <span>Mục Lục</span>
        <button class="__toggle-toc">
          <span class="__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>
      </h4>
      <ul>${ tableOfContentHeadings_Html }</ul>
    </div>`;

    // Add click handler to toggle TOC
    const heading = self.querySelector('.a1a-block-heading');
    const ul = self.querySelector('ul');
    heading.addEventListener('click', () => {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    });
  })

})(window)
/* eslint-enable no-console */

// alert('1')