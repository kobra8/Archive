
      _src=new Array();
      _src[0]="strona/grafiki/00.gif";
      _src[1]="strona/grafiki/00on.gif";
      _src[2]="strona/grafiki/01.gif";
      _src[3]="strona/grafiki/01on.gif";
      _src[4]="strona/grafiki/02.gif";
      _src[5]="strona/grafiki/02on.gif";
      _src[6]="strona/grafiki/03.gif";
      _src[7]="strona/grafiki/03on.gif";
      _src[8]="strona/grafiki/04.gif";
      _src[9]="strona/grafiki/04on.gif";
      _src[10]="strona/grafiki/05.gif";
      _src[11]="strona/grafiki/05on.gif";
      _src[12]="strona/grafiki/06.gif";
      _src[13]="strona/grafiki/06on.gif";
      _src[14]="strona/grafiki/07.gif";
      _src[15]="strona/grafiki/07on.gif";
      _src[16]="strona/grafiki/08.gif";
      _src[17]="strona/grafiki/08on.gif";
      _src[18]="strona/grafiki/09.gif";
      _src[19]="strona/grafiki/09on.gif";


      if (document.images != null)
      {
        _img = new Array();
        for (i=0; i<_src.length; i++)
        {
          _img[i] = new Image();
          _img[i].src = _src[i];
        }
      }
     