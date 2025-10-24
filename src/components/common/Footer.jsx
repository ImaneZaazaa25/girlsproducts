import React from 'react';

const Footer = () => {
  // Icônes SVG
  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  return (
    <footer style={{
      background: '#F8F8F8',
      marginTop: 'auto',
      borderTop: '1px solid #F0F0F0',
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.04)'
    }}>
      <div className="elegant-container" style={{
        padding: '60px 20px 30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Section */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <div style={{ color: '#fbacc1' }}>
                <HeartIcon />
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#1A1A1A',
                margin: 0
              }}>
                Smia dial lma7al hna
              </h3>
            </div>
            <p style={{
              color: '#666666',
              fontSize: '14px',
              lineHeight: '1.7',
              margin: 0,
              maxWidth: '280px'
            }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur et eum doloribus cum quaerat molestias suscipit nesciunt sint, voluptatum iure minima, voluptates ipsum fuga hic. Excepturi optio culpa delectus magni.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Navigation
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Accueil', 'Produits', 'À Propos', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <a href="#" style={{
                    color: '#666666',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#fbacc1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#666666';
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  color: '#fbacc1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MailIcon />
                </div>
                <span style={{ color: '#666666', fontSize: '14px' }}>
                  test@test.test
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  color: '#fbacc1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <PhoneIcon />
                </div>
                <span style={{ color: '#666666', fontSize: '14px' }}>
                  +212 12 12 12 12
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  color: '#fbacc1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPinIcon />
                </div>
                <span style={{ color: '#666666', fontSize: '14px' }}>
                  Casablanca, Maroc
                </span>
              </div>
            </div>
          </div>

          </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: '#F0F0F0',
          margin: '30px 0'
        }}></div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {/* Copyright */}
          <p style={{
            color: '#999999',
            fontSize: '13px',
            margin: '0px',
             }}>
            © 2025 and we chillin'.
          </p>

          {/* Social Media Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { Icon: InstagramIcon, href: '#', label: 'Instagram' },
              { Icon: FacebookIcon, href: '#', label: 'Facebook' },
              { Icon: MailIcon, href: '#', label: 'Email' }
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: '#FAFAFA',
                  border: '1px solid #E0E0E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  color: '#666666'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fbacc1';
                  e.currentTarget.style.borderColor = '#fbacc1';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FAFAFA';
                  e.currentTarget.style.borderColor = '#E0E0E0';
                  e.currentTarget.style.color = '#666666';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;