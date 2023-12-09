import classes from './profile.module.scss';
import ProfileImage from '../../assets/images/profile.png';

const Profile = () => {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                    <div className="gs-section">
                        <h2 className="gs-header">Profile</h2>
                        <h5 className="gs-subHeader">I'm a full stack developer</h5>
                    </div>
                    <div className={"container"}>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">About me</h4>
                                    <div>
                                        I am a full stack developer with more interest on front-end technologies.
                                        Code optimization, exploring new libraries are my thing.
                                        I am currently working for Infosys limited as a Technology Analyst. I am from Tamilnadu, India.
                            </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={classes.profileImage}>
                                    <img src={ProfileImage} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">Details</h4>
                                    <div>
                                        <div className={classes.label}>Name:</div>
                                        <div>Gopinath Surendran</div>
                                        <div className={classes.label}>Age:</div>
                                        <div>28 years</div>
                                        <div className={classes.label}>Location:</div>
                                        <div>Toronto, Canada</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2" />
            </div>
        </div>
    )
}

export default Profile;