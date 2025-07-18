import React from 'react';
import styles from '@/pages/imprint/index.module.css';

const Imprint: React.FC = () => {
  return (
    <main className={styles.imprintContent}>
      <div className={styles.impressum}>
        <br />
        <h1>Impressum</h1>
        <br />
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Kevin Müller <br />
          Christine-Teusch-Bogen 47
          <br />
          44329 Dortmund <br />
        </p>
        <br />
        <p>
          {' '}
          <strong>Vertreten durch: </strong>
          <br />
          Kevin Müller
          <br />
        </p>
        <br />
        <p>
          <strong>Kontakt:</strong> <br />
          Telefon: 0151-53962240
          <br />
          E-Mail:{' '}
          <a href="mailto:info@kevin-mueller-dev.de">
            info&#64;kevin-mueller-dev.de
          </a>
        </p>
        <br />
        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br />
          Kevin Müller <br />
          Jahnstraße 14
          <br />
          58509 Lüdenscheid <br />
        </p>
        <p>
          <strong>Haftungsausschluss: </strong>
          <br />
          <br />
          <strong>Haftung für Inhalte</strong>
          <br />
          <br />
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
          <br />
          <br />
          <strong>Haftung für Links</strong>
          <br />
          <br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <br />
          <br />
          <strong>Datenschutz</strong>
          <br />
          <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
          ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.
          <br />
        </p>
        <br />
      </div>
    </main>
  );
};

export default Imprint;
