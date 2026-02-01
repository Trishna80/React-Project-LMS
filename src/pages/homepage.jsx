import React from 'react';

const KUHomePage = () => {
  const bgImageUrl = "https://cpec.ku.edu.np/media/courses/KUSOED.JPG.jpg"; 

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  return (
    <div style={styles.wrapper}>
      {/* SECTION 1: HERO */}
      <div style={styles.heroContainer}>
        <div 
          style={{
            ...styles.backgroundOverlay,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImageUrl})`
          }} 
        />
        <main style={styles.content}>
          <h1 style={styles.universityName}>Kathmandu University</h1>
          <h2 style={styles.degreeTitle}>School of Education</h2>
          <p style={styles.description}>
            KUSOED is one of the seven Schools of Kathmandu University with a
            mission to transform education and society through educational excellence.
          </p>

          <div style={styles.buttonGroup}>
            <button style={{ ...styles.button, ...styles.loginBtn }} onClick={handleLogin}>Login</button>
            <button style={{ ...styles.button, ...styles.signupBtn }} onClick={handleSignUp}>Sign Up</button>
          </div>
        </main>
      </div>

      {/* SECTION 2: INFORMATION */}
      <section style={styles.infoSection}>
        <div style={styles.container}>
          <h3 style={styles.sectionHeading}>About Us</h3>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h4><b>👋 Introduction</b></h4>
              <p>The Kathmandu University School of Education (KUSOED) is dedicated to improving education through quality teaching, research, and community engagement.</p>
            </div>
            <div style={styles.card}>
              <h4><b>✔️ Our Vision</b></h4>
              <p>Transforming education and society by preparing skilled, innovative, and socially responsible educators and leaders.</p>
            </div>
            <div style={styles.card}>
              <h4><b>🎯 Our Mission</b></h4>
              <p>To develop competent leaders who can transform education through quality teaching, research, and community engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Column 1: Contact Details */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerTitle}>📍 Contact Details</h4>
            <p style={styles.footerText}>📌 Hattiban, Lalitpur, Nepal</p>
            <p style={styles.footerText}>☎️ +977-1-5912524</p>
            <p style={styles.footerText}>📧 <a href="mailto:admin@kusoed.edu.np" style={styles.footerLink}>admin@kusoed.edu.np</a></p>
          </div>

          {/* Column 2: Official Links */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerTitle}>🔗 Official Links</h4>
            <p style={styles.footerText}>🌐 <a href="https://soed.ku.edu.np/" target="_blank" rel="noreferrer" style={styles.footerLink}>Website</a></p>
            <p style={styles.footerText}>📄 <a href="https://soed.ku.edu.np/" target="_blank" rel="noreferrer" style={styles.footerLink}>Admission & Program Info</a></p>
            <h4 style={styles.footerTitle} className="mt-4">📧 Useful Emails</h4>
            <p style={styles.footerText}>Dean: <a href="mailto:soed_dean@ku.edu.np" style={styles.footerLink}>soed_dean@ku.edu.np</a></p>
            <p style={styles.footerText}>Alumni: <a href="mailto:alumni@kusoed.edu.np" style={styles.footerLink}>alumni@kusoed.edu.np</a></p>
          </div>

          {/* Column 3: Parent Institution */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerTitle}>🏫 Parent Institution (KU)</h4>
            <p style={styles.footerText}>📌 Dhulikhel, Kavre, Nepal</p>
            <p style={styles.footerText}>☎️ +977-11-415100 / 415200</p>
            <p style={styles.footerText}>📱 +977-9801210035</p>
            <p style={styles.footerText}>📧 <a href="mailto:info@ku.edu.np" style={styles.footerLink}>info@ku.edu.np</a></p>
          </div>
        </div>
    
      </footer>
    </div>
  );
};

const styles = {
  // ... (previous styles remain the same)
  wrapper: { fontFamily: "'Helvetica Neue', Arial, sans-serif", scrollBehavior: 'smooth' },
  heroContainer: { height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' },
  backgroundOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 },
  content: { textAlign: 'center', color: '#ffffff', padding: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' },
  universityName: { fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase' },
  degreeTitle: { fontSize: '2.8rem', margin: '0', fontWeight: '700' },
  description: { fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 30px auto' },
  buttonGroup: { display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' },
  button: { padding: '12px 45px', fontSize: '1.1rem', fontWeight: '600', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' },
  loginBtn: { backgroundColor: '#3440ed', color: 'white' },
  signupBtn: { backgroundColor: '#3440ed', color: 'white' },
  infoSection: { padding: '80px 20px', backgroundColor: '#ffffff' },
  container: { maxWidth: '1100px', margin: '0 auto', textAlign: 'center' },
  sectionHeading: { fontSize: '2.5rem', color: '#3440ed', marginBottom: '40px' },
  grid: { display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' },
  card: { flex: '1', minWidth: '280px', padding: '30px', borderRadius: '12px', backgroundColor: '#f8f9fa', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '5px solid #3440ed' },

  // FOOTER STYLES
  footer: {
    backgroundColor: '#2a3a62',
    color: '#f0f0f0',
    padding: '60px 20px 20px 20px',
    marginTop: '50px',
  },
  footerContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
  },
  footerCol: {
    flex: '1',
    minWidth: '250px',
  },
  footerTitle: {
    color: '#ffffff',
    fontSize: '1.2rem',
    marginBottom: '20px',
    borderBottom: '2px solid #3440ed',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  footerText: {
    fontSize: '0.95rem',
    lineHeight: '1.8',
    margin: '10px 0',
  },
  footerLink: {
    color: '#5dade2',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #333',
    fontSize: '0.85rem',
    opacity: '0.7',
  }
};

export default KUHomePage;