const player = $(".player-elem")[0];
const playerContainer = $(".player");

$(".play-stop").click((e) => {
  e.preventDefault();

  if (playerContainer.hasClass("player_paused")) {
    playerContainer.removeClass("player_paused");
    player.pause();
  } else {
    playerContainer.addClass("player_paused");
    player.play();
  }
});

$(".playback__slider-line").click((e) => {
  const line = $(e.currentTarget);
  const clickedPos = e.originalEvent.layerX;

  const newBtnPosPrecent = (clickedPos / line.width()) * 100;
  /* const newPlaybackPosSec = (player.duration / 100) * newBtnPosPrecent; */

  $(".playback__btn").css({
      left: `${newBtnPosPrecent}%`
    });
    
    player.pause();
    player.currentTime = player.duration * (clickedPos / line.width());
    player.play();

});



$(player).on("timeupdate", function () {
  let playBackBtn = $(".playback__btn");

  let timeProgress = (player.currentTime / player.duration) * 100 + "%";

  playBackBtn.css("left", timeProgress);
});
