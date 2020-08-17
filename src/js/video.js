;(function() {
  const player = $(".player-elem")[0];
  const playerContainer = $(".player");
  
  $(".play-stop").click((e) => {
    e.preventDefault();
  
    if (playerContainer.hasClass("player_paused")) {
      playerContainer.removeClass("player_paused");
      playerContainer.removeClass("player_active");
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
  
    $(".playback__btn").css({
      left: `${newBtnPosPrecent}%`,
    });
  
    player.pause();
    player.currentTime = player.duration * (clickedPos / line.width());
    player.play();
    playerContainer.addClass("player_paused");
  });
  
  $(player).on("timeupdate", function () {
    let playBackBtn = $(".playback__btn");
    let timeProgress = (player.currentTime / player.duration) * 100 + "%";
    playBackBtn.css("left", timeProgress);
  });
  
  $(".volume__slider-line").click((e) => {
    const volumeLine = $(e.currentTarget);
    const volumeClickedPos = e.originalEvent.layerX;
  
    const volBtnPosPrecent = (volumeClickedPos / volumeLine.width()) * 100;
  
    $(".volume__slider-btn").css({
      left: `${volBtnPosPrecent}%`,
    });
    player.volume = volBtnPosPrecent / 100;
  
    if (playerContainer.hasClass("player__sound-off")) {
      playerContainer.removeClass("player__sound-off");
      player.muted = false;
    }
  });
  
  $(".player-elem").on("play", (e) => {
    playerContainer.addClass("player_active ");
  });
  
  $(".player-splash").on("click", (e) => {
    playerContainer.addClass("player_active player_paused");
    player.play();
  });
  
  $(".volume__icons-wrapper").on("click", (e) => {
    if (playerContainer.hasClass("player__sound-off")) {
      playerContainer.removeClass("player__sound-off");
      player.muted = false;
    } else if ($(e.target).filter("close")) {
      playerContainer.addClass("player__sound-off");
      player.muted = true;
    }
  
  });
  
})()



