import './teacherDashboard.css';

function TeacherDashboard() {
    return (
        <>
            <div className="dashboard">
                <div className="card-help">
                    <div className="welcome-message">Welcome Back, [name]</div>
                    <div className="graphics">Some graphics</div>
                </div>
                <div className="options ">
                    <div className=" card-help">Post new Assignment</div>
                    <div className=" card-help">Previous Assignments</div>
                    <div className=" card-help">Check Students Stats</div>
                </div>
            </div>
        </>
    );
}

export default TeacherDashboard;