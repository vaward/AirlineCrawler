var CHECKData = function () {
  this.getData = function (domain) {
    var result;
    if (domain == 'book.flypeach.com') {
      for (e = 0; e < arrDestination.length; e++)
      {
        var a = arrDestination[e].split('|');
        document.write(a[0] + '-' + a[2] + '<br/>');
        result += a[0] + '-' + a[2] + ',';
      }
    return result;
  }
}
