
import './App.css';

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'english' },
  de: { nativeName: 'deutch' },
  sv: { nativeName: 'swedish'}
};

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">

{Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        <p>
        <Trans i18nKey="description.part1">
        one <code>src/App.js</code>
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
        <h1>{t('description.part3')}</h1>
      </header>
    </div>
  );
}

export default App;
