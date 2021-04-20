function fa() {
    var da=[];
    var thc=[];
    for (var i=0;i<=5;i++) {
      thc.push(document.getElementById("a"+i).value);
      da.push(thc[i]+(". "));
    };
    document.getElementById("aa").innerHTML= da;
    
    document.getElementById("aa").value=(da.join(''));
    console.log(da);
    document.getElementById("aa").innerHTML=(da.join(''));
}
function fab() {
  var d=[];
  var th=[];
  for (var j=0;j<=5;j++) {
    th.push(document.getElementById("ab"+j).value);
    d.push(th[j]+". ");
  };
  document.getElementById("aab").innerHTML= d;

  document.getElementById("aab").value=(d.join(''));
  console.log(d);
  document.getElementById("aab").innerHTML=(d.join(''));
}