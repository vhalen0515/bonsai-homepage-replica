// Open/Close Mobile Menu
function toggleMenu(element) {
    element.classList.toggle("rotate");
}

const menuIcon = document.querySelector(".menu-icon");
const mobileMenuPopup = document.querySelector(".mobile-menu-popup");
const body = document.body;

menuIcon.addEventListener("click", () => {
    mobileMenuPopup.classList.toggle("active");
    body.classList.toggle("no-scroll");

    // Collapsing submenus when main menu closes
    const submenus = document.querySelectorAll(".sub-menu-wrapper");
    submenus.forEach((submenu) => {
        submenu.classList.add("hide");
        submenu.classList.remove("show");
    });
});

// Mobile Submenu Dropdown
const menuBtn = document.querySelectorAll(".mobile-submenu-btn");

menuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {

        const submenus = document.querySelectorAll(".sub-menu-wrapper");
        
        submenus.forEach((toggle) => {
            toggle.classList.toggle("show");
        });

        menuBtn.forEach((otherBtn) => {
            if (otherBtn !== btn) {
                const otherSubmenu = otherBtn.nextElementSibling;
                otherSubmenu.classList.remove("show");
                otherSubmenu.classList.add("hide");
            }
        });
    });
});

// Desktop Submenu Dropdown
const desktopSubmenuBtns = document.querySelectorAll(".desktop-submenu-btn");

desktopSubmenuBtns.forEach((btn) => {
    const desktopSubmenu = btn.nextElementSibling;

    if (
        desktopSubmenu &&
        desktopSubmenu.classList.contains("desktop-submenu")
    ) {
        btn.addEventListener("mouseenter", () => {
            desktopSubmenu.style.display = "flex";
        });

        desktopSubmenu.addEventListener("mouseenter", () => {
            desktopSubmenu.style.display = "flex";
        });

        btn.addEventListener("mouseleave", () => {
            desktopSubmenu.style.display = "none";
        });

        desktopSubmenu.addEventListener("mouseleave", () => {
            desktopSubmenu.style.display = "none";
        });
    }
});

// Monthly/Yearly Toggle
const toggle = document.querySelector(".toggle-pill");
const monthly = document.getElementById("price-plan-monthly");
const yearly = document.getElementById("price-plan-yearly");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    yearly.classList.toggle("select");
    monthly.classList.toggle("select");
});

// Toggle Pricing
$(document).ready(function () {
    $(".toggle-pill").click(function () {
        let starterPrice = $(".starter-price");
        if (starterPrice.text() === "24") {
            starterPrice.text("17");
        } else {
            starterPrice.text("24");
        }

        let professionalPrice = $(".professional-price");
        if (professionalPrice.text() === "39") {
            professionalPrice.text("32");
        } else {
            professionalPrice.text("39");
        }

        let businessPrice = $(".business-price");
        if (businessPrice.text() === "79") {
            businessPrice.text("52");
        } else {
            businessPrice.text("79");
        }

        $(".billed-yearly").toggle();
    });
});

// FAQ Functionality
$(document).ready(function () {
    $(".faq-question").click(function () {
        $(this).closest(".faq-item").find(".faq-answer").slideToggle("fast");
    });
});

// previous code, save in case
// menuBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const submenu = btn.nextElementSibling;

//         submenu.classList.toggle("show");
//         submenu.classList.toggle("hide");

//         menuBtn.forEach((otherBtn) => {
//             if (otherBtn !== btn) {
//                 const otherSubmenu = otherBtn.nextElementSibling;
//                 otherSubmenu.classList.remove("show");
//                 otherSubmenu.classList.add("hide");
//             }
//         });
//     });
// });
