const Coursework = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Coursework & Tools</h3>

      <div className="skills__box">
        {/* LEFT GROUP */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-code-alt"></i>
            <div>
              <h3 className="skills__name">OOP Concepts</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-java"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* RIGHT GROUP */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-visual-studio"></i>
            <div>
              <h3 className="skills__name">VS Code</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-git"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-github"></i>
            <div>
              <h3 className="skills__name">GitHub</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-data"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursework;
