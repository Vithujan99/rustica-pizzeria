import React from "react";
import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <div className="datenschutz-page">
      <h1>Datenschutz</h1>
      <h2>DATENSCHUTZERKLÄRUNG</h2>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
        <br />
        <br />
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich.
        <br />
        Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
        Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit
        möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
        ausdrückliche Zustimmung nicht an Dritte weitergegeben.
        <br />
        <br />
        Wir weisen darauf hin, dass die Datenübertragung im Internet z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>
      <div className="datenschutz-page-section">
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
