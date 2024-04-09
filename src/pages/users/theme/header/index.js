import { memo, useState } from 'react'
import "./style.scss"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineUser, AiFillMail, AiFillCar, AiOutlineMenu, AiOutlinePhone  } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';
import { ROUTERS } from 'utils/router';

const Header = () => {

  const [isShowCategories, setIsShowCategories] = useState(true)
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },{
          name: "Thức ăn nhanh",
          path: "",
        },
      ]
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.HOME
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.HOME
    },
  ])
  return (
    <>
      <div className='header_top'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 header_top_left'>
            <ul>
              <li>
                <AiFillMail />
                hello@gmail.com
              </li>
              <li>
                <AiFillCar />
                miễn phí ship từ {formatter(200000)}
              </li>
            </ul>
          </div>
          <div className='col-6 header_top_right'>
            <ul>
              <li>
                <Link to={""}>
                  <AiFillFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiFillTwitterSquare />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineUser />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-3'>
            <div className='header__logo'>
              <h1>HOSHOP</h1>
            </div>
          </div>
          <div className='col-xl-6'>
            {/* MAP */}
            <div className='header__menu'>
              <ul>
                {menus?.map((menu, menukey) => (
                    <li key={menukey} className={menukey === 0 ? 'active' : ""}>
                     <Link to={menu?.path}>{menu?.name}</Link>
                     {menu.child && (
                        <ul className='header__menu__dropdown'>
                          {menu.child.map((childItem, childKey) => (
                              <li key={`${menukey}-${childKey}`}>
                                <Link to={childItem.path}>{childItem.name}</Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className='header__cart'>
              <div className='header__cart__price'>
                <span>{formatter(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <BsCart4 /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row hero__categories_container'>
          <div className='col-lg-3 hero__categories'>
            <div className='hero__categories_all' onClick={() => setIsShowCategories(!isShowCategories)}>
              <AiOutlineMenu/>
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                <li>
                  <Link to={"#"}>Thịt tươi</Link>
                </li>
                <li>
                  <Link to={"#"}>Rau củ</Link>
                </li>
                <li>
                  <Link to={"#"}>Nước trái cây</Link>
                </li>
                <li>
                  <Link to={"#"}>Trái cây</Link>
                </li>
                <li>
                  <Link to={"#"}>Hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className='col-lg-9 hero_search_container'> 
            <div className='hero__search'>
              <div className='hero__search__form'>
                <form>
                  <input type='text' name='' value='' placeholder='Bạn đang làm gì' />
                  <button type='submit'>Tìm kiếm</button>
                </form>
              </div>
              <div className='hero__search__phone'>
                <div className='hero__search__phone__icon'>
                  <AiOutlinePhone/>
                </div>
                <div className='hero__search__phone__text'>
                  <p>0656.777.999</p>
                  <span> Hỗ trợ 24/7 </span>
                </div>
              </div>
            </div>
            <div className='hero__item'>
              <div className='hero__text'>
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br/>
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className='primary-btn'>
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)