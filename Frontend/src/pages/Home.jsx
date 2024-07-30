import React from "react";
import '../App.css'


function Home() {
    return (
        <>
            {/* <!-- Section 1 --> */}
            <div data-w-id="07959802-3c34-fd9f-c3a2-c08c8afd6e22" class="fold-section">
                <div class="wrapper wrapper-fold  ">
                    <h1 class="fold-title">Game your way to Brilliance!</h1>
                    <p class="subtitle-fold">
                        It&#x27;s time to bring learning into the digital age! We use hand gestures and interactive story
                        based learning environment to gamify education for kids and offfer personalised learning.
                    </p>

                    <a href="#start_game_section" class="button-home w-button">
                        Looking for a game? Let's see
                    </a>
                </div>
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2c54a4df01901956d4_icon-1.png"
                    loading="lazy" width="326.5" alt="" class="image-home-1" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/6256a8fb17566109b2e38857_cone-1.png"
                    loading="lazy" width="236.5" alt="" class="image-home-2"
                    style={{
                        willChange: 'transform',
                        transform: 'translate3d(0px, -64.58px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d'
                    }}
                />
            </div>

            {/* <!-- Section 2 --> */}
            <div data-w-id="d62851d8-e9c0-0095-9508-8642dabbf0de" class="section-help">

                <div class="wrapper  ">
                    <div class="help-container">
                        <p class="pre-title">HOW DO YOU PLAY?</p>
                        <h2 data-w-id="47ee816a-2c59-c902-7204-c78d77a3cba7" class="title-help">
                            Here&#x27;s how you can operate our gameS.</h2>
                        <p data-w-id="78d03577-4778-7090-1498-885ebe5cc372" class="paragraph-3">
                            You can use the hand gestures given below and observe the changes and solve some calculations
                            while having fun.</p>
                    </div>
                </div>

                <div class="cards-container">
                    {/* <!-- box 1 --> */}
                    <div class="card-help">
                        <div class="icon-card w-embed">

                            <svg width="133" height="61" viewBox="0 0 379 202" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M49.5867 66.1977C47.4523 61.6813 44.9869 56.6406 42.7893 52.1478C40.2391 46.9337 38.0497 42.4574 37.1575 40.3947L37.1534 40.3851L37.1491 40.3756C35.5746 36.8375 33.9245 34.3146 32.1161 32.8039C30.1948 31.1988 28.0586 30.7265 25.9364 31.4341C24.6867 31.8508 23.4754 32.4326 22.5962 33.4398C21.6628 34.5091 21.3175 35.8041 21.3098 37.1973C21.3025 38.532 21.6027 40.0796 22.0749 41.8459C22.553 43.6341 23.2496 45.7936 24.1149 48.389C25.2623 51.8302 27.9539 57.5316 30.6813 63.1429C31.3935 64.6082 32.1101 66.0713 32.8084 67.4969C34.8247 71.6132 36.6879 75.4172 37.851 78.0626L37.8527 78.0666C38.5077 79.5474 40.131 82.4499 41.8835 85.5833C42.3455 86.4093 42.8164 87.2513 43.2809 88.0875C45.6006 92.2633 47.7455 96.2687 48.3939 98.2133C49.2172 100.682 48.3756 103.423 45.8158 104.277C44.9302 104.572 44.2104 104.664 43.5628 104.605C42.9226 104.546 42.2371 104.327 41.4331 103.838C39.7423 102.81 37.7057 100.704 34.8064 96.8778C33.3071 94.8746 30.9687 92.1165 28.5117 89.2184C28.0591 88.6846 27.6024 88.146 27.1463 87.6065C24.1689 84.0851 21.1913 80.5022 19.2363 77.7034C17.1836 74.7647 15.3437 72.6485 13.5825 71.3783C11.7488 70.0559 9.80276 69.5255 7.81001 70.1899C6.22112 70.7197 5.08877 71.8955 4.72006 73.6317C4.39448 75.1647 4.70117 76.9608 5.3453 78.8927C5.80225 80.2631 6.76287 82.0061 7.95066 83.8943C9.16333 85.822 10.7033 88.0407 12.4191 90.4001C15.8499 95.1181 20.0479 100.487 23.8748 105.362C24.1882 105.765 24.5499 106.216 24.9465 106.711C25.9149 107.918 27.0922 109.385 28.2866 111.065C29.9638 113.424 31.5137 115.99 32.3145 118.391L37.2223 133.111C43.7605 152.72 47.9165 164.267 60.251 171.993L60.2567 171.997C62.6278 173.471 64.7415 174.943 66.597 176.987C68.4377 179.015 70.0915 181.682 71.3979 185.6L74.4004 194.605L74.7333 195.604L75.7449 195.895C84.4032 198.385 96.1616 196.962 111.609 191.812C122.36 188.227 133.367 181.431 138.849 174.705L139.544 173.852L139.196 172.808L137.522 167.787C137.456 167.59 137.395 167.004 137.612 165.848C137.816 164.758 138.221 163.389 138.822 161.785C140.021 158.583 141.924 154.642 144.261 150.479C148.946 142.133 155.228 133.153 160.735 127.684L160.742 127.677C161.8 126.615 162.694 124.978 163.48 123.298C164.239 121.675 165.002 119.774 165.772 117.858C165.824 117.728 165.876 117.597 165.929 117.466C167.623 113.251 169.34 109.094 171.341 106.507C174.107 103.02 175.947 100.136 177.596 97.4766C177.767 97.2 177.936 96.9266 178.104 96.6558C179.55 94.3169 180.877 92.1705 182.663 89.828C183.27 89.0439 183.899 88.1926 184.35 87.4145C184.575 87.0264 184.8 86.5836 184.945 86.1253C185.076 85.7139 185.239 84.9978 184.983 84.2286C184.228 81.9639 181.902 80.8905 179.864 80.4925C177.684 80.0666 175.076 80.228 172.615 81.0488C163.752 84.0037 159.535 90.85 155.689 97.0932C155.492 97.4128 155.296 97.731 155.1 98.0469C154.287 98.3944 153.534 98.9432 152.908 99.4279C152.411 99.8131 151.81 100.313 151.182 100.834C150.693 101.24 150.188 101.659 149.704 102.048C147.32 103.964 144.362 106.055 140.553 107.325C138.875 107.885 136.75 108.373 134.264 108.943C133.983 109.008 133.696 109.074 133.405 109.141C130.599 109.788 127.455 110.538 124.338 111.577C115.297 114.592 107.941 120.828 104.005 129.147L101.865 127.795C106.16 118.71 114.014 112.309 123.525 109.138C125.937 108.333 127.974 108.01 130.161 107.666L134.138 107.04L131.237 104.249C128.667 101.777 126.411 98.2511 125.003 94.0288C123.843 90.5498 122.394 87.2376 121.067 84.2635C120.947 83.996 120.829 83.7319 120.712 83.471C119.512 80.7852 118.466 78.4455 117.791 76.4215C115.073 68.2695 113.937 59.9843 112.856 52.0972C112.565 49.9718 112.278 47.8752 111.965 45.8179C111.416 42.2157 110.7 36.9534 109.982 31.6797C109.755 30.0112 109.528 28.3416 109.306 26.723C108.845 23.3646 108.406 20.2272 108.038 17.7966C107.855 16.5824 107.687 15.5326 107.542 14.7147C107.408 13.9556 107.268 13.2467 107.126 12.8215C106.166 9.9416 104.787 7.62721 102.854 6.24715C100.817 4.79191 98.4356 4.56712 96.0183 5.3731C95.0756 5.68743 94.2088 6.21112 93.506 7.04888C92.8214 7.86485 92.3874 8.8656 92.1102 9.99213C91.5724 12.1778 91.5298 15.2637 91.7943 19.5091L91.795 19.5199C91.9603 21.9592 92.6407 27.2458 93.3676 32.8942C93.9395 37.3379 94.5402 42.0054 94.9416 45.6865L94.9424 45.6939C96.8117 62.2662 97.7836 71.4232 97.8436 74.9354C97.8683 76.377 97.5121 77.2372 97.022 77.8284C96.4978 78.4608 95.6369 79.0061 94.2724 79.4611C92.6919 79.988 91.3378 80.0549 90.3554 79.7471C89.4862 79.4748 88.7033 78.8533 88.2278 77.4272C87.3944 74.9276 85.9941 70.9747 84.4979 66.7509C84.3739 66.4008 84.2492 66.0488 84.1242 65.6956C82.4846 61.0659 80.7738 56.2211 79.5683 52.6055C78.0871 48.1632 76.5169 44.4181 74.7546 40.2149C74.4555 39.5015 74.1509 38.775 73.8402 38.0295C71.6955 32.8834 69.2192 26.74 66.1793 17.6228C65.1773 14.6176 63.9663 12.2314 62.1329 10.8792C60.1052 9.38359 57.7913 9.45986 55.4739 10.2326C54.2252 10.6489 53.0119 11.2208 52.0737 12.1731C51.0848 13.1769 50.5644 14.4339 50.4123 15.901C50.2666 17.3063 50.4542 18.9319 50.8633 20.7986C51.2762 22.6827 51.9446 24.9394 52.8478 27.6482C53.6177 29.9574 54.5297 32.3353 55.5098 34.891C55.6176 35.1719 55.7261 35.455 55.8354 35.7404C56.9443 38.6358 58.1433 41.8059 59.3701 45.4855C61.2743 51.1964 63.1523 57.0999 65.0876 63.1838L65.2518 63.6998C67.2438 69.9616 69.2979 76.4102 71.497 83.0056C72.2804 85.3553 71.9156 86.6077 71.3346 87.4025C70.6456 88.3452 69.3095 89.1313 67.2518 89.8174C65.5502 90.3847 64.5874 90.3535 63.8752 90.0424C63.112 89.709 62.174 88.8548 61.0087 86.7108L61.0057 86.7053C60.3919 85.5845 59.4781 84.0402 58.3959 82.2114C55.8208 77.8599 52.2927 71.8979 49.5867 66.1977ZM49.5867 66.1977C49.5869 66.1981 49.587 66.1984 49.5872 66.1988L47.7789 67.0533M49.5867 66.1977C49.5864 66.197 49.586 66.1963 49.5857 66.1957L47.7789 67.0533M47.7789 67.0533C50.5254 72.8392 54.1732 79.005 56.7574 83.3731C57.809 85.1507 58.6845 86.6305 59.2515 87.6659L35.3219 41.1887C36.2254 43.2778 38.4577 47.8427 41.0376 53.1186C43.2345 57.6111 45.6835 62.6192 47.7789 67.0533ZM21.3762 76.1006L21.3768 76.1014C23.1575 78.5685 25.4644 81.3523 27.8497 84.2308C28.1544 84.5984 28.4604 84.9677 28.7667 85.338C31.4978 88.6396 34.2858 92.0611 36.6241 95.4207L36.6293 95.4283L36.6347 95.4359C38.6339 98.2525 40.0158 99.9863 41.0037 101.009C41.4892 101.512 41.9665 101.936 42.4486 102.221C42.9054 102.491 43.7209 102.842 44.6582 102.529C45.1251 102.374 45.7837 102.022 46.1611 101.263C46.5375 100.507 46.4218 99.771 46.2671 99.3073C45.5303 97.0974 43.2385 92.8219 41.0583 88.8945C40.181 87.3141 39.3114 85.7721 38.528 84.3831C37.2941 82.1953 36.2742 80.3869 35.7752 79.4051C31.252 70.4635 23.2598 53.8716 21.527 48.6746C19.9184 43.8504 18.7078 39.5592 19.0436 36.096C19.2046 34.4358 19.7181 33.0451 20.6773 31.8864C21.6444 30.7182 23.185 29.6407 25.6404 28.822C27.9512 28.0515 30.3227 28.476 32.6672 30.171C35.0636 31.9035 37.394 34.9567 39.2944 39.2824C40.3295 41.6747 42.6194 46.3211 45.495 52.1561C47.3335 55.8867 49.4114 60.1031 51.5539 64.5269C51.6626 64.7512 51.7706 64.9742 51.8779 65.1959C54.4988 70.6079 56.7321 75.2195 58.6276 78.8126C60.5599 82.4753 62.2727 85.3457 63.8143 86.8919C64.022 87.1003 64.3988 87.4487 64.9459 87.6514C65.5797 87.8863 66.1984 87.8427 66.7264 87.6666C67.5266 87.3998 68.6808 86.8308 69.0311 85.4457C69.1756 84.8742 69.1265 84.342 69.0548 83.9458C68.9824 83.5455 68.8585 83.1398 68.7358 82.7718C66.7782 76.9006 64.949 71.1278 63.1655 65.4913L63.0184 65.0266C61.2879 59.5573 59.5975 54.2147 57.8792 49.0614C56.3943 44.6077 55.0268 40.9416 53.7837 37.6452C53.6676 37.3372 53.5526 37.0327 53.4388 36.7313C52.3315 33.7982 51.3355 31.1602 50.433 28.4533C48.7834 23.5057 47.6265 18.9697 47.9846 15.337C48.1583 13.5755 48.6827 12.1119 49.6206 10.9219C50.5574 9.73346 52.0205 8.67324 54.3155 7.90803C57.8052 6.74448 60.5805 6.97129 62.7888 8.27726C65.0538 9.6167 67.0897 12.3059 68.594 16.8177C71.5884 25.7985 74.0748 31.9517 76.2489 37.1727C76.5325 37.8537 76.8102 38.5174 77.0824 39.1682C78.8996 43.5124 80.4764 47.2817 81.983 51.8003C83.2027 55.4584 84.9122 60.2967 86.477 64.7025C86.7117 65.3635 86.9431 66.0142 87.1689 66.6496C88.4554 70.2688 89.5649 73.3901 90.1229 75.0635C90.2689 75.5014 90.5292 76.2124 91.095 76.7203C91.4473 77.0365 91.9005 77.2626 92.4257 77.3203C92.9009 77.3725 93.2912 77.2699 93.5167 77.1947C94.0447 77.0186 94.5657 76.6822 94.9317 76.114C95.2385 75.6379 95.3345 75.1481 95.3774 74.8534C95.5462 73.8221 95.5023 72.4744 95.3761 70.952C95.245 69.3706 95.0049 67.404 94.704 65.0665C94.615 64.3756 94.5204 63.6496 94.4211 62.8879C93.8457 58.4731 93.1138 52.8573 92.4212 45.8991L92.4202 45.8896C92.0079 41.9401 91.4042 36.9744 90.8403 32.3356C90.1877 26.9676 89.5883 22.0373 89.4004 19.6261C88.9669 14.0656 89.2393 10.2598 90.2062 7.66335C91.1091 5.2386 92.6441 3.78738 95.2049 2.93354C98.385 1.8732 101.258 2.25389 103.651 3.73602C106.087 5.24443 108.206 8.01131 109.541 12.0164C109.71 12.5227 110.04 14.1899 110.47 16.7982C110.886 19.3194 111.368 22.5331 111.856 25.971C112.834 32.8468 113.834 40.5761 114.384 45.3731C115.489 55.012 116.958 65.8745 120.206 75.6164C120.836 77.5074 121.865 79.8102 122.977 82.298C123.156 82.7 123.338 83.1069 123.521 83.5176C124.858 86.5254 126.296 89.8575 127.476 93.3969C128.492 96.4436 130.341 99.4898 132.365 101.679C133.376 102.772 134.502 103.73 135.673 104.35C136.815 104.955 138.272 105.375 139.74 104.886C143.198 103.733 145.298 102.104 147.106 100.505C147.414 100.233 147.707 99.9681 147.993 99.7102C149.385 98.4521 150.594 97.3597 152.4 96.4022L152.873 96.1513L153.157 95.6975C157.988 87.9904 163.184 81.4824 171.801 78.6092C175.288 77.4467 178.884 77.5054 181.773 78.47C184.676 79.4395 186.669 81.2393 187.398 83.4235C187.821 84.6921 187.83 85.7798 187.451 86.9351C187.049 88.1609 186.169 89.5815 184.582 91.3946L184.57 91.4079L184.559 91.4213C182.679 93.6466 181.362 95.9048 179.984 98.2676C179.853 98.4926 179.721 98.7185 179.588 98.9454C178.051 101.572 176.288 104.485 173.394 108.06L173.389 108.067C172.285 109.444 171.314 111.267 170.428 113.176C169.656 114.841 168.901 116.681 168.156 118.494C168.039 118.777 167.923 119.059 167.808 119.341C166.939 121.448 166.08 123.49 165.176 125.289C164.265 127.103 163.369 128.548 162.468 129.525C158.642 133.607 152.843 142.058 148.143 149.662C145.778 153.488 143.654 157.162 142.161 160.039C141.417 161.472 140.809 162.747 140.407 163.763C140.207 164.267 140.037 164.759 139.932 165.203C139.879 165.425 139.832 165.677 139.815 165.94C139.799 166.179 139.797 166.564 139.936 166.981L142.406 174.388C140.092 177.817 136.011 181.585 130.878 185.074C125.397 188.801 118.879 192.099 112.422 194.251C94.6193 200.187 81.6198 201.075 72.681 197.496L68.9832 186.406C68.0304 183.548 67.046 181.325 65.4748 179.365C63.908 177.409 61.866 175.85 59.0222 174.125C46.0453 166.24 41.4309 153.78 34.7499 133.743L29.8997 119.196C29.1101 116.828 27.5996 114.395 26.0889 112.29C24.7202 110.383 23.2634 108.628 22.1788 107.321C22.0559 107.173 21.9377 107.031 21.825 106.894C17.9546 102.152 13.6356 96.617 10.069 91.6128C8.28435 89.1088 6.70105 86.7558 5.46028 84.7123C4.20078 82.6379 3.36176 80.9911 2.9883 79.871C1.90566 76.624 1.91913 73.9007 2.64983 71.8886C3.36093 69.9304 4.80323 68.4817 6.9966 67.7504C9.27965 66.9891 11.4322 67.1999 13.7058 68.4621C16.0684 69.7736 18.5981 72.2476 21.3762 76.1006ZM91.4146 74.3018C91.4144 74.3018 91.4153 74.2958 91.418 74.2846C91.4161 74.2963 91.4148 74.3017 91.4146 74.3018Z"
                                    stroke="#FE00AE" stroke-width="4" />
                                <path
                                    d="M329.095 66.1977C331.23 61.6813 333.695 56.6406 335.893 52.1478C338.443 46.9337 340.632 42.4574 341.524 40.3947L341.529 40.3851L341.533 40.3756C343.107 36.8375 344.757 34.3146 346.566 32.8039C348.487 31.1988 350.623 30.7265 352.746 31.4341C353.995 31.8508 355.207 32.4326 356.086 33.4398C357.019 34.5091 357.364 35.8041 357.372 37.1973C357.379 38.532 357.079 40.0796 356.607 41.8459C356.129 43.6341 355.432 45.7936 354.567 48.389C353.42 51.8302 350.728 57.5316 348.001 63.1429C347.288 64.6082 346.572 66.0713 345.874 67.4969C343.857 71.6132 341.994 75.4172 340.831 78.0626L340.829 78.0666C340.174 79.5474 338.551 82.4499 336.798 85.5833C336.336 86.4093 335.866 87.2513 335.401 88.0875C333.081 92.2633 330.936 96.2687 330.288 98.2133C329.465 100.682 330.306 103.423 332.866 104.277C333.752 104.572 334.472 104.664 335.119 104.605C335.759 104.546 336.445 104.327 337.249 103.838C338.94 102.81 340.976 100.704 343.876 96.8778C345.375 94.8746 347.713 92.1165 350.17 89.2184C350.623 88.6846 351.08 88.146 351.536 87.6065C354.513 84.0851 357.491 80.5022 359.446 77.7034C361.498 74.7647 363.338 72.6485 365.099 71.3783C366.933 70.0559 368.879 69.5255 370.872 70.1899C372.461 70.7197 373.593 71.8955 373.962 73.6317C374.287 75.1647 373.981 76.9608 373.337 78.8927C372.88 80.2631 371.919 82.0061 370.731 83.8943C369.519 85.822 367.979 88.0407 366.263 90.4001C362.832 95.1181 358.634 100.487 354.807 105.362C354.494 105.765 354.132 106.216 353.735 106.711C352.767 107.918 351.59 109.385 350.395 111.065C348.718 113.424 347.168 115.99 346.367 118.391L341.46 133.111C334.921 152.72 330.765 164.267 318.431 171.993L318.425 171.997C316.054 173.471 313.94 174.943 312.085 176.987C310.244 179.015 308.59 181.682 307.284 185.6L304.282 194.605L303.949 195.604L302.937 195.895C294.279 198.385 282.52 196.962 267.073 191.812C256.322 188.227 245.315 181.431 239.833 174.705L239.138 173.852L239.486 172.808L241.16 167.787C241.226 167.59 241.287 167.004 241.07 165.848C240.866 164.758 240.461 163.389 239.86 161.785C238.661 158.583 236.758 154.642 234.421 150.479C229.736 142.133 223.454 133.153 217.947 127.684L217.94 127.677C216.882 126.615 215.988 124.978 215.202 123.298C214.443 121.675 213.68 119.774 212.91 117.858C212.858 117.728 212.805 117.597 212.753 117.466C211.059 113.251 209.342 109.094 207.34 106.507C204.575 103.02 202.735 100.136 201.086 97.4766C200.915 97.2 200.746 96.9266 200.578 96.6558C199.132 94.3169 197.805 92.1705 196.019 89.828C195.411 89.0439 194.783 88.1926 194.331 87.4145C194.107 87.0264 193.882 86.5836 193.737 86.1253C193.606 85.7139 193.443 84.9978 193.699 84.2286C194.454 81.9639 196.78 80.8905 198.818 80.4925C200.998 80.0666 203.606 80.228 206.067 81.0488C214.93 84.0037 219.147 90.85 222.993 97.0932C223.19 97.4128 223.386 97.731 223.582 98.0469C224.395 98.3944 225.148 98.9432 225.774 99.4279C226.271 99.8131 226.872 100.313 227.5 100.834C227.989 101.24 228.494 101.659 228.978 102.048C231.362 103.964 234.32 106.055 238.129 107.325C239.807 107.885 241.932 108.373 244.418 108.943C244.699 109.008 244.986 109.074 245.277 109.141C248.083 109.788 251.227 110.538 254.344 111.577C263.385 114.592 270.741 120.828 274.677 129.147L276.817 127.795C272.522 118.71 264.668 112.309 255.157 109.138C252.745 108.333 250.708 108.01 248.521 107.666L244.544 107.04L247.445 104.249C250.015 101.777 252.271 98.2511 253.679 94.0288C254.839 90.5498 256.288 87.2376 257.615 84.2635C257.735 83.996 257.853 83.7319 257.97 83.471C259.17 80.7852 260.216 78.4455 260.891 76.4215C263.609 68.2695 264.744 59.9843 265.825 52.0972C266.117 49.9718 266.404 47.8752 266.717 45.8179C267.266 42.2157 267.982 36.9534 268.7 31.6797C268.927 30.0112 269.154 28.3416 269.376 26.723C269.837 23.3646 270.276 20.2272 270.643 17.7966C270.827 16.5824 270.995 15.5326 271.14 14.7147C271.274 13.9556 271.414 13.2467 271.556 12.8215C272.516 9.9416 273.895 7.62721 275.828 6.24715C277.865 4.79191 280.246 4.56712 282.664 5.3731C283.606 5.68743 284.473 6.21112 285.176 7.04888C285.861 7.86485 286.295 8.8656 286.572 9.99213C287.11 12.1778 287.152 15.2637 286.888 19.5091L286.887 19.5199C286.722 21.9592 286.041 27.2458 285.314 32.8942C284.742 37.3379 284.142 42.0054 283.74 45.6865L283.74 45.6939C281.87 62.2662 280.898 71.4232 280.838 74.9354C280.814 76.377 281.17 77.2372 281.66 77.8284C282.184 78.4608 283.045 79.0061 284.41 79.4611C285.99 79.988 287.344 80.0549 288.327 79.7471C289.196 79.4748 289.979 78.8533 290.454 77.4272C291.288 74.9276 292.688 70.9747 294.184 66.7509C294.308 66.4008 294.433 66.0488 294.558 65.6956C296.197 61.0659 297.908 56.2211 299.114 52.6055C300.595 48.1632 302.165 44.4181 303.927 40.2149C304.226 39.5015 304.531 38.775 304.842 38.0295C306.986 32.8834 309.463 26.74 312.503 17.6228C313.505 14.6176 314.716 12.2314 316.549 10.8792C318.577 9.38359 320.891 9.45986 323.208 10.2326C324.457 10.6489 325.67 11.2208 326.608 12.1731C327.597 13.1769 328.118 14.4339 328.27 15.901C328.415 17.3063 328.228 18.9319 327.819 20.7986C327.406 22.6827 326.737 24.9394 325.834 27.6482C325.064 29.9574 324.152 32.3353 323.172 34.891C323.064 35.1719 322.956 35.455 322.847 35.7404C321.738 38.6358 320.539 41.8059 319.312 45.4855C317.408 51.1964 315.53 57.0999 313.594 63.1838L313.43 63.6998C311.438 69.9616 309.384 76.4102 307.185 83.0056C306.402 85.3553 306.766 86.6077 307.347 87.4025C308.036 88.3452 309.372 89.1313 311.43 89.8174C313.132 90.3847 314.095 90.3535 314.807 90.0424C315.57 89.709 316.508 88.8548 317.673 86.7108L317.676 86.7053C318.29 85.5845 319.204 84.0402 320.286 82.2114C322.861 77.8599 326.389 71.8979 329.095 66.1977ZM329.095 66.1977C329.095 66.1981 329.095 66.1984 329.095 66.1988L330.903 67.0533M329.095 66.1977C329.096 66.197 329.096 66.1963 329.096 66.1957L330.903 67.0533M330.903 67.0533C328.157 72.8392 324.509 79.005 321.925 83.3731C320.873 85.1507 319.997 86.6305 319.43 87.6659L343.36 41.1887C342.456 43.2778 340.224 47.8427 337.644 53.1186C335.447 57.6111 332.998 62.6192 330.903 67.0533ZM357.306 76.1006L357.305 76.1014C355.524 78.5685 353.218 81.3523 350.832 84.2308C350.528 84.5984 350.222 84.9677 349.915 85.338C347.184 88.6396 344.396 92.0611 342.058 95.4207L342.053 95.4283L342.047 95.4359C340.048 98.2525 338.666 99.9863 337.678 101.009C337.193 101.512 336.715 101.936 336.233 102.221C335.777 102.491 334.961 102.842 334.024 102.529C333.557 102.374 332.898 102.022 332.521 101.263C332.144 100.507 332.26 99.771 332.415 99.3073C333.152 97.0974 335.443 92.8219 337.624 88.8945C338.501 87.3141 339.371 85.7721 340.154 84.3831C341.388 82.1953 342.408 80.3869 342.907 79.4051C347.43 70.4635 355.422 53.8716 357.155 48.6746C358.764 43.8504 359.974 39.5592 359.638 36.096C359.477 34.4358 358.964 33.0451 358.005 31.8864C357.038 30.7182 355.497 29.6407 353.042 28.822C350.731 28.0515 348.359 28.476 346.015 30.171C343.618 31.9035 341.288 34.9567 339.388 39.2824C338.352 41.6747 336.063 46.3211 333.187 52.1561C331.348 55.8867 329.271 60.1031 327.128 64.5269C327.019 64.7512 326.911 64.9742 326.804 65.1959C324.183 70.6079 321.95 75.2195 320.054 78.8126C318.122 82.4753 316.409 85.3457 314.868 86.8919C314.66 87.1003 314.283 87.4487 313.736 87.6514C313.102 87.8863 312.484 87.8427 311.956 87.6666C311.155 87.3998 310.001 86.8308 309.651 85.4457C309.506 84.8742 309.555 84.342 309.627 83.9458C309.7 83.5455 309.823 83.1398 309.946 82.7718C311.904 76.9006 313.733 71.1278 315.516 65.4913L315.664 65.0266C317.394 59.5573 319.084 54.2147 320.803 49.0614C322.288 44.6077 323.655 40.9416 324.898 37.6452C325.014 37.3372 325.129 37.0327 325.243 36.7313C326.35 33.7982 327.346 31.1602 328.249 28.4533C329.899 23.5057 331.055 18.9697 330.697 15.337C330.524 13.5755 329.999 12.1119 329.061 10.9219C328.125 9.73346 326.661 8.67324 324.366 7.90803C320.877 6.74448 318.101 6.97129 315.893 8.27726C313.628 9.6167 311.592 12.3059 310.088 16.8177C307.094 25.7985 304.607 31.9517 302.433 37.1727C302.149 37.8537 301.872 38.5174 301.6 39.1682C299.782 43.5124 298.206 47.2817 296.699 51.8003C295.479 55.4584 293.77 60.2967 292.205 64.7025C291.97 65.3635 291.739 66.0142 291.513 66.6496C290.227 70.2688 289.117 73.3901 288.559 75.0635C288.413 75.5014 288.153 76.2124 287.587 76.7203C287.235 77.0365 286.781 77.2626 286.256 77.3203C285.781 77.3725 285.391 77.2699 285.165 77.1947C284.637 77.0186 284.116 76.6822 283.75 76.114C283.443 75.6379 283.347 75.1481 283.305 74.8534C283.136 73.8221 283.18 72.4744 283.306 70.952C283.437 69.3706 283.677 67.404 283.978 65.0665C284.067 64.3756 284.162 63.6496 284.261 62.8879C284.836 58.4731 285.568 52.8573 286.261 45.8991L286.262 45.8896C286.674 41.9401 287.278 36.9744 287.842 32.3356C288.494 26.9676 289.094 22.0373 289.282 19.6261C289.715 14.0656 289.443 10.2598 288.476 7.66335C287.573 5.2386 286.038 3.78738 283.477 2.93354C280.297 1.8732 277.424 2.25389 275.031 3.73602C272.595 5.24443 270.476 8.01131 269.141 12.0164C268.972 12.5227 268.642 14.1899 268.212 16.7982C267.796 19.3194 267.314 22.5331 266.825 25.971C265.848 32.8468 264.848 40.5761 264.298 45.3731C263.193 55.012 261.724 65.8745 258.476 75.6164C257.846 77.5074 256.817 79.8102 255.705 82.298C255.525 82.7 255.344 83.1069 255.161 83.5176C253.824 86.5254 252.386 89.8575 251.206 93.3969C250.19 96.4436 248.341 99.4898 246.317 101.679C245.306 102.772 244.18 103.73 243.009 104.35C241.867 104.955 240.41 105.375 238.942 104.886C235.484 103.733 233.384 102.104 231.576 100.505C231.268 100.233 230.975 99.9681 230.689 99.7102C229.297 98.4521 228.087 97.3597 226.282 96.4022L225.809 96.1513L225.525 95.6975C220.694 87.9904 215.498 81.4824 206.881 78.6092C203.394 77.4467 199.798 77.5054 196.909 78.47C194.006 79.4395 192.013 81.2393 191.284 83.4235C190.861 84.6921 190.852 85.7798 191.231 86.9351C191.633 88.1609 192.513 89.5815 194.1 91.3946L194.112 91.4079L194.123 91.4213C196.003 93.6466 197.32 95.9048 198.698 98.2676C198.829 98.4926 198.961 98.7185 199.094 98.9454C200.631 101.572 202.394 104.485 205.287 108.06L205.293 108.067C206.397 109.444 207.368 111.267 208.254 113.176C209.026 114.841 209.781 116.681 210.526 118.494C210.642 118.777 210.759 119.059 210.874 119.341C211.743 121.448 212.602 123.49 213.506 125.289C214.417 127.103 215.313 128.548 216.214 129.525C220.04 133.607 225.839 142.058 230.538 149.662C232.904 153.488 235.028 157.162 236.521 160.039C237.265 161.472 237.872 162.747 238.275 163.763C238.475 164.267 238.645 164.759 238.75 165.203C238.803 165.425 238.85 165.677 238.867 165.94C238.883 166.179 238.885 166.564 238.746 166.981L236.276 174.388C238.59 177.817 242.671 181.585 247.804 185.074C253.285 188.801 259.803 192.099 266.26 194.251C284.063 200.187 297.062 201.075 306.001 197.496L309.699 186.406C310.652 183.548 311.636 181.325 313.207 179.365C314.774 177.409 316.816 175.85 319.66 174.125C332.637 166.24 337.251 153.78 343.932 133.743L348.782 119.196C349.572 116.828 351.082 114.395 352.593 112.29C353.962 110.383 355.419 108.628 356.503 107.321C356.626 107.173 356.744 107.031 356.857 106.894C360.727 102.152 365.046 96.617 368.613 91.6128C370.398 89.1088 371.981 86.7558 373.222 84.7123C374.481 82.6379 375.32 80.9911 375.694 79.871C376.776 76.624 376.763 73.9007 376.032 71.8886C375.321 69.9304 373.879 68.4817 371.685 67.7504C369.402 66.9891 367.25 67.1999 364.976 68.4621C362.614 69.7736 360.084 72.2476 357.306 76.1006ZM287.267 74.3018C287.268 74.3018 287.267 74.2958 287.264 74.2846C287.266 74.2963 287.267 74.3017 287.267 74.3018Z"
                                    stroke="#FE00AE" stroke-width="4" />
                            </svg>

                        </div>
                        <p class="paragraph-4">Guesture Math</p>
                        <p class="paragraph-5">By using hand gestures you can increase or decrease the value to give the
                            answer.
                        </p>

                        <a
                            href="/gestureMath"
                            className="button-home w-button"
                            style={{
                                margin: '1rem 4rem',
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: 600
                            }}
                        >
                            Play
                        </a>


                    </div>

                    {/* <!-- box 2 --> */}
                    <div class="card-help">
                        <div class="icon-card w-embed">

                            <svg width="127" height="58" viewBox="0 0 512 192" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M504.016 112V107.168C504.016 84.392 487.736 65.144 465.304 61.392C465.168 61.368 465.056 61.416 464.928 61.4C464.8 61.384 464.712 61.312 464.584 61.304L395.744 56.256C385.872 46.04 344.832 8 280.016 8C277.448 8 274.952 8.16 272.432 8.256C272.28 8.248 272.168 8.168 272.016 8.168C271.816 8.168 271.64 8.27199 271.44 8.28799C210.208 10.944 162.952 40.856 152.52 48H146.8L142.056 40H144C148.424 40 152 36.424 152 32V8C152 3.576 148.424 0 144 0H112C107.576 0 104 3.576 104 8V32C104 36.424 107.576 40 112 40H123.456L128.2 48H120.024C115.6 48 112.024 51.576 112.024 56V132.776C112.024 132.928 112.104 133.048 112.112 133.2C112.144 133.76 112.288 134.296 112.44 134.84C112.576 135.312 112.656 135.776 112.872 136.216C113.08 136.648 113.384 137.008 113.68 137.4C114.016 137.864 114.336 138.312 114.76 138.696C114.872 138.792 114.92 138.92 115.032 139.016L139.016 158.224C139.376 158.512 139.792 158.656 140.184 158.872C140.512 159.048 140.8 159.272 141.152 159.4C142.08 159.76 143.04 159.976 144.008 159.976C144.008 159.976 144.008 159.976 144.016 159.976H154.832C156.952 165.944 160.208 171.368 164.352 175.992H8C3.576 175.992 0 179.568 0 183.992C0 188.416 3.576 191.992 8 191.992H504C508.424 191.992 512 188.416 512 183.992C512 179.568 508.424 175.992 504 175.992H459.6C463.752 171.368 467.008 165.944 469.12 159.976H504C508.424 159.976 512 156.4 512 151.976V120C512 115.584 508.432 112.016 504.016 112ZM120 16H136V24H120V16ZM488.016 107.168V112.664C485.184 113.888 483.184 116.712 483.184 120C483.184 124.424 486.76 128 491.184 128H496V143.984H471.92C471.904 117.52 450.384 96 423.92 96C397.456 96 375.936 117.52 375.92 143.984H248.016C248 117.52 226.48 96 200.016 96C173.552 96 152.032 117.52 152.016 143.984H146.808L128.016 128.936V64H155.048C155.368 64 155.64 63.848 155.952 63.824C156.472 63.76 156.968 63.672 157.472 63.512C158.016 63.344 158.504 63.096 158.984 62.816C159.232 62.664 159.52 62.632 159.768 62.456C160.048 62.256 175.448 51.232 199.896 41.032L268.792 71.32C268.808 71.328 268.816 71.32 268.832 71.328C269.76 71.736 270.776 71.944 271.848 71.968C271.904 71.968 271.952 72 272.008 72L391.416 71.984L462.832 77.216C477.432 79.744 488.016 92.304 488.016 107.168ZM245.216 159.984H378.72C380.84 165.952 384.096 171.376 388.24 176H235.696C239.84 171.376 243.104 165.952 245.216 159.984ZM221.688 33.144C234.496 29.224 248.784 26.152 264.016 24.8V51.752L221.688 33.144ZM371.2 55.984L280.016 56V24C322.464 24 354.008 42.632 371.2 55.984ZM168.016 144.008C168.016 126.36 182.368 112 200.016 112C217.664 112 232.016 126.36 232.016 144.008C232.016 161.648 217.664 176 200.016 176C182.368 176 168.016 161.648 168.016 144.008ZM391.92 144.008C391.92 126.36 406.272 112 423.92 112C441.568 112 455.92 126.36 455.92 144.008C455.92 161.648 441.568 176 423.92 176C406.272 176 391.92 161.648 391.92 144.008Z"
                                    fill="#FE00AE" />
                                <path
                                    d="M423.92 120C410.688 120 399.92 130.768 399.92 144C399.92 157.232 410.688 168 423.92 168C437.152 168 447.92 157.232 447.92 144C447.92 130.768 437.16 120 423.92 120ZM423.92 152C419.504 152 415.92 148.416 415.92 144C415.92 139.584 419.504 136 423.92 136C428.336 136 431.92 139.584 431.92 144C431.92 148.416 428.336 152 423.92 152ZM200.016 120C186.784 120 176.016 130.768 176.016 144C176.016 157.232 186.784 168 200.016 168C213.248 168 224.016 157.232 224.016 144C224.016 130.768 213.248 120 200.016 120ZM200.016 152C195.6 152 192.016 148.416 192.016 144C192.016 139.584 195.6 136 200.016 136C204.432 136 208.016 139.584 208.016 144C208.016 148.416 204.432 152 200.016 152ZM24 143.992C19.576 143.992 16 147.568 16 151.992C16 156.416 19.576 159.992 24 159.992H79.984C84.408 159.992 87.984 156.416 87.984 151.992C87.984 147.568 84.408 143.992 79.984 143.992H24ZM8 128H96C100.424 128 104 124.424 104 120C104 115.576 100.424 112 96 112H8C3.576 112 0 115.576 0 120C0 124.424 3.576 128 8 128ZM24.016 80.008C19.592 80.008 16.016 83.584 16.016 88.008C16.016 92.432 19.592 96.008 24.016 96.008H31.968C36.392 96.008 39.968 92.432 39.968 88.008C39.968 83.584 36.392 80.008 31.968 80.008H24.016ZM48.048 88.008C48.048 92.432 51.624 96.008 56.048 96.008H96.032C100.456 96.008 104.032 92.432 104.032 88.008C104.032 83.584 100.456 80.008 96.032 80.008H56.048C51.624 80.008 48.048 83.584 48.048 88.008ZM55.968 48.016H8C3.576 48.016 0 51.592 0 56.016C0 60.44 3.576 64.016 8 64.016H55.968C60.392 64.016 63.968 60.44 63.968 56.016C63.968 51.592 60.392 48.016 55.968 48.016Z"
                                    fill="#FE00AE" />
                            </svg>

                        </div>
                        <p class="paragraph-4">Guesture Car </p>
                        <p class="paragraph-5"> Relive your Road Rash memories! Here we use your hand gesture to swipe the
                            car to left or right, you need to swipe to the direction of the correct equation.
                        </p>
                        <a
                            href="/gestureCar"
                            className="button-home w-button"
                            style={{
                                margin: '1rem 4rem',
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: 600
                            }}
                        >
                            Play
                        </a>


                    </div>

                    {/* <!-- box 3 --> */}
                    <div class="card-help">
                        <div class="icon-card w-embed">
                            <img height="64px" width="64px" src="../static/assets/mouse.svg" />
                        </div>
                        <p class="paragraph-4">MindFusion</p>
                        <p class="paragraph-5">This game makes your boring english or science assignment interesting while
                            taking you
                            to the world of stories and fables!</p>
                        <a
                            href="/mindFusion"
                            className="button-home w-button"
                            style={{
                                margin: '1rem 4rem',
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: 600
                            }}
                        >
                            Play
                        </a>


                    </div>

                </div>

                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" width="73.5" alt="" class="image-help-4" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" width="73.5" alt="" class="image-help-3" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" width="73.5" alt="" class="image-help-1" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c4477975365e5d_torus-2.png"
                    loading="lazy" alt="" width="172" class="image-help-5" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2b87eba03819631801_sphere-2.png"
                    loading="lazy" width="123" alt="" class="image-help-2" />
            </div>

            {/* <!-- Section 3 --> */}
            <div data-w-id="dea27474-dda4-ef93-da06-6639fff7b299" class="section-case-study">
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" alt="" width="122" class="image-case-study-1" />
                <div class="wrapper wrapper--case-study  ">
                    <div data-w-id="3071ae50-a55f-5d80-357a-fe02f6e8afe7" class="case-study-container">

                        <h3 class="title-case-tudy">Wow, Factor! of our Game</h3>
                        <p class="paragraph-case-study">The "Wow" factor of our project lies in its innovative approach
                            to making learning fun and interactive for young kids. By leveraging cutting-edge
                            technologies like OpenCV and MediaPipe, we have created a captivating learning experience
                            where children can engage in basic calculations through hand gestures. This gamified
                            approach not only makes learning enjoyable but also fosters active participation and
                            engagement. The way of approaching school assignments as games and stories make it much more fun
                            engaging for the kids!</p>
                    </div>
                    <img class="image"
                        src="https://assets-global.website-files.com/62443d15248af30a21e60133/624c17e520e315d7c8b82e32_icon-sucess-case-study.png"
                        width="330" height="330" alt="" sizes="(max-width: 991px) 100vw, (max-width: 1439px) 33vw, 330px"
                        data-w-id="fb6cde94-0e5c-a44e-3b0c-b1c806504c29" loading="lazy"
                        srcset="https://assets-global.website-files.com/62443d15248af30a21e60133/624c17e520e315d7c8b82e32_icon-sucess-case-study-p-500.png 500w, https://assets-global.website-files.com/62443d15248af30a21e60133/624c17e520e315d7c8b82e32_icon-sucess-case-study.png 802w" />
                </div>
                <div class="lines-bg"></div>
                <div class="balles-bg"></div>
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls.png"
                    loading="lazy" sizes="(max-width: 1439px) 100vw, 1140px"
                    srcset="https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls-p-500.png 500w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls-p-800.png 800w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls-p-1080.png 1080w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls-p-1600.png 1600w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls-p-2000.png 2000w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555bbea9a45b851d1bbd_balls.png 2291w"
                    alt="" class="balles-img" /><img
                    src="https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls.png"
                    loading="lazy" sizes="(max-width: 1439px) 100vw, 1140px"
                    srcset="https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls-p-500.png 500w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls-p-800.png 800w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls-p-1080.png 1080w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls-p-1600.png 1600w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls-p-2000.png 2000w, https://assets-global.website-files.com/62443d15248af30a21e60133/627d555b733aa5db90daec57_No%20balls.png 2291w"
                    alt="" class="lines-img" />
            </div>

            {/* <!-- Section 4 --> */}
            <div id="start_game_section" class="section-building-team">
                <div class="wrapper wrapper--building  ">
                    <h2 class="title-building">Let's Get Started</h2>
                    <p class="paragraph-building">
                        Let&#x27;s Kick Off the Fun! Start Here!
                    </p>
                    {/* <!-- <a href="/game" class="button-home w-button">Start The Game</a> --> */}
                </div>
            </div>
        </>
    )
}

export default Home;