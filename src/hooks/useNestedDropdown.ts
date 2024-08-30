import { useEffect } from "react";

export default function useNestedDropdown() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const Dropdown = require("bootstrap").Dropdown;

      const CLASS_NAME = "has-child-dropdown-show";

      Dropdown.prototype.toggle = (function (_original) {
        return function () {
          document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
            e.classList.remove(CLASS_NAME);
          });

          // @ts-ignore
          let dd = this._element.closest(".dropdown").parentNode.closest(".dropdown");
          for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
            dd.classList.add(CLASS_NAME);
          }

          // @ts-ignore
          return _original.call(this);
        };
      })(Dropdown.prototype.toggle);

      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (dd.classList.contains(CLASS_NAME)) {
            dd.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    }
  }, []);

  return null;
}
