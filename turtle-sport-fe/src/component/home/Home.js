import { SildebarUser } from "../sidebar/SidebarUser";
import "./home.css";
export function Home() {
  return (
    <>
      <div class="main-container d-flex">
        <SildebarUser />
        <div class="content">
            <div class="container-fluid">
              <div class="d-flex justify-content-between d-md-none d-block">
                <button class="btn px-1 py-0 open-btn me-2">
                  <i class="bx bx-menu"></i>
                </button>            
              </div>
              <button
                class="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fal fa-bars"></i>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="cart.html"
                    >
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          <div class="dashboard-content px-3 pt-4">
          <div class="jumbotron">
    <div class="container">
      <h1 class="display-4">Chào mừng đến Turtle</h1>
      <p class="lead">Thế giới thể thao trong tầm tay của bạn</p>
    </div>
  </div>

  <div class="container">
  <div class="post">
      <h5>Đăng bài mới</h5>
      <form id="new-post-form">
        <div class="mb-3">
          <label for="post-content" class="form-label">Nội dung</label>
          <textarea class="form-control" id="post-content" rows="3" placeholder="Nhập nội dung"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Đăng bài</button>
      </form>
    </div>
    <div class="post">
      <h5>Tìm sân tại Quận Hải Châu</h5>
      <p>Mình cần tìm sân vào ngày 12/01 tới đây ai biết ở đâu có không ạ</p>
      <div class="post-action">
        <span class="like-button">Thích</span>
        <div>
          <input type="text" class="comment-input" placeholder="Viết bình luận..."/>
          <button class="btn btn-primary">Gửi</button>
        </div>
      </div>
      <div class="comment-list">
  
      </div>
    </div>
    <div class="post">
      <h5>Tìm đối tại Quận Thanh Kê</h5>
      <p>Ai đá không ạ</p>
      <div class="post-action">
        <span class="like-button">Thích</span>
        <div>
          <input type="text" class="comment-input" placeholder="Viết bình luận..."/>
          <button class="btn btn-primary">Gửi</button>
        </div>
      </div>
      <div class="comment-list">
       
      </div>
    </div>
  </div>

        </div>
      </div>
      </div>
    </>
  );
}
