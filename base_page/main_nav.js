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
                    '<a href="1st.html"><strong>一次会攻略</strong><span>1st Stage</span></a></li>' +
                (page == '2nd'      ? '<li class="active">' : '<li>') +
                    '<a href="2nd.html"><strong>二次会攻略</strong><span>2nd Stage</span></a></li>' +
                (page == '3rd'      ? '<li class="active">' : '<li>') +
                    '<a href="3rd.html"><strong>惨事会攻略</strong><span>3rd Stage</span></a></li>' +
            '</ul>' +
        '</div>' +
    '</nav>'
)