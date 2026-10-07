/* если задали фото в --photo1/2/3, подпись-заглушка скроется */
document.querySelectorAll('.photo').forEach(function(p){
  var bg=getComputedStyle(p).backgroundImage;
  if(/url\(/.test(bg)) p.classList.add('has');
});
