import Link from 'next/link'

function NavItem(props) {
  return (
      <li className="nav-item">
          <Link className={(props.activeItem) === (props.title) ? "active nav-link" : "nav-link"} href={props.href}>
              <span className="nav-icon">
                  <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className={props.icon}
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
              <span className="nav-link-text">{props.title}</span>
          </Link>

      </li>
  );
}

export default function Header(props) {
  return (
    <>
      <>
        <header className='fixed-top app-header'>
          <div className='app-header-inner'>
            <div className='py-2 container-fluid'>
              <div className='app-header-content'>
                <div className='justify-content-between align-items-center row'>
                  <div className='col-auto'>
                    <Link
                      id='sidepanel-toggler'
                      className='d-inline-block d-xl-none sidepanel-toggler'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={30}
                        height={30}
                        viewBox='0 0 30 30'
                        role='img'
                      >
                        <title>Menu</title>
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeMiterlimit={10}
                          strokeWidth={2}
                          d='M4 7h22M4 15h22M4 23h22'
                        />
                      </svg>
                    </Link>
                  </div>
                  {/*//col*/}
                  <div className='d-sm-none search-mobile-trigger col'>
                    <i className='search-mobile-trigger-icon fa-magnifying-glass fa-solid' />
                  </div>
                  {/*//col*/}
                  <div className='col-auto'>
                    <Link
                      className='border rounded-circle nav-link'
                      href='/screens/users/profile'
                      title='Profile'
                    >
                      <span className='nav-icon'>
                        <svg
                          width='2em'
                          height='2em'
                          viewBox='0 0 16 16'
                          className='m-1 bi bi-person'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                          title='Profile'
                        >
                          <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                        </svg>
                      </span>
                    </Link>
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
          <div id='app-sidepanel' className='app-sidepanel'>
            <div id='sidepanel-drop' className='sidepanel-drop' />
            <div className='d-flex flex-column sidepanel-inner'>
              <Link
                href='#'
                id='sidepanel-close'
                className='d-xl-none sidepanel-close'
              >
                ×
              </Link>
              <div className='app-branding'>
                <Link className='app-logo' href='/'>
                  <span className='logo-text'>ADMIN PANEL</span>
                </Link>
              </div>
              <nav
                id='app-nav-main'
                className='flex-grow-1 app-nav app-nav-main'
              >
                <ul
                  className='app-menu list-unstyled accordion'
                  id='menu-accordion'
                >
                  <NavItem title='Overview' activeItem={props.activeItem} href='/' icon='bi bi-house-door' />
                  <NavItem
                    title='Categories'
                    activeItem={props.activeItem}
                    href='/screens/category'
                    icon='bi bi-folder'
                  />
                  <NavItem
                    title='Orders'
                    activeItem={props.activeItem}
                    href='/screens/orders'
                    icon='bi bi-folder'
                  />
                  <NavItem
                    title='SubCategories'
                    activeItem={props.activeItem}
                    href='/screens/subcategory'
                    icon='bi bi-card-list'
                  />
                  <NavItem
                    title='Products'
                    activeItem={props.activeItem}
                    href='/screens/product'
                    icon='bi bi-bar-chart-line'
                  />
                  <NavItem
                    title='Users'
                    activeItem={props.activeItem}
                    href='/screens/users'
                    icon='bi bi-question-circle'
                  />
                </ul>
              </nav>
              <div className='app-sidepanel-footer'>
                <nav className='app-nav app-nav-footer'>
                  <ul className='app-menu list-unstyled footer-menu'>
                    <NavItem
                      title='Settings'
                      href='/screens/settings'
                      icon='bi bi-gear'
                      activeItem={props.activeItem}
                    />
                    <NavItem
                      title='Logout'
                      href='/screens/auth/login'
                      icon='bi bi-box-arrow-right'
                      activeItem={props.activeItem}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </>
    </>
  )
}
