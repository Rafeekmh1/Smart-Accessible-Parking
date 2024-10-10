import React from "react";
import "./Page2.css"; // Import the CSS file for styling
import AccessibilityMenu from "./AccessibilityMenu"; // Import the Accessibility Menu

function Page2() {
  return (
    <div className="Page2">
      <AccessibilityMenu />
      <h1>חוק חניה לנכים</h1>

      <section>
        <h2>חוק חניה לנכים, תשנ"ד-1993</h2>

        <h3>הגדרות ופרשנות</h3>
        <p>
          <strong>תג נכה</strong> - תג שנתנה רשות הרישוי לנכה, הנושא את שם הנכה,
          את מספר זהותו ואת מספרי הרישוי של עד שני כלי רכב מזכים.
        </p>
        <p>
          <strong>נכה</strong> - עיוור, אדם אשר רופא שהוסמך לאשר נכות על פי דין
          אישר לגביו בכתב אחת מאלה, או אדם שניתן לגביו אישור בכתב כאמור בסעיף
          1א:
          <ol>
            <li>
              שדרגת נכותו מגיעה ל-60% לפחות ותנועתו בדרכים בלי רכב עלולה לערער
              את מצב בריאותו;
            </li>
            <li>שהוא מוגבל בהליכה וזקוק לכסא גלגלים לצורך ניידותו;</li>
            <li>שהוא נכה הזקוק לרכב כאמצעי תנועה בגלל רגליו הנכות;</li>
          </ol>
        </p>
        <p>
          <strong>רכב מזכה</strong> - רכב שלגביו הוכיח הנכה, להנחת דעתה של רשות
          הרישוי, כי הוא עומד לשימושו האישי דרך קבע.
        </p>
      </section>

      <section>
        <h3>אישור נכות בידי רופא שהסמיכה רשות הרישוי</h3>
        <p>
          לא ניתן לאשר נכות על פי דין, רשאי רופא שהסמיכה רשות הרישוי לאשר כי
          מתקיים באדם האמור בפסקה (1) להגדרה "נכה".
        </p>
      </section>

      <section>
        <h3>חניה במקום שאין החניה מותרת בו</h3>
        <p>
          נכה רשאי להחנות את רכבו הנושא תג נכה (להלן - הרכב), במקום שאין החניה
          מותרת בו אם התקיימו כל אלה:
          <ol>
            <li>
              בסמוך למקום האמור, אין מקום חניה מוסדר לנכים או שהוא לא היה פנוי
              בזמן החניה;
            </li>
            <li>
              בסמוך למקום האמור לא מצוי מקום אחר שהחניה בו מותרת או שהוא לא היה
              פנוי בזמן החניה;
            </li>
            <li>
              החניה נעשית באופן שאין בה סיכון לעוברי דרך ואין היא מונעת מעבר
              חופשי להולכי רגל, לעגלות ילדים או לעגלות נכים;
            </li>
            <li>החניה אינה גורמת להפרעה ממשית לתנועה.</li>
          </ol>
        </p>
      </section>

      <section>
        <h3>סייג לרשות חניה</h3>
        <p>
          מבלי לגרוע מן האמור בסעיף 2(א)(3) ו-(4), לא יחול ההיתר שבסעיף 2 על
          חניה –
          <ol>
            <li>
              בתוך צומת או בתחום שנים-עשר מטרים ממנו, פרט לקטע שסימנה רשות
              תימרור;
            </li>
            <li>במקום כניסה לשטח המיועד לחניית כלי רכב;</li>
            <li>בתוך מעבר חציה או בתחום שנים-עשר מטרים לפניו;</li>
            <li>בנתיב שיועד לתחבורה ציבורית ובתחום תחנת אוטובוסים;</li>
            <li>בתחום שני מטרים מברז כיבוי;</li>
            <li>בצד רכב אחר העומד או חונה בצדה של הדרך;</li>
            <li>בשביל פריקה וטעינה.</li>
          </ol>
        </p>
      </section>

      <section>
        <h3>הודעת תשלום קנס בשל חניה אסורה</h3>
        <p>
          על אף האמור בכל דין, לא תימסר הודעת תשלום קנס לגבי רכב הנושא תג נכה,
          החונה בניגוד להוראות סעיפים 2 ו-3, אלא אם כן הרכב צולם באופן המעיד על
          התקיימות אחת הנסיבות האמורות.
        </p>
      </section>

      <section>
        <h3>נעילה</h3>
        <p>
          על אף האמור בסעיף 70א לפקודת התעבורה, לא ינעלו שוטר או גורר מורשה,
          גלגלי רכב הנושא תג נכה אם הרכב חונה בניגוד להוראות חוק זה, אולם רשאים
          הם להזיז את הרכב, ובמידת הצורך גם לגררו, אם אופן חנייתו מסכן עוברי דרך
          או גורם הפרעה ממשית לתנועה.
        </p>
      </section>

      <section>
        <h3>עונשין</h3>
        <p>
          אדם שאינו נכה ואינו מתלווה לנכה, שהחנה רכב הנושא תג נכה במקום שאין
          החניה מותרת בו, דינו - קנס.
        </p>
        <p>
          נכה המוסר תג נכה לאדם אחר לשם שימוש בתג האמור לחניה במקום שאין החניה
          מותרת בו, דינו - קנס.
        </p>
        <p>
          בית המשפט רשאי להורות על שלילת זכאותו של הנכה לתג הנכה לתקופה שיקבע.
        </p>
      </section>

      <section>
        <h3>פטור מתשלום בעד חניה במקום ציבורי</h3>
        <p>
          מקום ציבורי שהגישה הנגישה היחידה אליו לאדם עם מוגבלות היא דרך חניה
          במקום הציבורי הכרוכה בתשלום, תחול על המפעיל או המחזיק של המקום הציבורי
          חובה לשלם בעד חניה במקום האמור, בשל האדם עם המוגבלות.
        </p>
      </section>

      <section>
        <h3>חניה לנכים בשטח פריקה וטעינה</h3>
        <p>
          רשות תימרור מקומית תסמן מקומות חניה לכלי רכב הנושאים תג נכה, בשטח
          פריקה וטעינה, במועדים שאינם מיועדים לפריקה ולטעינה, ובלבד ששטח הפריקה
          והטעינה אינו נתיב נסיעה.
        </p>
      </section>

      <section>
        <h3>חניה לנכה סמוך למקום מגוריו</h3>
        <p>
          רשות מקומית תקצה לרכב מזכה אחד של נכה המתגורר בתחומה, הנושא תג נכה,
          מקום חניה אחד המתאים לצרכיו של הנכה, שמידותיו ייקבעו בהתחשב בתקן
          ישראלי, סמוך ככל האפשר למקום מגוריו של הנכה.
        </p>
      </section>

      <section>
        <h3>ביצוע ותקנות</h3>
        <p>שר התחבורה ממונה על חוק זה, והוא רשאי להתקין תקנות לביצועו.</p>
      </section>
    </div>
  );
}

export default Page2;
