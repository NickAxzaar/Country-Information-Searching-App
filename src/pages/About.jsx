import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" className="back-btn">← Back to Home</Link>
      
      <h1> About Country Info Finder</h1>
      
      <div className="country-card">
        <h2> Features</h2>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li> Search any country by name</li>
          <li> Complete information: capital, population, currency, languages, etc.</li>
          <li> Add to favorites with persistent storage</li>
          <li> Dark/Light theme toggle</li>
          <li> Fully responsive design</li>
          <li> Fast API integration with REST Countries</li>
        </ul>
        
        <h2 style={{ marginTop: '2rem' }}>Tech Stack</h2>
        <div className="details-grid">
          <div className="detail-item">
            <div className="detail-label">React</div>
            <div className="detail-value">Hooks, Context, Router</div>
            <br />
            <div className="detail-label">API</div>
            <div className="detail-value">REST Countries (Free)</div>
            <br />
            <div className="detail-label">State</div>
            <div className="detail-value">useReducer + Context</div>
            <br />
            <div className="detail-label">Storage</div>
            <div className="detail-value">localStorage</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
