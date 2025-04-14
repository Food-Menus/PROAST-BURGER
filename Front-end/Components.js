document.addEventListener('DOMContentLoaded', function() {

    //******************************************************************************************//
    //***************************************navbar*********************************************//
    
        function NavbarComponent(navLocation, imgN) {
            return `
                <div class="main-navbar">
                    <div class="profile">  <div class="menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M5 5H13V19H5V5ZM19 19H15V5H19V19ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM7 12L11 8.5V15.5L7 12Z"></path></svg></div></div>
                    <div class="img">
                        <div class="img-container">
                            <div class="text-right">
                                <h2> بــرجــر </h2>
                            </div>
                            
                            <div class="image-center">
                                <img src="${imgN}" alt="شعار">
                            </div>
                            
                            <div class="text-left">
                                <h2> بروست </h2>
                            </div>
                        </div>
                    </div>
                    <div class="profile"> <a href="${navLocation}" class="user"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg></a></div>
                </div>
            `;
        }
    
        const navbarElement = document.getElementById('navbar');
        if (navbarElement) {
            const navLocation = navbarElement.getAttribute('data-location');
            const imgN = navbarElement.getAttribute('data-imgN');
            navbarElement.innerHTML = NavbarComponent(navLocation, imgN);
        }
    
    //******************************************************************************************//
    //***************************************sidebar********************************************//
    
        function SidebarComponent(about, feedback ,Profile) {
            return `
                <div class="sidebar">       
                    <h1 class="logo" href >Broast & Burger</h1>
                    <div class="sidebar-menus">
                        <a href="https://www.facebook.com/profile.php?id=61574086451614"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg> صغحة الفيسبوك </a>
                        <a href="${about}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg></ion-icon>من نحن</a>
                        <a href="${feedback}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM11 13H13V15H11V13ZM11 7H13V12H11V7Z"></path></svg>شاركنا برأيك</a>
                        <a href="${Profile}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path></svg>أدارة الموقع</a> 
                    </div>
                    <div class="menu-off">
                        <a href="#" class="menu-off" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>close</a>
                    </div>

                </div>

            `;
        }
    
        const sidebarElement = document.getElementById('sidebar');
        if (sidebarElement) {
            const about = sidebarElement.getAttribute('about');
            const feedback = sidebarElement.getAttribute('feedback');
            const Profile = sidebarElement.getAttribute('Profile');
            sidebarElement.innerHTML = SidebarComponent(about, feedback ,Profile);
    

            // Add event listeners after DOM update
            const menuToggle = document.querySelector('.menu-toggle');
            const menuClose = document.querySelector('.menu-off');
            const sidebar = document.querySelector('.sidebar');
            
            if (menuToggle && sidebar) {
                menuToggle.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                });
            }
            
            if (menuClose && sidebar) {
                menuClose.addEventListener('click', (e) => {
                    e.preventDefault();
                    sidebar.classList.remove('active');
                });
            }
        }
    
    //******************************************************************************************//
    //***************************************footer*********************************************//
    
        function FooterComponent() {
            return `
            <div class="footer__bar">
            <p>Copyright © 2025 Techno Science All rights reserved </p> 
            </div>
            `;
        }
    
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.innerHTML = FooterComponent();
        }
    
    });