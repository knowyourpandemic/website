var checkList = document.getElementById('l1');
checkList.getElementsByClassName('an')[0].onclick = function(evt) {
  if (checkList.classList.contains('vi'))
    checkList.classList.remove('vi');
  else
    checkList.classList.add('vi');
}