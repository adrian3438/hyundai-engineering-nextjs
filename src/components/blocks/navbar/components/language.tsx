import { useState } from "react";

// language list
const supportLanguage = ["En", "Bn", "Es", "De"];

export default function Language() {
  const [language, setLanguage] = useState(supportLanguage[0]);

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <a
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="nav-link dropdown-item dropdown-toggle">
        {language}
      </a>

      <ul className="dropdown-menu">
        {supportLanguage.map((lang) => (
          <li className="nav-item" key={lang}>
            <button className="dropdown-item" onClick={() => setLanguage(lang)}>
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}
