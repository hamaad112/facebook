// middle navbar icons

function activeNavLinks() {
    let middleNavbarIcons = document.querySelectorAll("#middleNavbar i");

    middleNavbarIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            // Remove the activeIcon class and underline from all icons
            middleNavbarIcons.forEach((otherIcon) => {
                otherIcon.classList.remove("activeIcon");
            });

            // Add the activeIcon class and underline to the clicked icon
            icon.classList.add("activeIcon");
        });
    });

}
activeNavLinks();


// sidebar show more links

function moreSideBarLinks() {
    let showMore = document.querySelector("#showmore");
    let showLess = document.querySelector("#showLess");
    let showMoreSidebar = document.querySelector("#showMoreSidebar");

    showMore.addEventListener("click", () => {
        showMoreSidebar.style.display = "block";
        showMore.style.display = "none";
    });

    showLess.addEventListener("click", () => {
        showMoreSidebar.style.display = "none";
        showMore.style.display = "flex";
    });
}
moreSideBarLinks();

// create post popup

function postPopup() {
    let createPost = document.querySelector("#createPost")
    let closePostBtn = document.querySelector("#closePostBtn")
    let openPostBtn = document.querySelector("#openPostBtn")

    openPostBtn.addEventListener("click", () => {
        createPost.style.display = "flex";
    })

    closePostBtn.addEventListener("click", () => {
        createPost.style.display = "none";
    })
}

postPopup();


// toggle encription message 

function toggleEncryptionStatus() {
    let encryptionStatusElement = document.getElementById("encryptionStatus");
    let switchElement = document.querySelector("input[type='checkbox']");

    if (switchElement.checked) {
        encryptionStatusElement.innerText = "End to end encryption";
    } else {
        encryptionStatusElement.innerText = "Used end to end encryption";
    }
}

toggleEncryptionStatus();

// popup message box

function popUpMessageBox() {
    let messagePopup = document.querySelector("#messagePopup");
    let openMessage = document.querySelector("#openMessage");
    let closePopupMessage = document.querySelector("#closePopupMessage");
    let inputField = document.querySelector("#toInput");

    openMessage.addEventListener("click", () => {
        messagePopup.style.display = "block";
        inputField.focus();
    });

    closePopupMessage.addEventListener("click", () => {
        messagePopup.style.display = "none";
    });
}

popUpMessageBox();

// grid menu

function menupopup() {
    let gridMenuIcon = document.querySelector("#gridMenuIcon")
    let menuBar = document.querySelector("#menuBar")

    gridMenuIcon.addEventListener("click", () => {
        if (menuBar.style.display === "none") {
            menuBar.style.display = "block";
            gridMenuIcon.style.color = "#0866ff"
        }
        else {
            menuBar.style.display = "none";
            gridMenuIcon.style.color = "#000"
        }
    })
}

menupopup();

// profile popup

function profilePopUp() {
    let profilePopUpIcon = document.querySelector("#profilePopUpIcon")
    let profilePopup = document.querySelector("#profilePopup")

    profilePopUpIcon.addEventListener("click", () => {
        if (profilePopup.style.display === "none") {
            profilePopup.style.display = "block";
        }
        else {
            profilePopup.style.display = "none";
        }
    })
}

profilePopUp();

// search box popup

function searchBoxPopUp() {
    let openSearchBox = document.querySelector("#openSearchBox")
    let searchBoxPopup = document.querySelector("#searchBoxPopup")
    let closeSearchBox = document.querySelector("#closeSearchBox")

    openSearchBox.addEventListener("click", () => {
        if (searchBoxPopup.style.display === "none") {
            searchBoxPopup.style.display = "block"
        }
        else {
            searchBoxPopup.style.display = "none"
        }
    })

    closeSearchBox.addEventListener("click", () => {
        searchBoxPopup.style.display = "none"
    })
}
searchBoxPopUp();

// notification popup

function notificationPopUp() {
    let notificationIcon = document.querySelector("#notificationIcon")
    let notificationPopup = document.querySelector("#notificationPopup")

    notificationIcon.addEventListener("click", () => {
        if (notificationPopup.style.display === "none") {
            notificationPopup.style.display = "block";
            notificationIcon.style.color = "#0866ff";
        }
        else {
            notificationPopup.style.display = "none"
            notificationIcon.style.color = "#000";
        }
    })
}

notificationPopUp();

// meesenger popup

function messengerPopUp() {
    let messengerIcon = document.querySelector("#messengerIcon")
    let messengerPopUp = document.querySelector("#messengerPopUp")

    messengerIcon.addEventListener("click", () => {
        if (messengerPopUp.style.display === "none") {
            messengerPopUp.style.display = "block";
            messengerIcon.style.color = "#0866ff"
        }
        else {
            messengerPopUp.style.display = "none";
            messengerIcon.style.color = "#000"
        }
    })
}

messengerPopUp();

// toggle sidebar

let toggleSidebarIcon = document.querySelector("#toggleSidebarIcon")
let sidebar = document.querySelector("#sidebar")

toggleSidebarIcon.addEventListener("click", () => {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block"
    }
    else {
        sidebar.style.display = "none"
    }
})
