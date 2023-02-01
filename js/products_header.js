const headerContent=`
<header class="header_style_2">
  <div class="container-fluid px-0">
      <nav class="navbar navbar-expand-lg">
          <div class="container px-0">
            <!-- toggle btn -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
             <!-- custom main-nav -->
            <div class="collapse navbar-collapse header_nav" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link  active" aria-current="page" href="../../index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Corporateoverview</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">marketsegment</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#" >
                      products
                  </a>
                  <ul class="sub-menu product_sub_menu commn_sub_menu_height px-2 pb-3">
                      <div class="container">
                          <div class="micro_menu row mx-0 d-flex">
                              <div class="micro_menu_li w-auto"  onclick='window.open("../Flexible_Pipe_System/FlexiblePipeSystem.html");'>
                                  <li class="clickme micro_menu_li_head">
                                    <a class=" inner_item">Flexible Pipe System</a></li>
                                  <li><a href="">Rubber Expansion Bellow </a></li>
                                  <li><a href="">Union Rubber Bellow</a></li>
                                  <li><a href="">Stainless steel bellow</a></li>
                                  <li><a href="">Fabric bellow</a></li>
                                  <li><a href="">Pneumatic Air Bellow </a></li>
                                  <li><a href="">PTFE Bellow  </a></li>  
                                  <li><a href="">Protective bellow  </a></li>
                                  <li><a href="">Bus Duct Bellow  </a></li>
                              </div>
                              <div class="micro_menu_li w-auto" onclick='window.open("../Vibration_Isolation/Vibration_Isolation.html");'>
                                  <li class="micro_menu_li_head"><a href="" class="">Vibration Isolation</a></li>                                        
                                  <li><a href="">Pad  </a></li>
                                  <li><a href="project-detail.html">Rubber and Metal Bonded anti vibration mounded</a></li>
                                  <li><a href="project-grid.html">Spring Based Vibration Isolator </a></li>                                        
                                  <li><a href="project-masonry.html">Riser Isolator Support </a></li>
                                  <li><a href="project-carousel.html">Wire Rope Suspension System </a></li>
                              </div>
                              <div class="micro_menu_li  w-auto" onclick='window.open("../Mechanical_Seal/Mechanical_Seal.html");'>
                                  <li class="micro_menu_li_head"><a href="" >Mechanical seal</a></li>                                        
                                  <li><a href="project-masonry.html">Rubber Bellow Seal </a></li>
                                  <li><a href="project-carousel.html">Metal Bellow Seal </a></li>
                                  <li><a href="project-detail.html">Teflon Bellow Seal </a></li>
                                  <li><a href="project-grid.html">Grundfos Mechanical seal </a></li>
                                  <li><a href="project-carousel.html">Multi Spring Mechanical Seal  </a></li>
                                  <li><a href="project-detail.html">Single Spring Mechanical Seal  </a></li>
                                  <li><a href="project-detail.html">Agitator Seal  </a></li>
                                  <li><a href="project-detail.html">Cartridge Seal  </a></li>
                                  <li><a href="project-detail.html">Dry Running Seal  </a></li>
                              </div>
                              <div class="micro_menu_li  w-auto" onclick='window.open("../Flexible_Hose/Flexible_Hose.html");'>
                                  <li class="micro_menu_li_head"><a href="project-grid.html" >Flexible Hose </a></li>                                        
                                  <li><a href="project-masonry.html">Stainless Steel Hose   </a></li>
                                  <li><a href="project-carousel.html">Rubber Hose   </a></li>
                                  <li><a href="project-detail.html">Spiral Hose</a></li>
                                  <li><a href="project-grid.html">PTFE Hose </a></li>
                              </div>
                              <div class="micro_menu_li w-auto" onclick='window.open("../Customized/Customized.html");'>
                                  <li class="micro_menu_li_head"><a href="project-grid.html" >Customized</a></li>                                        
                                  <li><a href="project-masonry.html">Piston Seal  </a></li>
                                  <li><a href="project-carousel.html">O-ring  </a></li>
                                  <li><a href="project-detail.html">Channel  </a></li>
                                  <li><a href="project-grid.html">Gasket </a></li>                                        
                                  <li><a href="project-masonry.html"> Coupling </a></li>
                                  <li><a href="project-carousel.html">Rubber Sheet  </a></li>
                                  <li><a href="project-detail.html">Mat</a></li>
                              </div>
                          </div>
                      </div>
                      
                  </ul> 
                </li>
               
                <li class="nav-item">
                  <a class="nav-link  active" aria-current="page" href="#">contact us</a>
                </li>
              </ul>
            </div>

          </div>
      </nav>
  </div>
</header>
`
document.getElementById('product_main_header').innerHTML= headerContent