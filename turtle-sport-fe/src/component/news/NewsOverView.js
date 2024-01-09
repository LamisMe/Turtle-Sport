import { SildebarUser } from "../sidebar/SidebarUser";

export function NewsOverview(){
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
                      </li>
                    </ul>
                  </div>
                </div>
    
              <div class="dashboard-content px-3 pt-4"></div>
            </div>
          </div>
        </>
      );
}