import classes from './experiences.module.scss';
import { educations, careers } from './data';


const Experiences = () => {
    const renderItems = (items: any) => {
        return items.map((item: any) => {
            return (
                <div className="row mb-5">
                    <div className="col-4">
                        <div className={classes.itemTitle}>{item.title}</div>
                        <div className={classes.itemDuration}>{item.duration}</div>
                    </div>
                    <div className="col-8">
                        <div className={classes.itemName}>{item.name}</div>
                        <div className={classes.itemDescription}>{item.description}</div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className={`${classes.container}`}>
            <div className="container">
                <div className={`row`}>
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                        <div className="gs-section">
                            <h2 className="gs-header">Experiences</h2>
                            <h5 className="gs-subHeader">I have a total of {new Date('jun-09-2014').gsToDateString(true)} of professional experience.</h5>
                        </div>
                        <div className={"container"}>
                            <div className="row">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">Educations</h4>
                                </div>
                            </div>
                            {renderItems(educations)}
                            <div className="border"></div>
                            <div className="gs-subSection">
                                <h4 className="gs-header">Careers</h4>
                            </div>
                            {renderItems(careers)}
                        </div>
                    </div>
                    <div className="col-lg-2" />
                </div>
            </div>
        </div>
    )
}

export default Experiences;