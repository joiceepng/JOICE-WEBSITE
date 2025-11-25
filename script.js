// ======================
// CONTACT BUTTON → Linktree
// ======================

const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        window.open("https://linktr.ee/joiceepng", "_blank");
    });
}

// ======================
// ALBUM MODAL
// ======================

// List foto lengkap
const images = [
    { src: "joice.jpg", alt: "Foto 1" },
    { src: "ft2.jpeg", alt: "Foto 2" },
    { src: "ft3.jpeg", alt: "Foto 3" },
    { src: "ft4.jpeg", alt: "Foto 4" },
    { src: "ft5.jpeg", alt: "Foto 5" },
    { src: "ft6.jpeg", alt: "Foto 6" },
    { src: "ft7.jpeg", alt: "Foto 7" },
    { src: "ft8.jpeg", alt: "Foto 8" },
    { src: "ft9.jpeg", alt: "Foto 9" },
    { src: "ft10.jpeg", alt: "Foto 10" },
    { src: "ft11.jpeg", alt: "Foto 11" },
    { src: "ft12.jpeg", alt: "Foto 12" },
    { src: "ft13.jpeg", alt: "Foto 13" },
    { src: "ft14.jpeg", alt: "Foto 14" },
    { src: "ft15.jpeg", alt: "Foto 15" },
    { src: "ft16.jpeg", alt: "Foto 16" },
    { src: "ft17.jpeg", alt: "Foto 17" },
    { src: "ft18.jpeg", alt: "Foto 18" },
    { src: "ft19.jpeg", alt: "Foto 19" },
    { src: "ft20.jpeg", alt: "Foto 20" },
    { src: "ft21.jpeg", alt: "Foto 21" },
    { src: "ft22.jpeg", alt: "Foto 22" },
    { src: "ft23.jpeg", alt: "Foto 23" },
    { src: "ft24.jpeg", alt: "Foto 24" },
    { src: "ft25.jpeg", alt: "Foto 25" },
    { src: "ft26.jpeg", alt: "Foto 26" },
    { src: "ft27.jpeg", alt: "Foto 27" },
    { src: "ft28.jpeg", alt: "Foto 28" },
    { src: "ft29.jpeg", alt: "Foto 29" },
    { src: "ft30.jpeg", alt: "Foto 30" },
    { src: "ft31.jpeg", alt: "Foto 31" },
    { src: "ft32.jpeg", alt: "Foto 32" },
    { src: "ft33.jpeg", alt: "Foto 33" },
    { src: "ft34.jpeg", alt: "Foto 34" },
    { src: "ft35.jpeg", alt: "Foto 35" },
    { src: "ft36.jpeg", alt: "Foto 36" },
    { src: "ft37.jpeg", alt: "Foto 37" },
    { src: "ft38.jpeg", alt: "Foto 38" },
    { src: "ft39.jpeg", alt: "Foto 39" },
    { src: "ft40.jpeg", alt: "Foto 40" },
    { src: "ft41.jpeg", alt: "Foto 41" }
];

let albumModal = null;
const albumBtn = document.getElementById('album-btn');

if (albumBtn) {
    albumBtn.addEventListener('click', () => {

        if (!albumModal) {
            albumModal = document.createElement('div');
            albumModal.classList.add('album-modal');

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', () => {
                albumModal.classList.remove('active');
            });

            const gallery = document.createElement('div');
            gallery.classList.add('album-gallery');

            images.forEach(({ src, alt }) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = alt;
                gallery.appendChild(img);
            });

            modalContent.appendChild(closeBtn);
            modalContent.appendChild(gallery);
            albumModal.appendChild(modalContent);
            document.body.appendChild(albumModal);

            albumModal.addEventListener('click', (e) => {
                if (e.target === albumModal) {
                    albumModal.classList.remove('active');
                }
            });
        }

        albumModal.classList.toggle('active');
    });
}
