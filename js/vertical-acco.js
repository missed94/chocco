






$(".acco-title-wrapper").on('click', (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $this.closest(".acco-item");
    console.log(item);
    



    /* openAcco($this); */
})