import classes from './abilities.module.scss';
import { languages, skills, tools } from './data';


const Abilities = () => {
    const renderStars = (filledStars: any) => {
        const result: any = [];
        for (let i = 0; i < 5; i++) {
            result.push(<span className={`${i < filledStars ? classes.filledStar : ''} ${classes.star}`}>★ </span>);
        }
        return result;
    }
    const renderItems = (items: any) => {
        return items.map((item: any) => {
            return (
                <div className="col-12 col-md-6 d-flex justify-content-between">
                    <div className={classes.itemName}>{item.name}</div>
                    <div className={classes.starsContainer}>{renderStars(item.stars)}</div>
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
                            <h2 className="gs-header">Abilities</h2>
                            <h5 className="gs-subHeader">Below are the skills and texhnologies I learnt over the years.</h5>
                        </div>
                        <div className={"container"}>
                            <div className="row">
                                <div className="gs-subSection">
                                    <h4 className="gs-header">Skills</h4>
                                </div>
                            </div>
                            <div className="row mb-3">
                                {renderItems(skills)}
                                <div className="text-center m-auto mt-4">
                                    <div>This project is built on React JS</div>
                                    <a className={classes.linkButton} href="https://github.com/GopinathSurendran/gopinathsurendran.github.io">See project on Github</a>
                                </div>
                            </div>
                            <div className="border"></div>
                            <div className="gs-subSection">
                                <h4 className="gs-header">Languages</h4>
                            </div>
                            <div className="row mb-3">
                                {renderItems(languages)}
                            </div>
                            <div className="border"></div>
                            <div className="gs-subSection">
                                <h4 className="gs-header">Tools</h4>
                            </div>
                            <div className="row mb-3">
                                {renderItems(tools)}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2" />
                </div>
            </div>
        </div>
    )
}

export default Abilities;