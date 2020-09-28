$(window).on("load", function () {
	// ここから文字を<span></span>で囲む記述
	for (var i = 0; i <= 11; i++) {
		var setElm = $(".txt" + i),
			className = "t" + i + "-";
		setElm
			.children()
			.addBack()
			.contents()
			.each(function () {
				var elmThis = $(this);
				if (this.nodeType == 3) {
					var $this = $(this);
					$this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
				}
				setElm.each(function () {
					$(this)
						.find("span")
						.each(function (i) {
							i = i + 1;
							$(this).addClass(className + i);
						});
				});
			});
	}

	// ここから一文字ずつフェードインさせる記述
	setTimeout(function () {
		$(".txt").css({ opacity: 1 });
		for (var i = 0; i <= $(".txt").children().size(); i++) {
			$(".txt")
				.children("span:eq(" + i + ")")
				.delay(50 * i)
				.animate({ opacity: 1 }, 50);
		}
	}, 500);
});

// 文字フェードアウト
$(function () {
	setTimeout(function () {
		$(".txt").animate({ opacity: 0 }, 200);
	}, 17500);
});

// ロゴフェードイン
$(function () {
	setTimeout(function () {
		$(".image").animate({ opacity: 1 }, 150);
	}, 18000);
});

// 背景カラーチェンジ & ロゴフェードアウト & 顔アイコン登場
$(function () {
	setTimeout(function () {
		$("body").animate({ backgroundColor: "#82CBCA" }, 200);
		$(".image").animate({ opacity: 0 }, 200);
		$(".txt-wrap").css({ display: "none" });
		$(".member-wrap").css({ display: "flex" });
	}, 19500);
});

// ------モーダル-----
$(function () {
	$(".modalBtn-open").each(function () {
		$(this).on("click", function () {
			var target = $(this).data("target");
			var modal = document.getElementById(target);

			$(modal).fadeIn();
			return false;
		});
	});

	$(".modalBtn-close").on("click", function () {
		$(".modal-wrap").fadeOut();
		return false;
	});
});
