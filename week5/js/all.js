// 旅遊行程資料
let travelData = [
  {
    id: 0,
    name: "綠島自由行套裝行程",
    imgUrl: "./img/travel_1.png",
    area: "台北",
    description:
      "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    group: 8,
    price: 1280,
    rate: 8.6,
  },
  {
    id: 1,
    name: "清境高空觀景步道二日遊",
    imgUrl: "./img/travel_4.png",
    area: "台北",
    description:
      "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    group: 12,
    price: 2580,
    rate: 8.2,
  },
  {
    id: 2,
    name: "南庄度假村露營車二日遊日",
    imgUrl: "./img/travel_6.png",
    area: "台中",
    description:
      "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    group: 2,
    price: 1765,
    rate: 7,
  },
  {
    id: 3,
    name: "山林悠遊雙人套票",
    imgUrl: "./img/travel_3.png",
    area: "台中",
    description:
      "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    group: "限時搶購",
    price: 880,
    rate: 9.3,
  },
  {
    id: 4,
    name: "漁樂碼頭釣魚體驗套票",
    imgUrl: "./img/travel_7.png",
    area: "台中",
    description:
      "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    group: 5,
    price: 1280,
    rate: 8.2,
  },
  {
    id: 5,
    name: "熊森公園親子二日遊套票",
    imgUrl: "./img/travel_5.png",
    area: "台中",
    description:
      "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    group: 3,
    price: 2480,
    rate: 8.6,
  },
];
// =========================================
// 初始化資料
//預設狀態為套票全部顯示
function init() {
  const searchResult = document.querySelector(".search-result");
  let searchResultContent = "";
  travelData.forEach(function (item, index) {
    //標題
    let name = item.name;
    //圖片
    let imgUrl = item.imgUrl;
    //地區
    let area = item.area;
    //描述
    let description = item.description;
    //剩下幾組
    let group = item.group;
    //價格
    let price = item.price.toLocaleString("en-US");
    //console.log(price);
    //星級
    let rate = item.rate;
    let content = `
      <div class="result-group">
                  <div class="photo">
                    <div class="region">
                      <p>${area}</p>
                    </div>
                    <div class="photo-block">
                      <img src=${imgUrl} alt="" />
                    </div>
                  </div>
                  <div class="content">
                    <div class="fraction">
                      <p>${rate}</p>
                    </div>
                    <p class="title">${name}</p>
                    <p class="text-block">
                      ${description}
                    </p>
                    <div class="bottom-block">
                      <div class="remain-group-num">
                        <img src="./img/icon/notice.png" alt="" />
                        <p class="remain-text">剩下最後<span>${group}</span>組</p>
                      </div>
                      <div class="price">
                        <span>TWD</span>
                        $${price}
                      </div>
                    </div>
                  </div>
                </div>
      `;
    searchResultContent += content;
  });
  //console.log(searchResultContent);
  searchResult.innerHTML = searchResultContent;
}
init();
// =========================================
