const btnShare = document.querySelector('.share');
const boxModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
console.log(btnShare);
console.log(overlay);


btnShare.addEventListener('click', function() {
    btnShare.classList.toggle('is-selected');
    boxModal.classList.toggle('hidden');
})
