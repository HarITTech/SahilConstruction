import React from "react";
import  imgUrl from "../../assets/2.jpg";
// Simple SVG Icons
const ChevronLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

const BlueprintsShowcase = () => {
  const styles = {
    main: {
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      fontFamily: "Georgia, serif",
    },
    section: {
      padding: "4rem 1rem",
    },
    container: {
      maxWidth: "72rem",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "3rem",
    },
    decorativeLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      maxWidth: "10rem",
    },
    title: {
      color: "white",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontFamily: "Georgia, serif",
      margin: "0 2rem",
      textAlign: "center",
      fontWeight: "300",
      letterSpacing: "0.05em",
    },
    gridContainer: {
      position: "relative",
    },
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "none",
      borderRadius: "50%",
      width: "3rem",
      height: "3rem",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s",
    },
    leftNav: {
      left: 0,
    },
    rightNav: {
      right: 0,
    },
    gridWrapper: {
      margin: "0 3rem",
    },
    topRow: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    bottomRow: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: "1.5rem",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    cardContentLarge: {
      aspectRatio: "3/2",
      backgroundColor: "#f9fafb",
      borderRadius: "0.5rem",
      overflow: "hidden",
      position: "relative",
    },
    cardContentSmall: {
      aspectRatio: "4/5",
      backgroundColor: "#f9fafb",
      borderRadius: "0.5rem",
      overflow: "hidden",
      position: "relative",
    },
    blueprintImage: {
      position: "absolute",
      inset: 0,
      backgroundSize: "400%",
      opacity: 0.9,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    bottomInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2rem",
      gap: "2rem",
    },
    dimensionTag: {
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      fontFamily: "monospace",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    projectName: {
      color: "white",
      fontSize: "1.125rem",
      fontWeight: "300",
    },
  };

  const handleNavClick = (direction) => {
    // placeholder - replace with real navigation / carousel logic if needed
    console.log(`Navigate ${direction}`);
  };

  // single image used across cards - swap URLs or accept props to make this reusable later


  const SectionTitle = ({ children, dark, className }) => (
    <div className={`flex justify-center items-center gap-6 ${className}`}>
      <div
        className={`h-1 flex-grow ${
          dark
            ? "bg-gradient-to-r from-transparent to-white"
            : "bg-gradient-to-r from-transparent to-[#043152]"
        }`}
      ></div>
      <h2
        className={`text-4xl md:text-5xl font-bold font-serif text-center ${
          dark ? "text-white" : "text-[#043152]"
        }`}
      >
        {children}
      </h2>
      <div
        className={`h-1 flex-grow ${
          dark
            ? "bg-gradient-to-l from-transparent to-white"
            : "bg-gradient-to-l from-transparent to-[#043152]"
        }`}
      ></div>
    </div>
  );

  return (
    <main style={styles.main}>
      <section className="py-24 bg-[#043152]">
        <div className="container mx-auto px-6">
          <div style={styles.container}>
            {/* Header with decorative lines */}

            <SectionTitle dark className="mb-16">
              Blueprints of Our Projects
            </SectionTitle>
          </div>

          {/* Blueprint Cards Grid with Navigation */}
          <div style={styles.gridContainer}>
            {/* <button
              aria-label="Previous"
              style={{ ...styles.navButton, ...styles.leftNav }}
              onClick={() => handleNavClick("left")}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
            >
              <ChevronLeft />
            </button>

            <button
              aria-label="Next"
              style={{ ...styles.navButton, ...styles.rightNav }}
              onClick={() => handleNavClick("right")}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
            >
              <ChevronRight />
            </button> */}

            <div style={styles.gridWrapper}>
              {/* Top Row */}
              <div style={styles.topRow}>
                <div style={styles.card}>
                  <div style={styles.cardContentLarge}>
                    <div
                      style={{
                        ...styles.blueprintImage,
                        backgroundImage: `url('${imgUrl}')`,
                        backgroundPosition: "10% 15%",
                      }}
                    />
                    <div style={styles.overlay} />
                  </div>
                </div>

                <div style={styles.card}>
                  <div style={styles.cardContentSmall}>
                    <div
                      style={{
                        ...styles.blueprintImage,
                        backgroundImage: `url('${imgUrl}')`,
                        backgroundPosition: "85% 15%",
                      }}
                    />
                    <div style={styles.overlay} />
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div style={styles.bottomRow}>
                <div style={styles.card}>
                  <div style={styles.cardContentSmall}>
                    <div
                      style={{
                        ...styles.blueprintImage,
                        backgroundImage: `url('${imgUrl}')`,
                        backgroundPosition: "10% 85%",
                      }}
                    />
                    <div style={styles.overlay} />
                  </div>
                </div>

                <div style={styles.card}>
                  <div style={styles.cardContentLarge}>
                    <div
                      style={{
                        ...styles.blueprintImage,
                        backgroundImage: `url('${imgUrl}')`,
                        backgroundPosition: "85% 85%",
                      }}
                    />
                    <div style={styles.overlay} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Information */}
          <div style={styles.bottomInfo}>
            <div style={styles.dimensionTag}>514 x 439</div>
            <div style={styles.projectName}>
              Bansod's Family House Blue Print
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlueprintsShowcase;
