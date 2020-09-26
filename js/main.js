// var i=0;
// var printString;
// var txt1 ='@import';
// var txt2 = '"co:De";';
// var txt3 = 'var ';
// var txt4 = 'thanks ';
// var txt5 = '= ';
// var txt6 = '"from 19 members to 4 you."';

// function printTxt1(callback) {
//     document.getElementById("op-text1").innerText=txt1.substring(0,i++);
//     if(i<=txt1.length) {
//     setTimeout("printTxt1()",100);
//     }
//     callback();
// }

// var printTxt2 = function(callback){
//     document.getElementById("op-text2").innerText=txt2.substring(0,i++);
//     if(i<=txt2.length) {
//      setTimeout("printTxt2()",100);
//     }
//     callback();
// }

// var printTxt3 = function(callback){
//     document.getElementById("op-text3").innerText=txt3.substring(0,i++);
//     if(i<=txt3.length) {
//      setTimeout("printTxt3()",100);
//     }
//     callback();
// }

// window.onload = printTxt1(printTxt2);
// printTxt2(printTxt3);

// 上から順番に処理を実行する
// Promise.resolve()
//   .then(printTxt1) // .then(実行したい関数名)
//   .then(printTxt2)
//   .then(printTxt3)
//   .then(function (value){ // 直に処理を直接書いてもOK
//     return new Promise(function (resolve, reject) {
//       console.log(value);
//       console.log("end.");
//       resolve();
//     });
//   });

// function printTxt1(){
//   var ok = false;
//   return new Promise(function (resolve, reject) {
//     console.log("//////");
//     setTimeout(function() {
//       document.getElementById("op-text1").innerText=txt1.substring(0,i++);
//       console.log("txt1.length is "+txt1.length);
//       if(i<=txt1.length) {
//         console.log(i);
//         setTimeout("printTxt1()",100);
//       }
//       if(i == txt1.length) {
//         console.log("111111111");
//         console.log("aaaaaa");
//         ok = true;
//       }
//       if(ok){
//         console.log("go");
//         resolve('printTxt1 ok');
//       }
//     });
//   });
// }

// function printTxt2(value){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log(value);
//         document.getElementById("op-text2").innerText=txt2.substring(0,i++);
//         if(i<=txt2.length) {
//           setTimeout("printTxt2()",100);
//         }
//         if(i == txt2.length) {
//           console.log("22222222222");
//         }
//         resolve('printTxt2 ok');
//     });
//   });
// }

// function printTxt3(value){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       console.log(value);
//       document.getElementById("op-text3").innerText=txt3.substring(0,i++);
//       if(i<=txt3.length) {
//         setTimeout("printTxt3()",100);
//       }
//       if(i == txt3.length) {
//         console.log("333333333");
//         resolve('printTxt3 ok');
//       }
//     });
//   });
// }

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
		$(".image-wrap").css({ display: "flex" });
	}, 19500);
});

//モーダル
$(function () {
	$(".modalBtn-open").on("click", function () {
		$(".modal-wrap").fadeIn();
		return false;
	});
	$(".modalBtn-close").on("click", function () {
		$(".modal-wrap").fadeOut();
		return false;
	});
});
