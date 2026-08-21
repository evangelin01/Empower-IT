import "../styles/Faculty.css";
function Faculty() {
  return (
    <section id="faculty" className="faculty">

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="faculty-header">
        <h1>Our Faculty</h1>

        <p>
          Meet the dedicated faculty members of the
          Department of Information Technology.
        </p>
      </div>


      {/* =====================================
          HOD SECTION
      ===================================== */}

      <div className="hod-section">

        <h2>Head of the Department</h2>

        <div className="hod-card">

          <div className="image-placeholder hod-image">
            👤
            <span>HOD Photo</span>
          </div>

          <div className="faculty-info">

            <h3> R. Sujitha</h3>

            <p className="designation">
              Head of the Department
            </p>

            <p>
              Department of Information Technology
            </p>

            <p className="experience">
              Experience: Years
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          STAFF SECTION
      ===================================== */}

      <div className="staff-section">

        <h2>Faculty Members</h2>

        <div className="staff-container">


          {/* STAFF 1 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>Geethanjali</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>


          {/* STAFF 2 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>M. Vetriselvan</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>


          {/* STAFF 3 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>Jenifer</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>


          {/* STAFF 4 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>P. Sujitha</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>


          {/* STAFF 5 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>Jenifa</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>

          {/* STAFF 6 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>Ahamed BulBul</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>

          {/* STAFF 7 */}

          <div className="faculty-card">

            <div className="image-placeholder">
              👤
              <span>Staff Photo</span>
            </div>

            <div className="faculty-info">

              <h3>Yogeswari</h3>

              <p className="designation">
                Assistant Professor
              </p>

              <p className="experience">
                Experience: Years
              </p>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Faculty;