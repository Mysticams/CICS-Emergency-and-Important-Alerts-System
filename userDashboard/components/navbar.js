class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          padding: 0.75rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .logo {
          color: #E53E3E;
          font-weight: bold;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          background-color: #FEE2E2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E53E3E;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .notification-bell svg {
          width: 24px;
          height: 24px;
          color: #000;
          transition: transform 0.2s;
        }

        .notification-bell svg:hover {
          transform: scale(1.1);
        }

        .user-name {
          font-weight: bold;
          color: #E53E3E;
          font-size: 0.95rem;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
        }

        .mobile-menu-button svg {
          width: 28px;
          height: 28px;
          color: #E53E3E;
        }

        @media (max-width: 768px) {
          .user-name {
            display: none;
          }

          .user-avatar {
            width: 2rem;
            height: 2rem;
            font-size: 0.8rem;
          }

          .mobile-menu-button {
            display: block;
          }

          .logo span {
            display: none;
          }
        }
      </style>

      <nav>
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7"></polygon>
            <line x1="12" y1="7" x2="12" y2="14"></line>
            <circle cx="12" cy="17" r="1"></circle>
          </svg>
          <span>CICS Emergency & Important Alerts</span>
        </div>

        <div class="user-menu">
          <span class="user-name">John Doe</span>
          <div class="user-avatar">JD</div>
          <div class="notification-bell">
            <a href="alerts.html" aria-label="View alerts">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </a>
          </div>
          <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    `;

    this.shadowRoot.querySelector('#mobile-menu-button').addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('toggle-sidebar'));
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
