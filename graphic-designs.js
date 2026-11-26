const designGallery = document.getElementById('design-gallery');
const designLightbox = document.getElementById('design-lightbox');

function balanceDesignGallery() {
    if (!designGallery) return;

    const styles = window.getComputedStyle(designGallery);
    const rowHeight = parseFloat(styles.gridAutoRows);
    const rowGap = parseFloat(styles.rowGap);

    designGallery.querySelectorAll('.design-card').forEach(card => {
        const span = Math.ceil((card.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        card.style.setProperty('--design-row-span', Math.max(1, span));
    });
}

let galleryLayoutFrame = 0;
function scheduleGalleryLayout() {
    window.cancelAnimationFrame(galleryLayoutFrame);
    galleryLayoutFrame = window.requestAnimationFrame(balanceDesignGallery);
}

if (designGallery) {
    const galleryObserver = 'ResizeObserver' in window
        ? new ResizeObserver(scheduleGalleryLayout)
        : null;

    graphicDesigns.forEach(design => {
        const figure = document.createElement('figure');
        figure.className = 'design-card';

        const preview = document.createElement('button');
        preview.className = 'design-preview';
        preview.type = 'button';
        preview.dataset.fullImage = design.image;
        preview.dataset.imageAlt = design.alt;
        preview.dataset.designTitle = design.title;
        preview.setAttribute('aria-label', `View ${design.title} larger`);

        const thumbnail = document.createElement('img');
        thumbnail.src = design.image;
        thumbnail.width = design.width;
        thumbnail.height = design.height;
        thumbnail.alt = design.alt;
        thumbnail.loading = 'lazy';
        thumbnail.addEventListener('load', scheduleGalleryLayout);
        preview.appendChild(thumbnail);

        const hint = document.createElement('span');
        hint.className = 'design-preview-hint';
        hint.innerHTML = '<i class="fas fa-expand" aria-hidden="true"></i> View larger';
        preview.appendChild(hint);

        const caption = document.createElement('figcaption');
        const type = document.createElement('span');
        type.className = 'design-card-type';
        type.textContent = design.type;

        const title = document.createElement('h2');
        title.textContent = design.title;

        caption.append(type, title);
        figure.append(preview, caption);
        designGallery.appendChild(figure);
        if (galleryObserver) galleryObserver.observe(figure);
    });

    window.addEventListener('resize', scheduleGalleryLayout);
    scheduleGalleryLayout();
}

if (designLightbox) {
    const lightboxImage = designLightbox.querySelector('.design-lightbox-image');
    const lightboxTitle = designLightbox.querySelector('#lightbox-title');
    const closeLightboxButton = designLightbox.querySelector('.design-lightbox-close');
    let activePreview = null;

    document.querySelectorAll('.design-preview').forEach(preview => {
        preview.addEventListener('click', () => {
            activePreview = preview;
            lightboxImage.src = preview.dataset.fullImage;
            lightboxImage.alt = preview.dataset.imageAlt;
            lightboxTitle.textContent = preview.dataset.designTitle;
            designLightbox.showModal();
        });
    });

    closeLightboxButton.addEventListener('click', () => designLightbox.close());

    designLightbox.addEventListener('click', event => {
        if (event.target === designLightbox) designLightbox.close();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && designLightbox.open) {
            event.preventDefault();
            designLightbox.close();
        }
    });

    designLightbox.addEventListener('close', () => {
        if (activePreview) activePreview.focus();
        activePreview = null;
    });
}
