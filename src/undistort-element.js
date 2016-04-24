function undistortElement(element, matrix) {
  // TODO validate inputs

  var res0=[],res1=[],res2=[],res3=[],j;
  for (j = 0; j < 4; ++j) {
      res0.push(matrix[j][0].toFixed(20)); // 20 is the max # digits
      res1.push(matrix[j][1].toFixed(20));
      res2.push(matrix[j][2].toFixed(20));
      res3.push(matrix[j][3].toFixed(20));
     }
  var res = [];
  res.push(res0);
  res.push(res1);
  res.push(res2);
  res.push(res3);

  element.style.transform = "matrix3d(" + res.join(',') + ")";
  element.style['-webkit-transform'] = "matrix3d(" + res.join(',') + ")";
  element.style['transform-origin'] = '0 0';
  
}

module.exports = undistortElement;
