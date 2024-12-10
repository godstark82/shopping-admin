export default function Header(props) {
  return (
    <>
      <>
        <header className="fixed-top app-header">
          <div className="app-header-inner">
            <div className="py-2 container-fluid">
              <div className="app-header-content">
                <div className="justify-content-between align-items-center row">
                  <div className="col-auto">
                    <a
                      id="sidepanel-toggler"
                      className="d-inline-block d-xl-none sidepanel-toggler"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        role="img"
                      >
                        <title>Menu</title>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit={10}
                          strokeWidth={2}
                          d="M4 7h22M4 15h22M4 23h22"
                        />
                      </svg>
                    </a>
                  </div>
                  {/*//col*/}
                  <div className="d-sm-none search-mobile-trigger col">
                    <i className="search-mobile-trigger-icon fa-magnifying-glass fa-solid" />
                  </div>
                  {/*//col*/}
                  <div className="col-auto">
                    <a className="border rounded-circle nav-link" href="/screens/users/profile" title="Profile">
                      <span className="nav-icon">

                        <svg
                          width="2em"
                          height="2em"
                          viewBox="0 0 16 16"
                          className="m-1 bi bi-person"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg" title="Profile"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                      </span>
                    </a>
                  </div>

                  {/*//app-utilities*/}
                </div>
                {/*//row*/}
              </div>
              {/*//app-header-content*/}
            </div>
            {/*//container-fluid*/}
          </div>
          {/*//app-header-inner*/}
          <div id="app-sidepanel" className="app-sidepanel">
            <div id="sidepanel-drop" className="sidepanel-drop" />
            <div className="d-flex flex-column sidepanel-inner">
              <a href="#" id="sidepanel-close" className="d-xl-none sidepanel-close">
                ×
              </a>
              <div className="app-branding">
                <a className="app-logo" href="/">
                  <span className="logo-text">ADMIN PANEL</span>
                </a>
              </div>
              <nav id="app-nav-main" className="flex-grow-1 app-nav app-nav-main">
                <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                  <li className="nav-item">
                    <a className={props.activeItem === "overview" ? "active nav-link" : "nav-link"} href="/">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-house-door"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Overview</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={props.activeItem === "category" ? "active nav-link" : "nav-link"} href="/screens/category">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-folder"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
                          <path
                            fillRule="evenodd"
                            d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Categories</span>
                    </a>

                  </li>

                  <li className="nav-item">

                    <a className={props.activeItem === "subcategory" ? "active nav-link" : "nav-link"} href="/screens/subcategory">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-card-list"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                          />
                          <circle cx="3.5" cy="5.5" r=".5" />
                          <circle cx="3.5" cy={8} r=".5" />
                          <circle cx="3.5" cy="10.5" r=".5" />
                        </svg>
                      </span>
                      <span className="nav-link-text">SubCategories</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className={props.activeItem === "product" ? "active nav-link" : "nav-link"} href="/screens/product">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-bar-chart-line"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                          />
                        </svg>
                      </span>
                      <span className="nav-link-text">Products</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={props.activeItem === "users" ? "active nav-link" : "nav-link"} href="/screens/users">
                      <span className="nav-icon">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-question-circle"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                          />
                          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                        </svg>
                      </span>
                      <span className="nav-link-text">Users</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="app-sidepanel-footer">
                <nav className="app-nav app-nav-footer">
                  <ul className="app-menu list-unstyled footer-menu">
                    <li className="nav-item">
                      <a className={props.activeItem === "settings" ? "active nav-link" : "nav-link"} href="/screens/settings">
                        <span className="nav-icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-gear"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                            />
                          </svg>
                        </span>
                        <span className="nav-link-text">Settings</span>
                      </a>

                    </li>



                  </ul>

                </nav>
              </div>

            </div>

          </div>

        </header>

      </>

    </>
  );
}
