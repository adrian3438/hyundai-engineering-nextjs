import BaseModule from './BaseModule'

const IconAlignLeft = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"/>
  <path class="ql-fill" d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"/>
  <path class="ql-fill" d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"/>
  <path class="ql-fill" d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"/>
  <rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/>
</svg>`
const IconAlignCenter = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"/>
  <path class="ql-fill" d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"/>
  <rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/>
</svg>`
const IconAlignRight = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"/>
  <path class="ql-fill" d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"/>
  <path class="ql-fill" d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"/>
  <path class="ql-fill" d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"/>
  <rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="translate(24 18) rotate(-180)"/>
</svg>`
const IconFloatFull = `<svg viewbox="0 0 18 18">
  <path class="ql-fill" d="M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z"/>
  <path class="ql-fill" d="M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z"/>
  <rect class="ql-fill" x="2" y="6" width="14" height="6" rx="1" ry="1"/>
</svg>`
const IconPencil = `<svg viewBox="0 0 18 18">
  <path class="ql-fill" d="M 12.9 2 L 11.3 3.6 L 14.8 7 L 16.3 5.5 L 12.9 2 Z M 9.3 5.5 L 2 12.2 L 2 15.5 L 5.7 15.5 L 13 8.9 L 9.3 5.5 Z"></path>
</svg>
`

import _Quill from 'quill'
const Quill = window.Quill || _Quill

const Parchment = Quill.import('parchment')

// Quill.js 2.x support
const ClassAttributor = Parchment.ClassAttributor
    ? Parchment.ClassAttributor
    : Parchment.Attributor.Class
const ImageFormatClass = new ClassAttributor('imagestyle', 'ql-resize-style')

export default class Toolbar extends BaseModule {
  static Icons = {
    left: IconAlignLeft,
    center: IconAlignCenter,
    right: IconAlignRight,
    full: IconFloatFull,
    edit: IconPencil
  }

  static Tools = {
    left: {
      apply (activeEle) {
        ImageFormatClass.add(activeEle, 'left')
      },
      isApplied (activeEle) {
        return ImageFormatClass.value(activeEle) === 'left'
      }
    },
    center: {
      apply (activeEle) {
        ImageFormatClass.add(activeEle, 'center')
      },
      isApplied (activeEle) {
        return ImageFormatClass.value(activeEle) === 'center'
      }
    },
    right: {
      apply (activeEle) {
        ImageFormatClass.add(activeEle, 'right')
      },
      isApplied (activeEle) {
        return ImageFormatClass.value(activeEle) === 'right'
      }
    },
    full: {
      apply (activeEle) {
        ImageFormatClass.add(activeEle, 'full')
      },
      isApplied (activeEle) {
        return ImageFormatClass.value(activeEle) === 'full'
      }
    },
    edit: {
      handler (evt, button, activeEle) {
        this.quill.emitter.emit('resize-edit', activeEle, this.blot)
      }
    }
  }

  onCreate () {
    // Setup Toolbar
    this.toolbar = document.createElement('div')
    this.toolbar.className = 'ql-resize-toolbar'
    this.overlay.appendChild(this.toolbar)

    // Setup Buttons
    this._addToolbarButtons()
  }

  _addToolbarButtons () {
    const Icons = this.constructor.Icons
    const Tools = this.constructor.Tools
    const buttons = []
    this.options.tools.forEach((t) => {
      const tool = Tools[t] || t
      if (tool.verify && tool.verify.call(this, this.activeEle) === false) return

      const button = document.createElement('button')
      button.type = 'button'
      buttons.push(button)
      button.innerHTML = ((tool.icon || '') + (tool.text || '')) || Icons[t]
      button.addEventListener('click', (evt) => {
        if (tool.handler && tool.handler.call(this, evt, button, this.activeEle) !== true) return

        // deselect all buttons
        buttons.forEach(button => (button.classList.remove('active')))
        if (tool.isApplied && tool.isApplied.call(this, this.activeEle)) {
          // If applied, unapply
          ImageFormatClass.remove(this.activeEle)
        } else {
          // otherwise, select button and apply
          button.classList.add('active')
          // eslint-disable-next-line
          tool.apply && tool.apply.call(this, this.activeEle)
        }

        // image may change position; redraw drag handles
        this.requestUpdate()
      })

      if (tool.isApplied && tool.isApplied.call(this, this.activeEle)) {
        // select button if previously applied
        button.classList.add('active')
      }
      this.toolbar.appendChild(button)
    })
  }
}
