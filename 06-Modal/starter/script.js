'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')
const body = document.querySelector('body')

const length = btnsShowModal.length

function showModal() {
    // Showing Modal Window by
    // removing classList 'hidden' from modal
    modal.classList.remove('hidden')
    // Showing Overlay Effect by
    // removing classList 'hidden' from overlay
    overlay.classList.remove('hidden')
}

function hideModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

function overlayHideModal() {
    // Clicking Overlay area will hide Modal Window
    modal.classList.add('hidden')
    // Clicking Overlay area will hide Overlay effect
    overlay.classList.add('hidden')
}

// Loop through NodeList of btnsShowModal
for (let i=0; i < length; i++) {
    console.log(btnsShowModal[i].textContent)
    // All Show Modal buttons when clicked
    // will show Modal Window & Overlay effect
    btnsShowModal[i].addEventListener('click', showModal)
}

// When Cross button is clicked
// Remove Modal Window & Overlay effect
btnCloseModal.addEventListener('click', hideModal)
// When Overlay is clicked
// Remove Modal Window & Overlay effect
overlay.addEventListener('click', overlayHideModal)



