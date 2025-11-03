class CustomSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 900; /* LOWER than navbar */
        }

        .overlay.show {
          opacity: 1;
          visibility: visible;
        }

        aside {
          background-color: #B91C1C;
          width: 16rem;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          padding-top: 5rem;
          box-shadow: 2px 0 6px rgba(0, 0, 0, 0.3);
          color: #F9FAFB;
          transform: translateX(0);
          transition: transform 0.3s ease-in-out;
          z-index: 950; /* LOWER than navbar (navbar = 1000) */
        }

        @media (max-width: 768px) {
          aside {
            transform: translateX(-100%);
          }
          aside.open {
            transform: translateX(0);
          }
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.375rem;
          color: #F9FAFB;
          text-decoration: none;
          transition: all 0.2s;
        }

        .menu-item:hover {
          background-color: #E53E3E;
          color: #FFFFFF;
        }

        .menu-item.active {
          background-color: #7F1D1D;
          color: #FFFFFF;
          font-weight: 600;
        }

        .menu-divider {
          height: 1px;
          background-color: #991B1B;
          margin: 1rem 0;
        }

        i {
          stroke: currentColor;
        }
      </style>

      <div class="overlay"></div>
      <aside id="sidebar">
        <div class="sidebar-menu">
          <a href="index.html" class="menu-item active"><i data-feather="home"></i><span>Dashboard</span></a>
          <a href="alerts.html" class="menu-item"><i data-feather="bell"></i><span>Alerts</span></a>
          <a href="sos.html" class="menu-item"><i data-feather="alert-triangle"></i><span>SOS Button</span></a>
          <a href="userAck.html" class="menu-item"><i data-feather="alert-triangle"></i><span>Acknowledgement</span></a>
          <a href="sosLogs.html" class="menu-item"><i data-feather="file-text"></i><span>SOS Logs</span></a>
          <a href="incidentReport.html" class="menu-item"><i data-feather="clipboard"></i><span>Incident Report</span></a>
          <a href="emergencyhotline.html" class="menu-item"><i data-feather="phone-call"></i><span>Emergency Hotlines</span></a>
          <a href="profile.html" class="menu-item"><i data-feather="user"></i><span>Profile</span></a>
          <div class="menu-divider"></div>
          <a href="#" class="menu-item"><i data-feather="log-out"></i><span>Logout</span></a>
        </div>
      </aside>
    `;

    const overlay = this.shadowRoot.querySelector('.overlay');
    const aside = this.shadowRoot.querySelector('aside');

    this.shadowRoot.querySelectorAll('i').forEach(icon => {
      const name = icon.getAttribute('data-feather');
      icon.outerHTML = feather.icons[name].toSvg();
    });

    window.addEventListener('toggle-sidebar', () => {
      aside.classList.toggle('open');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
      aside.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
}

customElements.define('custom-sidebar', CustomSidebar);
