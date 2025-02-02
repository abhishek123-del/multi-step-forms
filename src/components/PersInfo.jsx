

const PersInfo = () => {
    return (
        <>
            <div className="col-lg-8 box">
                <div className="personalInfo">
                    <h1>Personal Info</h1>
                    <p>Please provide your name,email address, and phone number.</p>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" placeholder="e.g Stephen King" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email Address</label>
                        <input type="text" name="" id="" placeholder="e.g stephenking@lorem.com" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name="" id="" placeholder="e.g +1 234 567 890" className="form-control" />
                    </div>
                </div>
                <div className="bt-group">
                    <div className="col-12">
                        <button className="btn-sm btn-primary">Next step</button>
                    </div>

                </div>
            </div>

        </>
    )
};
export default PersInfo;