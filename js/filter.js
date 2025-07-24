//영상 정보 셋팅 [DB대신 json파일 임시 생성]
let arryPoster = [
  { name: "권영국유세", item: "현장상영" },
  { name: "국가비전입법", item: "현장상영" },
  { name: "지역신문컨퍼런스", item: "행사홍보" },
  { name: "지역신문컨퍼런스-상영", item: "현장상영" },
  { name: "국가인권위20주년", item: "현장상영" },
  { name: "민주화운동청소년", item: "행사홍보" },
  { name: "경기문화재단매생이", item: "사업보고" },
  { name: "수원화성문화제30초", item: "행사홍보" },
  { name: "수원화성문화제60초", item: "행사홍보" },
  { name: "하푸실아리랑사과", item: "행사스케치" },
];

//배열 담을 배열
let showingArry = [];

// 배열 섞기 함수
// const shuffleArray = array => {
//     for (var i = 0; i < array.length; i++) {
//         var j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];     //빈 곳에  배열i를 저장
//         array[i] = array[j];       //배열 j를 배열 i에 저장
//         array[j] = temp;           //상수 x를 배열 j에 저장
//     }
//     return array;
// };

for (let i = 0; i < arryPoster.length; i++) {
  let posters = `<div class="itemBox" data-item="${arryPoster[i].item}"><img src="./img/covers/${arryPoster[i].name}.jpeg" alt="${arryPoster[i].name}"></div>`;
  showingArry.push(posters);
}

// shuffleArray(showingArry);

$(document).ready(function () {
  //섞은 배열을 출력하기
  $(".poster").append(showingArry);

  let list = $(".list");
  let itemBox = $(".itemBox");

  list.on("click", function () {
    list.removeClass("active");
    $(this).addClass("active");
    let dataFilter = $(this).attr("data-filter");
    // console.log(showingArry); // Removed for production

    itemBox.each(function () {
      $(this).addClass("hide");
      $(this).removeClass("active");
      if ($(this).attr("data-item") == dataFilter || dataFilter == "all") {
        $(this).addClass("active");
        $(this).removeClass("hide");
      }
    });
  });
});
