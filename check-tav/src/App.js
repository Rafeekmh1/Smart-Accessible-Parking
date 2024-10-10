import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import AccessibilityMenu from "./AccessibilityMenu"; // Import the Accessibility Menu

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <AccessibilityMenu />
      <button onClick={toggleSidebar} className="close-btn">
        <FaTimes />
      </button>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            בדיקת מס' רכב
          </Link>
        </li>
        <li>
          <Link to="/Page1" onClick={toggleSidebar}>
            מי זכאי לתו נכה
          </Link>
        </li>
        <li>
          <Link to="/Page2" onClick={toggleSidebar}>
            חוק חניה לנכים
          </Link>
        </li>
        <li>
          <Link to="/Page3" onClick={toggleSidebar}>
            ארגוני סיוע
          </Link>
        </li>
        <li>
          <Link to="/Page4" onClick={toggleSidebar}>
            תהליך בקשה לקבלת תו נכה
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleSidebar}>
            יצירת קשר
          </Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  const [licensePlate, setLicensePlate] = useState("");
  const [results, setResults] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    setLicensePlate(e.target.value);
  };

  const ConvertToDate = (dateString) => {
    if (dateString.length === 8) {
      const year = dateString.slice(0, 4);
      const month = dateString.slice(4, 6);
      const day = dateString.slice(6, 8);
      return `${day}/${month}/${year}`;
    } else {
      console.error("Invalid dateString:", dateString);
      return "תאריך לא תקין";
    }
  };

  const checkDisabledTag = () => {
    const data = {
      resource_id: "c8b9f9c8-4612-4068-934f-d4acd2e3c06e",
      q: licensePlate,
    };

    axios
      .get("https://data.gov.il/api/3/action/datastore_search", {
        params: data,
      })
      .then((response) => {
        setResults(response.data.result.records);
      })
      .catch((error) => {
        console.error("אירעה שגיאה בעת שליפת הנתונים!", error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <button onClick={toggleSidebar} className="toggle-btn">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <img
                  src="/photo.png"
                  alt="תמונה"
                  className="additional-photo"
                />

                <h1>הזינו את מס' הרכב לבדיקה</h1>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="הזן מספר רכב"
                    value={licensePlate}
                    onChange={handleInputChange}
                  />
                  <button onClick={checkDisabledTag}>בדוק</button>
                </div>

                {results && (
                  <div className="results">
                    <h2>תוצאות:</h2>
                    {results.length > 0 ? (
                      results.map((record, index) => (
                        <div key={index} className="record">
                          <img
                            src="/green-checkmark.svg"
                            alt="סימן ביקורת ירוק"
                            className="checkmark"
                          />
                          <p>מספר רכב: {record["MISPAR RECHEV"]}</p>
                          <p>
                            תוקף תו:{" "}
                            {ConvertToDate(
                              record["TAARICH HAFAKAT TAG"].toString()
                            )}
                          </p>
                          <p>מזהה תו: {record["_id"]}</p>
                          <p>סוג תו: {record["SUG TAV"]}</p>
                        </div>
                      ))
                    ) : (
                      <p>לא נמצאו תווי נכה עבור מספר הרכב הזה.</p>
                    )}
                  </div>
                )}
              </div>
            }
          />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />

          <Route path="/contact" element={<div>עמוד יצירת קשר</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
