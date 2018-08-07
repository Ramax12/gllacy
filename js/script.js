'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var containerMainHeader = document.querySelector('.main-header');
  var containerNavToggle = document.querySelector('.main-nav__toggle');

  //burger menu
  containerMainHeader.classList.add('main-header--closed');
  containerNavToggle.addEventListener('click', function() {
    if (containerMainHeader.classList.contains('main-header--closed')) {
      containerMainHeader.classList.remove('main-header--closed');
      containerMainHeader.classList.add('main-header--opened');
    } else {
      containerMainHeader.classList.add('main-header--closed');
      containerMainHeader.classList.remove('main-header--opened');
    }
  });

  var containersUserBlockItem = document.querySelectorAll('.user-block_item');
  var containersWrapperBlock = document.querySelectorAll('.wrapper_block');

  //close wrapper_block
  function closePopup () {
    [].forEach.call(containersWrapperBlock, function (item) {
      if (item.style.display == 'block') {
        item.style.display = 'none';
      }
    });
  }

  function top_walker (node, test_func) {
    while ( node) {
      if ( test_func(node) ) {
        return node;
      }
      node = node.parentNode;
    }
  }

  document.addEventListener('click', function (event) {
    var openedPopup = top_walker(event.target, function (node) {
      return node === containersWrapperBlock;
    });
    if (!openedPopup) {
      closePopup(containersWrapperBlock);
    }
  }, true);

  //open wrapper_block
  [].forEach.call(containersUserBlockItem, function (parent) {
    parent.addEventListener('click', function(){
      var daughter = parent.querySelectorAll('.wrapper_block');
      [].forEach.call(daughter, function (item) {
        item.style.display = 'block';
        document.addEventListener('keydown', onPopupEscPress);
      });
    });
  });

  //close wrapper_block(push on ESC)
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup(containersWrapperBlock);
    }
  };

  var containerFormBtn = document.querySelector('.form_btn');
  var containerModal = document.querySelector('.modal');
  var containerExit = document.querySelector('.exit');

  //open modal_content
  containerFormBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    containerModal.classList.add('modal_show');
  });

  //close modal_content(click on button)
  containerExit.addEventListener('click', function (evt) {
    evt.preventDefault();
    containerModal.classList.remove('modal_show');
  });

  //close modal_content(click on modal)
  window.addEventListener('click', function (evt) {
    if (evt.target == containerModal) {
      if (containerModal.classList.contains('modal_show')){
        containerModal.classList.remove('modal_show');
      }
    }
  });

  //close modal_content(push on ESC)
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (containerModal.classList.contains('modal_show')){
        containerModal.classList.remove('modal_show');
      }
    }
  });
})();