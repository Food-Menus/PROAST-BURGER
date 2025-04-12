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
                    <div class="profile"> <a href="${navLocation}" class="user"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg></a></div>
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

                    <h2 class="logo" href > West Elbalad وسط البلد </h2>
                    <div class="sidebar-menus">
                        <a href="https://www.facebook.com/profile.php?id=61574086451614"><ion-icon name="logo-facebook"></ion-icon>صفحتنا ع الفيس</a>
                        <a href="${about}"><ion-icon name="people-circle-outline"></ion-icon>إحنا مين؟</a>
                        <a href="${feedback}"><ion-icon name="people-circle-outline"></ion-icon>قولنا رأيك</a>
                        <a href="${Profile}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path></svg>أدارة الموقع</a> 
                    </div>
                    <div class="menu-off">
                        <a href="#" class="menu-off" ><ion-icon name="close-outline" ></ion-icon>close</a>
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