import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-top conn_flex-between">
          <div className="top--left">
              <ul className="actions conn_flex">
                  <li>
                      <div className="li--box conn_flex-cleft">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                              <g transform="translate(0.5 0.5)">
                                  <path fill="#999" stroke="#999" stroke-linecap="square" stroke-width="1" opacity="0"/>
                                  <g transform="translate(0.5)">
                                      <path d="M18,22l-.061,0A17,17,0,0,1,2,6.061L2,6A3,3,0,0,1,5,3H9.677l2.568,6.419-2.4,1.442a10.082,10.082,0,0,0,3.3,3.3l1.442-2.4L21,14.323V19A3,3,0,0,1,18,22ZM4,5.974A15.015,15.015,0,0,0,18.026,20,1,1,0,0,0,19,19V15.677l-3.581-1.432L13.884,16.8l-.826-.407A12.064,12.064,0,0,1,7.6,10.942L7.2,10.116,9.755,8.581,8.323,5H5a1,1,0,0,0-1,.974Z" fill="#999"/>
                                  </g>
                              </g>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                              <g transform="translate(0.5 0.5)">
                                  <path d="M0,0H24V24H0Z" fill="#f15a29" stroke="#999" stroke-linecap="square" stroke-width="1" opacity="0"/>
                                  <g transform="translate(0.5)">
                                      <path d="M18,22l-.061,0A17,17,0,0,1,2,6.061L2,6A3,3,0,0,1,5,3H9.677l2.568,6.419-2.4,1.442a10.082,10.082,0,0,0,3.3,3.3l1.442-2.4L21,14.323V19A3,3,0,0,1,18,22ZM4,5.974A15.015,15.015,0,0,0,18.026,20,1,1,0,0,0,19,19V15.677l-3.581-1.432L13.884,16.8l-.826-.407A12.064,12.064,0,0,1,7.6,10.942L7.2,10.116,9.755,8.581,8.323,5H5a1,1,0,0,0-1,.974Z" fill="#f15a29"/>
                                  </g>
                              </g>
                            </svg>                              
                          <span>Liên hệ mua hàng</span>
                      </div>
                      <div className="li--dropdown">
                          <div className="dropdown--close conn_relative">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/>
                                  <g>
                                      <path d="M0,0H24V24H0Z" fill="none"/>
                                      <line x1="12" y2="12" transform="translate(6 6)" fill="none" stroke="#010001" stroke-width="2"/>
                                      <line x2="12" y2="12" transform="translate(6 6)" fill="none" stroke="#010001" stroke-width="2"/>
                                  </g>
                              </svg>                                  
                          </div>
                          <div className="dropdown--heading conn_relative">Tư vấn - bán hàng</div>
                          <div className="dropdown--list conn_relative">
                              <div className="child">
                                  <div className="child--title">ICAR Miền Bắc</div>
                                  <div className="child--items">
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mrs. Hương</span>
                                                  <strong>096.378.0867</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <img src="images/icon-zalo.svg" alt="Image" />
                                              </a>
                                              <a href="#">
                                                  <img src="images/icon-message.svg" alt="Image" />
                                              </a>
                                          </div>
                                      </div>
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mr. Tân</span>
                                                  <strong>086.8899.492</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <img src="images/icon-zalo.svg" alt="Image" />
                                              </a>
                                              <a href="#">
                                                  <img src="images/icon-message.svg" alt="Image" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="child">
                                  <div className="child--title">ICAR Miền Trung</div>
                                  <div className="child--items">
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mrs. Hoa</span>
                                                  <strong>0389.305.809</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <img src="images/icon-zalo.svg" alt="Image" />
                                              </a>
                                              <a href="#">
                                                  <img src="images/icon-message.svg" alt="Image" />
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="child">
                                  <div className="child--title">ICAR Miền Nam</div>
                                  <div className="child--items">
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mr. Trung</span>
                                                  <strong>086.953.1187</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path id="Path_19647" data-name="Path 19647" d="M11.058.166h2.127a12.137,12.137,0,0,1,6.144,1.242,8.419,8.419,0,0,1,3.515,3.515,12.137,12.137,0,0,1,1.242,6.144v2.118a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H11.067a12.137,12.137,0,0,1-6.144-1.242,8.419,8.419,0,0,1-3.515-3.515A12.137,12.137,0,0,1,.166,13.185V11.067A12.137,12.137,0,0,1,1.408,4.923,8.419,8.419,0,0,1,4.923,1.408,12.1,12.1,0,0,1,11.058.166Z" transform="translate(-0.166 -0.086)" fill="#0068ff" fill-rule="evenodd"/>
                                                    <path id="Path_19648" data-name="Path 19648" d="M27.771,26.474v.35a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H14.752a13.385,13.385,0,0,1-5.293-.837L7.275,34.638Z" transform="translate(-3.852 -13.724)" fill="#001a33" fill-rule="evenodd" opacity="0.12"/>
                                                    <path id="Path_19649" data-name="Path 19649" d="M5.965,20.992a7,7,0,0,0,3.51-.677c4.312,2.384,11.053,2.27,15.134-.342q.237-.356.443-.74A12.181,12.181,0,0,0,26.3,13.066V10.941a12.181,12.181,0,0,0-1.246-6.167,8.45,8.45,0,0,0-3.528-3.528A12.181,12.181,0,0,0,15.358,0H13.223A13.114,13.114,0,0,0,7.743.915q-.112.1-.219.2c-4,3.852-4.3,12.2-.911,16.739l.013.02c.522.77.018,2.117-.77,2.9C5.727,20.9,5.773,20.974,5.965,20.992Z" transform="translate(-2.299)" fill="#fff" fill-rule="evenodd"/>
                                                    <path id="Path_19650" data-name="Path 19650" d="M15.384,17H10.7v1h3.25l-3.2,3.971a.9.9,0,0,0-.173.593v.256h4.419a.405.405,0,0,0,.4-.4v-.539H11.979l3.013-3.78c.046-.055.128-.155.164-.2l.018-.027a1.193,1.193,0,0,0,.21-.739Z" transform="translate(-5.561 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19651" data-name="Path 19651" d="M32.578,22.825h.666V17h-1v5.487A.337.337,0,0,0,32.578,22.825Z" transform="translate(-16.793 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19652" data-name="Path 19652" d="M23.357,19.692a2.282,2.282,0,1,0,2.282,2.282A2.283,2.283,0,0,0,23.357,19.692Zm0,3.624A1.342,1.342,0,1,1,24.7,21.975,1.344,1.344,0,0,1,23.357,23.317Z" transform="translate(-11.005 -10.209)" fill="#0068ff"/>
                                                    <path id="Path_19653" data-name="Path 19653" d="M38.01,19.616a2.3,2.3,0,1,0,2.3,2.3A2.3,2.3,0,0,0,38.01,19.616Zm0,3.661a1.351,1.351,0,1,1,1.351-1.351A1.348,1.348,0,0,1,38.01,23.277Z" transform="translate(-18.592 -10.169)" fill="#0068ff"/>
                                                    <path id="Path_19654" data-name="Path 19654" d="M29.024,24.358h.539v-4.4h-.94v4.008A.4.4,0,0,0,29.024,24.358Z" transform="translate(-14.918 -10.346)" fill="#0068ff"/>
                                                  </svg>
                                              </a>
                                              <a href="#">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                    <defs>
                                                      <radialGradient id="radial-gradient" cx="0.192" cy="0.995" r="1.09" gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stop-color="#09f"/>
                                                        <stop offset="0.61" stop-color="#a033ff"/>
                                                        <stop offset="0.935" stop-color="#ff5280"/>
                                                        <stop offset="1" stop-color="#ff7061"/>
                                                      </radialGradient>
                                                    </defs>
                                                    <path id="Path" d="M124.5,122c-7.042,0-12.5,5.158-12.5,12.125a11.86,11.86,0,0,0,3.926,8.968,1,1,0,0,1,.336.713l.068,2.223a1,1,0,0,0,1.4.884l2.481-1.1a1,1,0,0,1,.668-.049,13.631,13.631,0,0,0,3.618.48c7.042,0,12.5-5.158,12.5-12.125S131.542,122,124.5,122Z" transform="translate(-112 -122)" fill-rule="evenodd" fill="url(#radial-gradient)"/>
                                                    <path id="Path-2" data-name="Path" d="M268.81,398.493l3.672-5.826a1.875,1.875,0,0,1,2.711-.5l2.92,2.19a.75.75,0,0,0,.9,0l3.944-2.993a.594.594,0,0,1,.861.79l-3.672,5.826a1.875,1.875,0,0,1-2.711.5l-2.921-2.19a.75.75,0,0,0-.9,0l-3.944,2.993A.594.594,0,0,1,268.81,398.493Z" transform="translate(-263.817 -382.822)" fill="#fff" fill-rule="evenodd"/>
                                                  </svg>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div className="li--box conn_flex-cleft">
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                              <g transform="translate(1 1)">
                                  <path d="M0,0H24V24H0Z" fill="#f15a29" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity="0"/>
                                  <g>
                                      <circle cx="4" cy="4" r="4" transform="translate(8 8)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <circle cx="9" cy="9" r="9" transform="translate(3 3)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x2="3.35" y2="3.35" transform="translate(15 15)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x1="3.35" y2="3.35" transform="translate(5.65 15)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x2="3.35" y2="3.35" transform="translate(5.65 5.65)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x1="3.35" y2="3.35" transform="translate(15 5.65)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                  </g>
                              </g>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                              <g transform="translate(0.5 0.5)">
                                  <path d="M0,0H24V24H0Z" fill="#f15a29" stroke="#f15a29" stroke-linecap="square" stroke-width="1" opacity="0"/>
                                  <g>
                                      <circle cx="4" cy="4" r="4" transform="translate(8 8)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <circle cx="9" cy="9" r="9" transform="translate(3 3)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x2="3.35" y2="3.35" transform="translate(15 15)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x1="3.35" y2="3.35" transform="translate(5.65 15)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x2="3.35" y2="3.35" transform="translate(5.65 5.65)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <line x1="3.35" y2="3.35" transform="translate(15 5.65)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                  </g>
                              </g>
                          </svg>
                          <span>Hỗ trợ kỹ thuật</span>
                      </div>
                      <div className="li--dropdown">
                          <div className="dropdown--close conn_relative">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/>
                                  <g>
                                      <path d="M0,0H24V24H0Z" fill="none"/>
                                      <line x1="12" y2="12" transform="translate(6 6)" fill="none" stroke="#010001" stroke-width="2"/>
                                      <line x2="12" y2="12" transform="translate(6 6)" fill="none" stroke="#010001" stroke-width="2"/>
                                  </g>
                              </svg>
                          </div>
                          <div className="dropdown--heading conn_relative">Hỗ trợ kỹ thuật</div>
                          <div className="dropdown--list conn_relative">
                              <div className="child">
                                  <div className="child--items">
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mr. Cảnh</span>
                                                  <strong>097.6056.016</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path id="Path_19647" data-name="Path 19647" d="M11.058.166h2.127a12.137,12.137,0,0,1,6.144,1.242,8.419,8.419,0,0,1,3.515,3.515,12.137,12.137,0,0,1,1.242,6.144v2.118a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H11.067a12.137,12.137,0,0,1-6.144-1.242,8.419,8.419,0,0,1-3.515-3.515A12.137,12.137,0,0,1,.166,13.185V11.067A12.137,12.137,0,0,1,1.408,4.923,8.419,8.419,0,0,1,4.923,1.408,12.1,12.1,0,0,1,11.058.166Z" transform="translate(-0.166 -0.086)" fill="#0068ff" fill-rule="evenodd"/>
                                                    <path id="Path_19648" data-name="Path 19648" d="M27.771,26.474v.35a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H14.752a13.385,13.385,0,0,1-5.293-.837L7.275,34.638Z" transform="translate(-3.852 -13.724)" fill="#001a33" fill-rule="evenodd" opacity="0.12"/>
                                                    <path id="Path_19649" data-name="Path 19649" d="M5.965,20.992a7,7,0,0,0,3.51-.677c4.312,2.384,11.053,2.27,15.134-.342q.237-.356.443-.74A12.181,12.181,0,0,0,26.3,13.066V10.941a12.181,12.181,0,0,0-1.246-6.167,8.45,8.45,0,0,0-3.528-3.528A12.181,12.181,0,0,0,15.358,0H13.223A13.114,13.114,0,0,0,7.743.915q-.112.1-.219.2c-4,3.852-4.3,12.2-.911,16.739l.013.02c.522.77.018,2.117-.77,2.9C5.727,20.9,5.773,20.974,5.965,20.992Z" transform="translate(-2.299)" fill="#fff" fill-rule="evenodd"/>
                                                    <path id="Path_19650" data-name="Path 19650" d="M15.384,17H10.7v1h3.25l-3.2,3.971a.9.9,0,0,0-.173.593v.256h4.419a.405.405,0,0,0,.4-.4v-.539H11.979l3.013-3.78c.046-.055.128-.155.164-.2l.018-.027a1.193,1.193,0,0,0,.21-.739Z" transform="translate(-5.561 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19651" data-name="Path 19651" d="M32.578,22.825h.666V17h-1v5.487A.337.337,0,0,0,32.578,22.825Z" transform="translate(-16.793 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19652" data-name="Path 19652" d="M23.357,19.692a2.282,2.282,0,1,0,2.282,2.282A2.283,2.283,0,0,0,23.357,19.692Zm0,3.624A1.342,1.342,0,1,1,24.7,21.975,1.344,1.344,0,0,1,23.357,23.317Z" transform="translate(-11.005 -10.209)" fill="#0068ff"/>
                                                    <path id="Path_19653" data-name="Path 19653" d="M38.01,19.616a2.3,2.3,0,1,0,2.3,2.3A2.3,2.3,0,0,0,38.01,19.616Zm0,3.661a1.351,1.351,0,1,1,1.351-1.351A1.348,1.348,0,0,1,38.01,23.277Z" transform="translate(-18.592 -10.169)" fill="#0068ff"/>
                                                    <path id="Path_19654" data-name="Path 19654" d="M29.024,24.358h.539v-4.4h-.94v4.008A.4.4,0,0,0,29.024,24.358Z" transform="translate(-14.918 -10.346)" fill="#0068ff"/>
                                                  </svg>
                                              </a>
                                              <a href="#">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                    <defs>
                                                      <radialGradient id="radial-gradient" cx="0.192" cy="0.995" r="1.09" gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stop-color="#09f"/>
                                                        <stop offset="0.61" stop-color="#a033ff"/>
                                                        <stop offset="0.935" stop-color="#ff5280"/>
                                                        <stop offset="1" stop-color="#ff7061"/>
                                                      </radialGradient>
                                                    </defs>
                                                    <path id="Path" d="M124.5,122c-7.042,0-12.5,5.158-12.5,12.125a11.86,11.86,0,0,0,3.926,8.968,1,1,0,0,1,.336.713l.068,2.223a1,1,0,0,0,1.4.884l2.481-1.1a1,1,0,0,1,.668-.049,13.631,13.631,0,0,0,3.618.48c7.042,0,12.5-5.158,12.5-12.125S131.542,122,124.5,122Z" transform="translate(-112 -122)" fill-rule="evenodd" fill="url(#radial-gradient)"/>
                                                    <path id="Path-2" data-name="Path" d="M268.81,398.493l3.672-5.826a1.875,1.875,0,0,1,2.711-.5l2.92,2.19a.75.75,0,0,0,.9,0l3.944-2.993a.594.594,0,0,1,.861.79l-3.672,5.826a1.875,1.875,0,0,1-2.711.5l-2.921-2.19a.75.75,0,0,0-.9,0l-3.944,2.993A.594.594,0,0,1,268.81,398.493Z" transform="translate(-263.817 -382.822)" fill="#fff" fill-rule="evenodd"/>
                                                  </svg>
                                              </a>
                                          </div>
                                      </div>
                                      <div className="item">
                                          <div className="item--avatar">
                                              <img src="images/avatar-3.png" alt="Image" />
                                          </div>
                                          <div className="item--caption">
                                              <div className="item--flex">
                                                  <span>Mr. Tân</span>
                                                  <strong>086.8899.492</strong>
                                              </div>
                                          </div>
                                          <div className="item--live conn_grid">
                                              <a href="#">
                                                  <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path id="Path_19647" data-name="Path 19647" d="M11.058.166h2.127a12.137,12.137,0,0,1,6.144,1.242,8.419,8.419,0,0,1,3.515,3.515,12.137,12.137,0,0,1,1.242,6.144v2.118a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H11.067a12.137,12.137,0,0,1-6.144-1.242,8.419,8.419,0,0,1-3.515-3.515A12.137,12.137,0,0,1,.166,13.185V11.067A12.137,12.137,0,0,1,1.408,4.923,8.419,8.419,0,0,1,4.923,1.408,12.1,12.1,0,0,1,11.058.166Z" transform="translate(-0.166 -0.086)" fill="#0068ff" fill-rule="evenodd"/>
                                                    <path id="Path_19648" data-name="Path 19648" d="M27.771,26.474v.35a12.137,12.137,0,0,1-1.242,6.144,8.419,8.419,0,0,1-3.515,3.515,12.137,12.137,0,0,1-6.144,1.242H14.752a13.385,13.385,0,0,1-5.293-.837L7.275,34.638Z" transform="translate(-3.852 -13.724)" fill="#001a33" fill-rule="evenodd" opacity="0.12"/>
                                                    <path id="Path_19649" data-name="Path 19649" d="M5.965,20.992a7,7,0,0,0,3.51-.677c4.312,2.384,11.053,2.27,15.134-.342q.237-.356.443-.74A12.181,12.181,0,0,0,26.3,13.066V10.941a12.181,12.181,0,0,0-1.246-6.167,8.45,8.45,0,0,0-3.528-3.528A12.181,12.181,0,0,0,15.358,0H13.223A13.114,13.114,0,0,0,7.743.915q-.112.1-.219.2c-4,3.852-4.3,12.2-.911,16.739l.013.02c.522.77.018,2.117-.77,2.9C5.727,20.9,5.773,20.974,5.965,20.992Z" transform="translate(-2.299)" fill="#fff" fill-rule="evenodd"/>
                                                    <path id="Path_19650" data-name="Path 19650" d="M15.384,17H10.7v1h3.25l-3.2,3.971a.9.9,0,0,0-.173.593v.256h4.419a.405.405,0,0,0,.4-.4v-.539H11.979l3.013-3.78c.046-.055.128-.155.164-.2l.018-.027a1.193,1.193,0,0,0,.21-.739Z" transform="translate(-5.561 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19651" data-name="Path 19651" d="M32.578,22.825h.666V17h-1v5.487A.337.337,0,0,0,32.578,22.825Z" transform="translate(-16.793 -8.813)" fill="#0068ff"/>
                                                    <path id="Path_19652" data-name="Path 19652" d="M23.357,19.692a2.282,2.282,0,1,0,2.282,2.282A2.283,2.283,0,0,0,23.357,19.692Zm0,3.624A1.342,1.342,0,1,1,24.7,21.975,1.344,1.344,0,0,1,23.357,23.317Z" transform="translate(-11.005 -10.209)" fill="#0068ff"/>
                                                    <path id="Path_19653" data-name="Path 19653" d="M38.01,19.616a2.3,2.3,0,1,0,2.3,2.3A2.3,2.3,0,0,0,38.01,19.616Zm0,3.661a1.351,1.351,0,1,1,1.351-1.351A1.348,1.348,0,0,1,38.01,23.277Z" transform="translate(-18.592 -10.169)" fill="#0068ff"/>
                                                    <path id="Path_19654" data-name="Path 19654" d="M29.024,24.358h.539v-4.4h-.94v4.008A.4.4,0,0,0,29.024,24.358Z" transform="translate(-14.918 -10.346)" fill="#0068ff"/>
                                                  </svg>
                                              </a>
                                              <a href="#">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                                    <defs>
                                                      <radialGradient id="radial-gradient" cx="0.192" cy="0.995" r="1.09" gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stop-color="#09f"/>
                                                        <stop offset="0.61" stop-color="#a033ff"/>
                                                        <stop offset="0.935" stop-color="#ff5280"/>
                                                        <stop offset="1" stop-color="#ff7061"/>
                                                      </radialGradient>
                                                    </defs>
                                                    <path id="Path" d="M124.5,122c-7.042,0-12.5,5.158-12.5,12.125a11.86,11.86,0,0,0,3.926,8.968,1,1,0,0,1,.336.713l.068,2.223a1,1,0,0,0,1.4.884l2.481-1.1a1,1,0,0,1,.668-.049,13.631,13.631,0,0,0,3.618.48c7.042,0,12.5-5.158,12.5-12.125S131.542,122,124.5,122Z" transform="translate(-112 -122)" fill-rule="evenodd" fill="url(#radial-gradient)"/>
                                                    <path id="Path-2" data-name="Path" d="M268.81,398.493l3.672-5.826a1.875,1.875,0,0,1,2.711-.5l2.92,2.19a.75.75,0,0,0,.9,0l3.944-2.993a.594.594,0,0,1,.861.79l-3.672,5.826a1.875,1.875,0,0,1-2.711.5l-2.921-2.19a.75.75,0,0,0-.9,0l-3.944,2.993A.594.594,0,0,1,268.81,398.493Z" transform="translate(-263.817 -382.822)" fill="#fff" fill-rule="evenodd"/>
                                                  </svg>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li>
                      <a href="#" className="li--box conn_flex-cleft">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                              <g transform="translate(0.5 0.5)">
                                  <path d="M0,0H24V24H0Z" fill="#f15a29" stroke="#999" stroke-linecap="square" stroke-width="1" opacity="0"/>
                                  <g id="map-pins">
                                      <path d="M10.828,9.828a4,4,0,1,0-5.656,0L8,12.657l2.828-2.829Z" fill="none" stroke="#999" stroke-linecap="round" stroke-width="2"/>
                                      <line y2="0.01" transform="translate(8 7)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                      <path d="M18.828,17.828a4,4,0,1,0-5.656,0L16,20.657Z" fill="none" stroke="#999" stroke-linecap="round" stroke-width="2"/>
                                      <line y2="0.01" transform="translate(16 15)" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                  </g>
                              </g>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                            <g transform="translate(0.5 0.5)">
                                <path d="M0,0H24V24H0Z" fill="#f15a29" stroke="#f15a29" stroke-linecap="square" stroke-width="1" opacity="0"/>
                                <g>
                                    <path d="M10.828,9.828a4,4,0,1,0-5.656,0L8,12.657l2.828-2.829Z" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-width="2"/>
                                    <line y2="0.01" transform="translate(8 7)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                    <path d="M18.828,17.828a4,4,0,1,0-5.656,0L16,20.657Z" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-width="2"/>
                                    <line y2="0.01" transform="translate(16 15)" fill="none" stroke="#f15a29" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </g>
                            </g>
                          </svg>
                            
                          <span>Hệ thống đại lý</span>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="top--right conn_flex-cleft">
              <a href="#">Tra cứu mã ICAN</a>
          </div>
        </div>
        <div className="header-bottom">
          <a href="#" className="header-logo">
            <div className="logo--mark conn_flex-center">
              <svg id="icar-logomark" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <rect id="boundingbox" width="48" height="48" fill="#fff" opacity="0"/>
                <path id="logomark" d="M27.006,34.569,30.615,0a17.379,17.379,0,0,1-1.772,34.667A17.563,17.563,0,0,1,27.006,34.569ZM15.626,1.506A17.139,17.139,0,0,1,26.3,17.524,17.147,17.147,0,0,1,12.227,34.055ZM3.156,2.886A16.752,16.752,0,0,1,11.467,17.52,16.851,16.851,0,0,1,0,33.135Z" transform="translate(0.889 6.667)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1"/>
              </svg>
            </div>
            <div className="logo--type conn_flex-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="75.422" height="24.077" viewBox="0 0 75.422 24.077">
                <g id="icar-logotype" transform="translate(0 0.038)">
                  <rect id="boundingbox" width="75.422" height="24" fill="#010001" opacity="0"/>
                  <path id="logotype" d="M15.868,22.385a9.855,9.855,0,0,1-5.822-5.9,10.814,10.814,0,0,1-.6-3.259A11.908,11.908,0,0,1,9.5,11.547a12.474,12.474,0,0,1,1.566-4.942A12.716,12.716,0,0,1,14.5,2.661,13.433,13.433,0,0,1,18.127.693,13.778,13.778,0,0,1,20.1.177,11.138,11.138,0,0,1,22.074,0a10.338,10.338,0,0,1,2.349.258,11.02,11.02,0,0,1,1.2.331q.6.2,1.344.523l-.709,6.86a5.943,5.943,0,0,0-1.446-1.486,5.488,5.488,0,0,0-3.11-.919A6.211,6.211,0,0,0,17.79,6.906a6.413,6.413,0,0,0-2.495,4.64c-.032.333-.047.573-.047.716s0,.255,0,.331a4.835,4.835,0,0,0,1.566,3.546,5.211,5.211,0,0,0,3.658,1.371,6.6,6.6,0,0,0,3.3-.921,5.93,5.93,0,0,0,.873-.605,8.084,8.084,0,0,0,.881-.88l-.709,6.861q-.79.306-1.435.507c-.428.135-.868.25-1.314.348a11.669,11.669,0,0,1-2.425.257A10.58,10.58,0,0,1,15.868,22.385Zm52.686.111H64.8s-5.232-10.732-5.345-11.015c-.386-.965.229-1.1.775-1.137a7.308,7.308,0,0,0,.825-.119s.008,0,.011,0a3.012,3.012,0,0,0,1.452-.652,2.994,2.994,0,0,0,.69-.921,3.016,3.016,0,0,0,.355-1.081,2.5,2.5,0,0,0,.005-.322,3.272,3.272,0,0,0-.027-.355,3.449,3.449,0,0,0-.108-.412,3.183,3.183,0,0,0-.2-.492,1.639,1.639,0,0,0-.306-.4,3.192,3.192,0,0,0-2.442-.759H58.141l-.566,5.5-.39,3.717,0,0L56.31,22.5H50.736L52.822,2.334A2.046,2.046,0,0,1,54.851.468h8.142a8.342,8.342,0,0,1,3.284.556,4.631,4.631,0,0,1,2.086,1.785,5.581,5.581,0,0,1,.87,2.064,5.941,5.941,0,0,1,.119.712c.028.268.049.536.059.807a7.905,7.905,0,0,1-.019.855,7.9,7.9,0,0,1-.727,2.606,5.847,5.847,0,0,1-2.286,2.221h0c-.815.55-1.587.351-.554,2.017l4.718,8.4ZM42.7,22.5l-.977-3.841H34.028L32.149,22.5H26.264L36.011,2.086A2.817,2.817,0,0,1,38.562.468h4.3L48.649,22.5Zm-6.683-8.2h4.646L39.072,7.279ZM0,22.5,2.146,1.747A1.4,1.4,0,0,1,3.537.468H7.852L5.571,22.5Z" transform="translate(2.44 0.462)" fill="#010001" stroke="rgba(0,0,0,0)" stroke-width="1"/>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
