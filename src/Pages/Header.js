import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div id="text">
            <div id="playVideoContent">
              <h1> ideas take shape</h1>
              <span>in OneNote</span>
              <div>
                <button type="button" class="btn btn-dark">
                  OneNote
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    
      <section className="text-right">
        <header>
          <p>
            Do you scribble great ideas on napkins and sticky notes? Is precise
            filing more your style? OneNote's got you covered whatever way you
            shape your thoughts. Type, write or draw with the free form feel of
            pen to paper. Search and clip from the web to picture ideas.
          </p>
        </header>
        
      </section>
    </>
  );
}

export default Header;
