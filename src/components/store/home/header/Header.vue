<template lang="">
  <div style="position: fixed; z-index: 99; background-color: #ffff">
    <div class="header-wrapper">
      <div class="header-wrapper__content">
        <div to="/" class="no-underline header-wrapper__content__left">
          <router-link to="/" class="header-wrapper__content__left"
            ><img src="@/assets/logo_nobg.png" alt="" style="height: 40px" />
            <h2>TWENTI</h2>
          </router-link>

          <span class="searcher p-input-icon-left mr-3 ml-3">
            <InputText
              style="border-radius: 1000px"
              type="text"
              v-model="value2"
              placeholder="Mặt nạ, dưỡng da, son môi, dưỡng ẩm,..."
            />
            <i class="pi pi-search" />
          </span>
        </div>

        <div class="header-wrapper__content__right-group-buttons">
          <i
            @click="count++"
            class="pi pi-ellipsis-h"
            style="font-size: 20px"
          ></i>
          <i
            @click="count++"
            class="pi pi-user ml-3"
            style="font-size: 20px"
          ></i>

          <i
            @click="count++"
            class="pi pi-heart mx-3"
            style="font-size: 20px"
          ></i>
          <i
            @click="visibleCart = true"
            class="pi pi-shopping-bag"
            style="font-size: 20px"
            v-badge="2"
          ></i>
        </div>
      </div>
    </div>
   

     <!--navigation here-->
	
	<nav class="navigation">
		
		<li class="navigation__item navigation__item--has-submenu">
      <div>

        <a href="#" class="navigation__link"> Khuyến mãi
          <i class="pi pi-angle pi-angle-down" style="font-size: 2rem, padding: 0"></i>
        </a>
        
      </div>
			<div class="submenu">
				<div class="submenu__content">
					<div class="submenu__box">
						<ul class="submenu-navigation">
							<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									
									<span class="submenu-navigation__title">Tháng 9 rực rỡ- rạng ngời da yêu</span>
									
								</a>
							</li>
							
							
							
						</ul>
					</div>
					
				</div>
				
			</div>
		</li>

    <!--navigation 2-->
    <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link"> Thương hiệu 
        <i class="pi pi-angle pi-angle-down" style="font-size: 2rem, padding: 0"></i>
      </a>
			<div class="submenu">
				<div class="submenu__content">
					<div class="submenu__box">
						<ul class="submenu-navigation">
							<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Tất cả thương hiệu</span>
						<span class="submenu-navigation__subtitle">The face shop </span>
									<span class="submenu-navigation__subtitle">CPN  </span>
									<span class="submenu-navigation__subtitle">
										FMGT </span><span class="submenu-navigation__subtitle">Belif</span><span class="submenu-navigation__subtitle">Cocoon </span>
									
								</a>
							</li>
							
						</ul>
					</div>
					
				</div>
				
			</div>
		</li>
    <!--navigation 3: san pham moi -->
    <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link"> Sản phẩm mới
       
      </a>
      </li>
    <!--navigation 4 : sản phẩm mới-->
    <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link">Trang điểm
       <i class="pi pi-angle pi-angle-down" style="font-size: 2rem, padding: 0"></i>
      </a>
			<div class="submenu">
				<div class="submenu__content">
					<div class="submenu__box">
						<ul class="submenu-navigation">
							<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Trang điểm mặt</span>
						<span class="submenu-navigation__subtitle">Kem nền</span>
									<span class="submenu-navigation__subtitle">Kem lót </span>
									<span class="submenu-navigation__subtitle">
										Kem che khuyết điểm </span><span class="submenu-navigation__subtitle">Má hồng</span><span class="submenu-navigation__subtitle">Phẩn phủ</span>
									
								</a>
									<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Trang điểm môi</span>
						<span class="submenu-navigation__subtitle">Son thỏi </span>
									<span class="submenu-navigation__subtitle">Son bóng  </span>
									<span class="submenu-navigation__subtitle">
										Son dưỡng môi</span><span class="submenu-navigation__subtitle">Son trị khô môi</span>
									
								</a>
							</li>
							</li>
							
							
						
							
						</ul>
					</div>
					
				</div>
				
			</div>
		</li>
		
        <!--navigation 5: dưỡng da-->
        <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link"> Dưỡng da


        <i class="pi pi-angle pi-angle-down" style="font-size: 2rem, padding: 0"></i>
         </a>
			<div class="submenu">
				<div class="submenu__content">
					<div class="submenu__box">
						<ul class="submenu-navigation">
							<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Làm mặt</span>
						<span class="submenu-navigation__subtitle">Nước cân bằng</span>
									<span class="submenu-navigation__subtitle">Xịt khoáng</span>
									<span class="submenu-navigation__subtitle">
										Sữa dưỡng </span><span class="submenu-navigation__subtitle">Tinh chất dưỡng</span><span class="submenu-navigation__subtitle">	Kem dưỡng mắt</span>
									
								</a>
									<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Làm sạch</span>
						<span class="submenu-navigation__subtitle">Sửa rửa mặt </span>
									<span class="submenu-navigation__subtitle">Tẩy trang da mắt  </span>
									<span class="submenu-navigation__subtitle">
										Tẩy tế bào chết</span><span class="submenu-navigation__subtitle">Phụ kiện làm sạch</span>
									
								</a>
							</li>
							</li>
							
							
						
							
						</ul>
					</div>
					
				</div>
				
			</div>
		</li>
            <!--navigation 6 : cham sóc cơ thể-->
            <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link"> Chăm sóc cơ thể 
        <i class="pi pi-angle pi-angle-down" style="font-size: 2rem, padding: 0"></i>
      </a>
			<div class="submenu">
				<div class="submenu__content">
					<div class="submenu__box">
						<ul class="submenu-navigation">
							<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Chăm sóc body </span>
						<span class="submenu-navigation__subtitle">Sữa tắm </span>
									<span class="submenu-navigation__subtitle">Dưỡng thể</span>
									<span class="submenu-navigation__subtitle">
										Nước hoa/Xịt thơm </span><span class="submenu-navigation__subtitle">Nước cân bằng da</span><span class="submenu-navigation__subtitle">	Kem bảo vệ da</span>
									
								</a>
									<li class="submenu-navigation__item">
								<a href="#" class="submenu-navigation__link">
									<span class="submenu-navigation__icon" data-feather="hexagon"></span>
									<span class="submenu-navigation__title">Chăm sóc tóc</span>
						<span class="submenu-navigation__subtitle">Dầu gội </span>
									<span class="submenu-navigation__subtitle">Dầu dưỡng tóc  </span>
									<span class="submenu-navigation__subtitle">
										Dầu xả</span><span class="submenu-navigation__subtitle">Tinh dầu dưỡng tóc</span>
									
								</a>
							</li>
							</li>
							
							
						
							
						</ul>
					</div>
					
				</div>
				
			</div>
		</li>
                <!--navigation 7: -->
                <li class="navigation__item navigation__item--has-submenu">
			<a href="#" class="navigation__link"> Nhận mã ưu đãi
        
      </a>
      </li>
                    <!---->    
		
		
	</nav>



  
  </div>
</template>

<script>
import Cart from "@/components/store/home/cart/Cart.vue";

export default {
  data() {
    return {
      count: 9,
      visibleCart: false,
    };
  },
  components: {
    Cart,
  },
};
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}


.header-wrapper {
  width: 1600px;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background-color: red;

  &__content {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: gray;

    &__left {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.header-wrapper__sub-nav ul a {
  width: 68px;
  height: 28px;

  text-decoration: none;

  /* Link */

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  text-align: center;
  letter-spacing: 0.2px;

  /* text */

  color: #252b42;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.header-wrapper__sub-nav {
  position: relative;
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 0 50px;

  &__content {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    background-color: gray;
  }
}



@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap");

$blue: #4f64f5;

body {
	width: 100vw;
	height: 100vw;
}

ul {
	padding-left: 0;
	margin: 0;
}

.header {
	background: #fff;
	padding: 10px 7%;
	display: flex;
	align-items: center;
	border-bottom: 1px #f1f1f1 solid;
}


.navigation {
	$bem-block: &;
  border: 1px solid black;

	&__item {
		display: inline-block;
		margin: 0 15px;
		position: relative;
		transition: 0.2s ease-in-out;

		&::before {
			content: "";
			width: 6px;
			height: 6px;
			background: $blue;
			border-radius: 50%;
			position: absolute;
			left: 5px;
			top: 18px;
			transition: 0.2s ease-in-out;
			opacity: 0;
		}

		&:hover {
			&::before {
				opacity: 1;
				transform: translateX(2px);
			}
		}

		&:hover #{$bem-block}__link {
			color: $blue;
		}
	}

	&__link {
		display: block;
		padding: 10px 20px;
		text-decoration: none;
		color: #333;
		font-size: 1.25rem;
		font-weight: 500;
		font-family: "Noto Sans JP", sans-serif;
	}
}

.submenu {
	$bem-block: &;

	opacity: 0;
	visibility: hidden;
	position: absolute;
	top: 50px;
	left: 0;
	width: 750px;
	background: #fff;
	border-radius: 20px;
	border: 1px #f1f1f1 solid;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
	transition: 0.5s;
	transform: translateY(50px);
	z-index: 0;

	&__content {
		display: flex;
		padding: 30px 20px 0 20px;
	}

	&__box {
		width: 50%;
		padding-right: 15px;

		&:not(:first-of-type) {
			padding-left: 25px;
			border-left: 2px #f1f1f1 solid;
		}
	}

	&__image {
		width: 100%;
	}

	&__footer {
		background: $blue;
		border-radius: 0 0 20px 20px;
		margin-top: 35px;
		transition: 0.2s ease-in-out;

		&:hover {
			background: darken($blue, 5%);
		}

		&:hover #{$bem-block}__link {
			transform: translateX(3px);
		}
	}

	&__link {
		padding: 20px 30px;
		color: #fff;
		text-decoration: none;
		font-weight: 400;
		display: block;
		position: relative;
		display: flex;
		line-height: 1.5;
		justify-content: space-between;
		transition: 0.2s;
	}
}

.submenu-navigation {
	$bem-block: &;

	list-style-type: none;

	&__item {
		&:not(:first-of-type) {
			margin-top: 5px;
		}
	}

	&__link {
		text-decoration: none;
		display: block;
		padding: 15px 20px 15px 90px;
		position: relative;

		&:hover {
			background: #f2f2f2;
			border-radius: 10px;
		}

		&:hover #{$bem-block}__icon {
			transform: translateY(-50%) translateX(4px);
		}
	}

	&__icon {
		width: 50px;
		height: 50px;
		color: $blue;
		position: absolute;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		transition: 0.2s ease-in-out;
	}

	&__title,
	&__subtitle {
		display: block;
		font-family: "Noto Sans JP", sans-serif;
	}

	&__title {
		font-weight: 700;
		color: #333;
		font-size: 1.15rem;
	}

	&__subtitle {
		color: #c9c9c9;
		margin-top: 10px;
		font-size: 0.95rem;
		font-weight: 500;
	}
}

.navigation__item:hover {
	.submenu {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		z-index: 1;
	}
}

.label {
	background: #a477f8;
	font-weight: 400;
	font-size: 10px;
	margin-top: -5px;
	display: inline-block;
	color: #fff;
	padding: 3px 8px;
	border-radius: 5px;
	text-transform: uppercase;
}

.info {
	position: absolute;
	right: 10px;
	bottom: 10px;
	padding: 20px;
	color: #c5c5c5;
	font-family: "Noto Sans JP", sans-serif;
	font-weight: 300;
	font-size: 12px;

	a {
		color: #c5c5c5;
	}
}

.navigation__link{
  font-family: 'Montserrat';
  font-weight: 500px;
}
.navigation__item navigation__item--has-submenu{
  display: relative;
}
</style>
