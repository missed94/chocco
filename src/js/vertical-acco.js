
;(function () {
  const maxWidth = document.body.clientWidth;

  const openAcco = (item) => {
    item.addClass("acco-item_active");
  };

  const closeAcco = (list) => {
    const listItem = list.find(".acco-item");
    listItem.removeClass("acco-item_active");
  };

  let currWidth = document.body.clientWidth;

  $(window).on("resize", function (e) {
    currWidth = document.body.clientWidth;
  });

  $(".acco-item").on("click", (e) => {
    e.preventDefault();

    if (currWidth > 480) {
      if (
        $(e.target).hasClass("acco-title-wrapper") ||
        $(e.target).hasClass("acco-title") ||
        $(e.target).hasClass("close-x") ||
        $(e.target).hasClass("close-vert-menu")
      ) {
        const $this = $(e.target);
        const itemContainer = $this.closest(".acco-item");
        const accoList = itemContainer.closest(".acco-list");

        if (itemContainer.hasClass("acco-item_active")) {
          closeAcco(accoList);
        } else {
          closeAcco(accoList);
          openAcco(itemContainer);
        }
      }
    } else {
      let itemToAdd = $(`<div class="added-item"></div>`);
      itemToAdd.html($(e.currentTarget).html());

      if (!$(".added-item").length) {
        $(".vertical-menu__section").append(itemToAdd);

        setTimeout(() => {
          itemToAdd.addClass("added-item_active");
        }, 100);

        $(".added-item").on("click", function (e) {
          const $target = $(e.target);
          if (
            $target.hasClass("close-x") ||
            $(e.target).hasClass("close-vert-menu") ||
            $target.hasClass("acco-title-wrapper") ||
            $target.hasClass("acco-title")
          ) {
            itemToAdd.removeClass("added-item_active");
            setTimeout(() => {
              itemToAdd.remove();
            }, 500);
          }
        });
      }
    }
  });
})();
