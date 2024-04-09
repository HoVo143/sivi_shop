import { memo } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';

const HomePage = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const sliderItems = [
    {
      bgImg: 'https://bizweb.dktcdn.net/thumb/large/100/390/808/products/tao-fujji-ae0e548e6dad48938bd3b4e860850ed9.jpg?v=1593677607867',
      name: "Táo"
    },
    {
      bgImg: 'https://lh5.googleusercontent.com/proxy/OUJypAKE_o7ewO8uyaMXhvKN4UEClTjWz_Ku2MjVG58WddF8dkhQIt_XZJcSakpAahDLoe7-uukfAglW4otFOwwElY7ax3wD-v_VzXEEN3iO0xRXRHBSmIjtVjCsV2Vjp4Thd1sAjDCiPj61Fs3wL77H7A',
      name: "Cam tươi"
    },
    {
      bgImg: 'https://media.doisongphapluat.com/media/nguyen-thi-linh/2023/12/12/8-loai-trai-cay-cang-an-cang-sang-mat-ban-da-biet-dspl1.jpg',
      name: "Nho"
    },
    {
      bgImg: 'https://sunsay.vn/wp-content/uploads/2021/09/rau-cu-tuoi.jpg',
      name: "Rau củ tươi"
    },
    {
      bgImg: 'https://kingfoodmart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fsc_pcm_product%2Fprod%2F2023%2F11%2F14%2F17534-102326.jpg&w=3840&q=75',
      name: "Thịt bò"
    },
  ]

  const feaproducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: "https://leaufood.com/wp-content/uploads/2021/12/thit-bo-bao-nhieu-protein-1.jpg",
          name: "Thịt bò nạt",
          price: 220000,
        },
        {
          img: "https://binhdienonline.com/thumbs_size/product/2021_04/chuoi-tieu-chin/[550x550-cr]chuoi-tieu-47.jpg",
          name: "Chuối",
          price: 20000,
        },
        {
          img: "https://buoidienbaominh.com/uploads/images/nho-den-ninh-thuan.jpg",
          name: "Nho tím",
          price: 20000,
        },
        {
          img: "https://www.lottemart.vn/media/catalog/product/cache/0x0/2/1/2191360000002-1.jpg.webp",
          name: "Xoài",
          price: 20000,
        },
        {
          img: "https://wrfarmers.com/wp-content/uploads/2021/09/ca-rot.jpg",
          name: "Cà rốt",
          price: 20000,
        }
        ,
        {
          img: "https://www.disneycooking.com/wp-content/uploads/2020/06/mon-ngon-tu-thit-lon.jpg?w=1130",
          name: "Thịt heo",
          price: 20000,
        }
      ]
    },
    fruits: {
      title: "Trái cây",
      products: [
        {
          img: "https://binhdienonline.com/thumbs_size/product/2021_04/chuoi-tieu-chin/[550x550-cr]chuoi-tieu-47.jpg",
          name: "Chuối",
          price: 20000,
        },
        {
          img: "https://buoidienbaominh.com/uploads/images/nho-den-ninh-thuan.jpg",
          name: "Nho tím",
          price: 20000,
        },
        {
          img: "https://www.lottemart.vn/media/catalog/product/cache/0x0/2/1/2191360000002-1.jpg.webp",
          name: "Xoài",
          price: 20000,
        },
        {
          img: "https://wrfarmers.com/wp-content/uploads/2021/09/ca-rot.jpg",
          name: "Cà rốt",
          price: 20000,
        }
      ]
    }
    ,
    vegetable: {
      title: "Rau củ",
      products: [
        {
          img: "https://wrfarmers.com/wp-content/uploads/2021/09/ca-rot.jpg",
          name: "Cà rốt",
          price: 20000,
        }
      ]
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: "https://leaufood.com/wp-content/uploads/2021/12/thit-bo-bao-nhieu-protein-1.jpg",
          name: "Thịt bò nạt",
          price: 20000,
        },
        {
          img: "https://www.disneycooking.com/wp-content/uploads/2020/06/mon-ngon-tu-thit-lon.jpg?w=1130",
          name: "Thịt heo",
          price: 20000,
        }
      ]
    }
  }

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];
    
    Object.keys(data).forEach((key, index) => {
      // console.log(key, index)
      tabList.push(<Tab key={index}>{data[key].title}</Tab>)
      
      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div className='col-lg-3' key={j}> 
            <div className='featured__item'>
              <div className='featured__item__pic'
                style={{
                  backgroundImage: `url(${item.img})`
                }}
              >
                <ul className='featured__item__pic__hover'>
                  <li>
                    <AiOutlineEye/>
                  </li>
                  <li>
                    <AiOutlineShoppingCart/>
                  </li>
                </ul>
              
              </div>
              <div className='featured__item__text'>
                <h6>
                  <Link to="">{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        )
      })
      tabPanels.push(tabPanel);
    });


    return (
      <Tabs>
        <TabList>
          {tabList}
        </TabList>
      {
        tabPanels.map((item, key)=> (
          <TabPanel key={key}>
            <div className='row'> {item} </div>
          </TabPanel>
        ))
      }
    </Tabs>
    )
  }

  return (
    <>
      <div className='container container__categories_slider'>
        <Carousel responsive={responsive} className='categories_slider'>
          {
            sliderItems.map((item, key) => (
              <div key={key} className='categories_slider_item'
                style={{ backgroundImage: `url(${item.bgImg})`}}
              >
                <p>{item.name}</p>
              </div>
            ))
          }
        </Carousel>
      </div>
      {/*  */}
      <div className='container'>
          <div className='featured'>
            <div className='section-title'>
              <h2>Sản phẩm nổi bật</h2>
            </div>
              {renderFeaturedProducts(feaproducts)}
          </div>
      </div>
      {/*  */}
      <div className='container'>
          <div className='banner'>
            <div className='banner_pic'>
              <img src='https://png.pngtree.com/template/20221227/ourmid/pngtree-advertise-template-with-fruits-smoothies-concept-design-for-marketing-and-commercial-image_1896180.jpg' alt='banner' />
            </div>
            <div className='banner_pic'>
              <img src='https://simg.zalopay.com.vn/zlp-website/assets/Nutriboot_T2_720x360_51beb57fa3.jpg' alt='banner' />
            </div>
          </div>
      </div>
    </>
  )
}

export default memo(HomePage)