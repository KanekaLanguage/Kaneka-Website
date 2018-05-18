(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'https://d32ujqjov16ho0.cloudfront.net/direct_uploads/1473692861_Skyline.mp4',
        type: 'video/mp4'
      }
      // {
      //   src: 'night.webm',
      //   type: 'video/webm;codecs="vp8, vorbis"'
      // }
    ],

    // What to do once video loads (initial frame)
    // onLoad: function () {
    //   document.querySelector('#video_cover').style.display = 'none';
    // }
  });
}());
