function MindFusionGame() {
    return(
        <>
            {/* <!-- Sidebar   --> */}
            <div class="sidebar card-help w-embed">
                <h2>Assignments</h2>
                <div class="assignments-section ">
                    <h3>Pending Assignments</h3>
                    <ul id="pending-assignments">
                        {/* <!-- Add pending assignments here --> */}
                        <li> Science</li>
                    </ul>
                </div>
                <div class="assignments-section">
                    <h3>Completed Assignments</h3>
                    <ul id="completed-assignments">
                        {/* <!-- Add completed assignments here --> */}
                        <li> Math</li>
                    </ul>
                </div>
            </div>

            {/* <!-- Section 1 --> */}
            <div style="padding: 0 0rem; display: flex; height: 100vh; justify-content: space-evenly; align-items: center;">

                {/* <!-- box 1 --> */}
                <div class="card-help-game">
                    <div style=" width: 100%; height: 100%; display: flex; border-radius: 2rem;">

                        {/* <!-- Swiper --> */}


                        <div class="side-blur">

                        </div>
                    </div>
                </div>
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" width="73.5" alt="" class="image-help-3" />
                <img src="https://assets-global.website-files.com/62443d15248af30a21e60133/62568b2d90c44730e9365e5c_sphere.png"
                    loading="lazy" width="73.5" alt="" class="image-help-1" />
            </div>
        </>
    )
}

export default MindFusionGame;