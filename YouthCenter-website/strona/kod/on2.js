
      _src=new Array();
      _src[0]="../grafiki/00.gif";
      _src[1]="../grafiki/00on.gif";
      _src[2]="../grafiki/01.gif";
      _src[3]="../grafiki/01on.gif";
      _src[4]="../grafiki/02.gif";
      _src[5]="../grafiki/02on.gif";
      _src[6]="../grafiki/03.gif";
      _src[7]="../grafiki/03on.gif";
      _src[8]="../grafiki/04.gif";
      _src[9]="../grafiki/04on.gif";
      _src[10]="../grafiki/05.gif";
      _src[11]="../grafiki/05on.gif";
      _src[12]="../grafiki/06.gif";
      _src[13]="../grafiki/06on.gif";
      _src[14]="../grafiki/07.gif";
      _src[15]="../grafiki/07on.gif";
      _src[16]="../grafiki/08.gif";
      _src[17]="../grafiki/08on.gif";
      _src[18]="../grafiki/09.gif";
      _src[19]="../grafiki/09on.gif";


      if (document.images != null)
      {
        _img = new Array();
        for (i=0; i<_src.length; i++)
        {
          _img[i] = new Image();
          _img[i].src = _src[i];
        }
      }
     