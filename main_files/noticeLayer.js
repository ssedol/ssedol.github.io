<!--
/*
// 소스형상관리
// 20070215_1 파일추가 김성호 : [공지사항] (기능개선) 공지사항 레이어로 출력하기
*/
if (document.getElementById)
{
	(
		function()
		{
			var n = 500;
			var dragok = false;
			var y,x,d,dy,dx;

			function move(e)
			{
				if (!e)	e = window.event;
				if (dragok)
				{
					d.style.left = dx + e.clientX - x + "px";
					d.style.top  = dy + e.clientY - y + "px";
					return false;
				}
			}

			function down(e)
			{
				if (!e)	e = window.event;
				var temp = (typeof e.target != "undefined")?e.target:e.srcElement;
				if (temp.tagName != "HTML"|"BODY" && temp.className != "noticeTitleBar")
				{
					temp = (typeof temp.parentNode != "undefined")?temp.parentNode:temp.parentElement;
				}
				if (temp.className == "noticeTitleBar")
				{
					temp = (typeof temp.parentNode != "undefined")?temp.parentNode:temp.parentElement;
					if (temp.className == "noticeClass")
					{
						dragok = true;
						temp.style.zIndex = n++;
						d = temp;
						dx = parseInt(temp.style.left+0);
						dy = parseInt(temp.style.top+0);
						x = e.clientX;
						y = e.clientY;
						document.onmousemove = move;
						return false;
					}
				}
			}

			function up()
			{
				dragok = false;
				document.onmousemove = null;
			}

			document.onmousedown = down;
			document.onmouseup = up;

		}
	)();
}

function closeNotice( noticeID )
{
	document.getElementById("noticeLayer_" + noticeID).style.display = 'none';
}

function closeLayer( noticeID )
{
	document.getElementById("noticeLayer_" + noticeID).style.display = 'none';
}
//-->