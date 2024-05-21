const styles = {
  hero: {
    margin: 0,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "8rem",
    margin: "0 0 20px 0",
    fontWeight: "bold",
  },
  slogan: {
    fontSize: "2rem",
    margin: "0",
  },
};

const Hero = () => (
  <div style={styles.hero}>
    <h1 style={styles.title}>Exploring Ideas</h1>
    <p style={styles.slogan}>Innovate, Create, Elevate</p>
  </div>
);

export default Hero;
