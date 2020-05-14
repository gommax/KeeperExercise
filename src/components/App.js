import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map(cnote => (
        <Note key={cnote.key} title={cnote.title} content={cnote.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
