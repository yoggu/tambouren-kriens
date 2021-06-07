import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Über uns</title>
      </Head>
      <div className="prose mx-auto">
        <h1>Über uns</h1>
        <div>
          <img className="max-h-[500px]" src="/img/ueber-uns.jpg" />
        </div>
        <h2>Gründung</h2>
        <p>
          Seit Jahrzehnten wurde in verschiedenen Tambourengruppen bei der
          Harmoniemusik, der Feldmusik, dem Jugendblasorchester, den Happy
          Drummers sowie der Musikschule Kriens getrommelt. Die Rädäpläm Kriens
          starteten im Jahre 1997 mit dem Projekt „Tambouren Gemeinsam Besser“
          (TaGeBe). Hier handelt es sich um den Zusammenschluss der 5 erwähnten
          Tambouren-Gruppierungen in Kriens. Das zweijährige Projekt „TaGeBe“
          hatte zum Ziel, gemeinsam die Synergien der Vereine zu nutzen, dies in
          bezug auf Leitung, Weiterbildung, Repertoire sowie Ausbildung der
          Jungtambouren. Nach erfolgreichem Projekt-Abschluss entstand der Name
          Rädäpläm Kriens, unter welchem wir seit 1999 aktiv sind.
        </p>
        <h2>Ziel</h2>
        <p>
          Rädäpläm Kriens sind heute bestrebt, das Trommelspiel in Kriens zu
          fördern, die Fasnacht aktiv mitzugestalten, an Wettspiele teilzunehmen
          und diversen Anlässen allein oder zusammen mit den Krienser Musikkorps
          zu bestreiten. Das Spezielle an Rädäpläm ist, dass die einzelnen
          Tambouren weiterhin Mitglied in einem der drei Krienser Musikkorps
          sind. Zudem wurde eine Marschtambourengruppe für Tambouren geschaffen,
          welche weniger Probenaufwand und Zeit in das Trommelspiel investieren
          möchten.
        </p>
        <h2>Repertoire</h2>
        <p>
          Das Repertoire umfasst eine Vielfalt an Stücken aus den
          verschiedensten Stilrichtungen. Unser Ziel ist es, ein attraktives
          Repertoire zu pflegen und auch technisch anspruchsvolle Stücke zu
          spielen. So gehören reine Marsch- und Trommelkompositionen,
          mehrstimmige Rhythmus-Stücke oder Show-Stücke à la Stomp (mit Besen,
          Wöschbrätt, Küchenartikel, Clown-Hämmer, Holz-Sticks, usw.) zu unserem
          Repertoire.
        </p>
        <h2>Anlässe</h2>
        <p>
          Unser Jahresprogramm beinhaltet die Auftritte an der Fasnacht, bei
          Wettspielen sowie an den Jahreskonzerten der drei Krienser Musikkorps.
          Ausserdem gehören Ständli, Quartierfeste, Firmenjubiläen, Musikfeste
          oder sonstige Anlässe.
        </p>
      </div>
    </>
  );
};

export default About;
