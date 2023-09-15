import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  const mainRef = useRef();
  const thumbRef = useRef();

  const mainSettings= {
    infinite: true,
    slidesToShow: 1,
    fade: true,
    draggable: false,
    centerMode: true,
    pauseOnHover: false,
    autoplay: true,
    cssEase: 'ease-in',
    easing: 'ease-in',
    waitForAnimate: false,
    autoplaySpeed: 5000,
    speed: 700,
  }

  const thumb_settings = {
    infinite: true,
    slidesToShow: 5,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    afterChange: handleThumbChange,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  function handleThumbChange(index){
    mainRef.current.slickGoTo(index);
  }

  return (
    <>
      <Slider {...mainSettings} className="main-slide" ref={mainRef}>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">イニシア</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_transparent.png" alt="INITIA"></img>
            </div>
            <div className="desc">
              <span>ダミー、一歩先を見据えて、</span><br />
              <span>次の時代に求められる、</span><br />
              <span>本質的な価値のある住まい。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">グランフォルム</span>
            </div>
            <div className="brand">
              <img src="./logos/grand_forme_transparent.png" alt="GRAND FORME"></img>
            </div>
            <div className="desc">
              
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">フォルム</span>
            </div>
            <div className="brand">
              <img src="./logos/forme_transparent.png" alt="FORME"></img>
            </div>
            <div className="desc">
              <span>時代（とき）を超え、</span><br />
              <span>土地と空間の資産価値を追求する。</span><br />
              <span>風格と意匠が織りなす「フォルム」シリーズ。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">コスモ</span>
            </div>
            <div className="brand">
              <img src="./logos/cosmos_transparent.png" alt="COSMOS"></img>
            </div>
            <div className="desc">
              
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">イニシアイオ</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_io_transparent.png" alt="INITIA IO"></img>
            </div>
            <div className="desc">
              <span>私らしさ、私だけのStylish&smartな暮らしが、ここにある。</span><br />
              <span>都市型スタイリッシュマンション「イニシアイオ」シリーズ。</span><br />
              <span>イニシアイオ横濱関内</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築マンション</span>
              <span className="method">イニシアクラウド</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_cloud.png" alt="INIITA CLOUD"></img>
            </div>
            <div className="desc">
              <span>柔らかさ’のある住まいを。</span><br />
            </div>
            <div className="extra-link">
              <a href="https://www.cigr.co.jp/pj/i-cloud/">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">アクティブシニア新築マンション </span>
              <span className="method">イニシアグラン</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_gran.png" alt="INITIA GRAN"></img>
            </div>
            <div className="desc">
              <span>人生１００年時代を迎える中、アクティブシニアのための、</span><br />
              <span>一歩先の自由な発想でつくる、</span><br />
              <span>お一人おひとりが心満たされる住まい。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">アクティブシニア新築マンション</span>
              <span className="method">グランフォルムコスモ</span>
            </div>
            <div className="brand">
              <img src="./logos/gran_cosmos.png" alt="GRAN COSMOS"></img>
            </div>
            <div className="desc">
              <span>人生１００年時代を迎える中、アクティブシニアのための、</span><br />
              <span>一歩先の自由な発想でつくる、</span><br />
              <span>お一人おひとりが心満たされる住まい。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築タウンハウス</span>
              <span className="method">イニシアテラス</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_terrace.png" alt="INITIA TERRACE"></img>
            </div>
            <div className="desc">
              <span>憧れの住宅地に、</span><br />
              <span>デザインされた立体空間で、</span><br />
              <span>個性豊かな暮らしを叶える住まい。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築タウンハウス</span>
              <span className="method">ザ・ロアハウス</span>
            </div>
            <div className="brand">
              <img src="./logos/row_house_transparent.png" alt="ROW HOUSE"></img>
            </div>
            <div className="desc">
              <span>静かで落ち着いた一戸建邸宅地に、</span><br />
              <span>都市の新しい暮らし方を提案する</span><br />
              <span>低層メゾネットマンション「ザ・ロアハウス」シリーズ。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築一戸建</span>
              <span className="method">イニシアフォーラム</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_forum.png" alt="INITIA FORUM"></img>
            </div>
            <div className="desc">
              <span>季節を経て、なお色褪せない、</span><br />
              <span>ずっと語り継がれる </span><br />
              <span>永くあいされる街と住まい。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築一戸建</span>
              <span className="method">グランフォーラム</span>
            </div>
            <div className="brand">
              <img src="./logos/grand_forum.png" alt="GRAND FORUM"></img>
            </div>
            <div className="desc">
              <span>ステイタスに住まう。</span><br />
              <span>コスモスイニシアの一戸建ブランド</span><br />
              <span>「グランフォーラム」シリーズ。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">新築一戸建</span>
              <span className="method">コスモアベニュー</span>
            </div>
            <div className="brand">
              <img src="./logos/cosmos_avenue.png" alt="COSMOS AVENUE"></img>
            </div>
            <div className="desc">
              <span>土地の記憶、街、家族の絆を大切に考える。</span><br />
              <span>コスモスイニシアの一戸建メインブランド</span><br />
              <span>「コスモアベニュー」シリーズ。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">リノベーション</span>
              <span className="method">イニシア＆リノベ―ション</span>
            </div>
            <div className="brand">
              <img src="./logos/initia_renovation.png" alt="INITIA RENOVATION"></img>
            </div>
            <div className="desc">
              <span>一歩先の価値で心地よい暮らしでであうリノベ―ション。</span><br />
            </div>
            <div className="extra-link">
              <a href="https://www.cigr.co.jp/pj-works/renovation/">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Main"></img>
          </div>
        </div>
        <div className="item">
          <div className="detail">
            <div className="label">
              <span className="category">リノベーション</span>
              <span className="method">リノマークス</span>
            </div>
            <div className="brand">
              <img src="./logos/reno_mark.png" alt="RENO MARK"></img>
            </div>
            <div className="desc">
              <span>良質な既存建物をトータルに刷新して甦らせる、</span><br />
              <span>一棟まるごとリノベーション。</span><br />
              <span>これからの時代のニーズに合致する、新しい住宅の形です。</span>
            </div>
            <div className="extra-link">
              <a href="">BRAND SITE</a>
            </div>
          </div>
          <div className="item-img">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Main"></img>
          </div>
        </div>
      </Slider>

      <Slider {...thumb_settings} className="thumb-slide" ref={thumbRef}>
        <div>
          <img src="./logos/initia.png" alt="INITIA"></img>
        </div>
        <div>
          <img src="./logos/grand_forme.png" alt="GRAND FORME"></img>
        </div>
        <div>
          <img src="./logos/forme.png" alt="FORME"></img>
        </div>
        <div>
          <img src="./logos/cosmos.png" alt="COSMOS"></img>
        </div>
        <div>
          <img src="./logos/initia_io.png" alt="INITIA IO"></img>
        </div>
        <div>
          <img src="./logos/initia_cloud.png" alt="INIITA CLOUD"></img>
        </div>
        <div>
          <img src="./logos/initia_gran.png" alt="INITIA GRAN"></img>
        </div>
        <div>
          <img src="./logos/gran_cosmos.png" alt="GRAN COSMOS"></img>
        </div>
        <div>
          <img src="./logos/initia_terrace.png" alt="INITIA TERRACE"></img>
        </div>
        <div>
          <img src="./logos/row_house.png" alt="ROW HOUSE"></img>
        </div>
        <div>
          <img src="./logos/initia_forum.png" alt="INITIA FORUM"></img>
        </div>
        <div>
          <img src="./logos/grand_forum.png" alt="GRAND FORUM"></img>
        </div>
        <div>
          <img src="./logos/cosmos_avenue.png" alt="COSMOS AVENUE"></img>
        </div>
        <div>
          <img src="./logos/initia_renovation.png" alt="INITIA RENOVATION"></img>
        </div>
        <div>
          <img src="./logos/reno_mark.png" alt="RENO MARK"></img>
        </div>
      </Slider>
    </>
  )
}

export default App;
