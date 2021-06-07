import React from "react";
import Head from "next/head";

const Education = () => {
  return (
    <>
      <Head>
        <title>Ausbildung</title>
      </Head>
      <div className="prose mx-auto">
        <h1>Ausbildung</h1>
        <div>
          <img className="max-h-[500px]" src="/img/ausbildung.jpg" />
        </div>
        <h2>Anforderungen</h2>
        <p>
          Wer sich für den Trommelunterricht anmeldet, entscheidet sich
          gleichzeitig für regelmässiges Üben. Tägliches Üben ist unerlässlich.
          Die Erfahrungen zeigen, dass es sinnvoll ist, die Übungszeit auf
          zweimal 15 bis 25 Minuten aufzuteilen.
        </p>
        <h2>Alter</h2>
        <p>Ab 3. Primarklasse</p>
        <h2>Unterrichtstag</h2>
        <p>Der Hauptunterrichtstag ist der Montagabend.</p>
        <h2>Kurskosten</h2>
        <p>CHF 450.- pro Jahr </p>
        <h2>Instrument / Lehrmittel</h2>
        <p>
          Zu Kursbeginn fallen einmalige Kosten für Schlegel, Böckli und
          Lehrmittel in der Höhe von ca. Fr. 300- an. Defekte Schlegel und
          Böckli Felle sind zu ersetzen. Das Material wird durch den
          Trommellehrer organisiert. Die Anschaffungen gehen zu Lasten des
          Schülers
        </p>
      </div>
    </>
  );
};

export default Education;
