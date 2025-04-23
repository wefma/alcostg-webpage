document.write(
    '<nav id="mainNav">' +
        '<a class="menu" id="menu"><span>MENU</span></a>' +
        '<div class="panel">' +
            '<ul>' +
                (page == 'index'    ? '<li class="active">' : '<li>') +
                    '<a href="index.html"><strong>トップページ</strong><span>Top</span></a></li>' +
                (page == 'greeting' ? '<li class="active">' : '<li>') +
                    '<a href="greeting.html"><strong>ごあいさつ</strong><span>Greeting</span></a></li>' +
                (page == 'basic'    ? '<li class="active">' : '<li>') +
                    '<a href="basic.html"><strong>基本攻略情報</strong><span>Basic Information</span></a></li>' +
                (page == '1st'      ? '<li class="active">' : '<li>') +
                    '<a href="menu.html"><strong>メニュー表</strong><span>Menu List</span></a></li>' +
                (page == '2nd'      ? '<li class="active">' : '<li>') +
                    '<a href="videos.html"><strong>参考動画</strong><span>Videos</span></a></li>' +
                (page == '3rd'      ? '<li class="active">' : '<li>') +
                    '<a href="links.html"><strong>リンク</strong><span>Links</span></a></li>' +
            '</ul>' +
        '</div>' +
    '</nav>'
)