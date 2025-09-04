export const getSwiperSlideStructure = (reference) => {
    const {
        name,
        image,
        position,
        institution,
        content,
        recommendationLetter,
    } = reference;

    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.innerHTML = `
        <div class="content">
            <div class="header">
                <img
                    src="${image}"
                />
                <div class="author-info">
                    <span class="name">${name}</span>
                    <span class="info"
                        >${position}, ${institution}</span
                    >
                </div>
            </div>
            <div class="reference">
                <p>
                    ${content}
                </p>
                <a href="${recommendationLetter}" download>Read More</a>
            </div>
        </div>
        <img
            src="./images/icons/quotes.png"
            class="quotes"
        />
        <div class="line-decoration"></div>
    `;

    return div;
};
