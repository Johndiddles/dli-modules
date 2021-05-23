import excelToJson from 'convert-excel-to-json';
import React, {Component} from 'react';

import './modules-styles.scss';





class ModulesPreview extends Component {
    constructor(){
        super();

        this.state = {
            modules: []
        }

        
    }

    componentDidMount(){
        fetch('data.json')
        .then(response => response.json())
        .then(module => this.setState({modules: module}))
    } 

    render(){
        const {modules} = this.state;
        return (
            <div className="modules">
                {
                    modules.map(module => (
                        
                        <div className="module-cards" key={module.id}>
                            <div>
                                <img src={`https://robohash.org/${module.id}?set=set2`} alt="avatar" />
                            </div>
                            <h3>{module.course_code}</h3>
                            <h5>{module.name}</h5>
                            <h5>level: {module.level}</h5>
                            <a href={module.url}>Download Module</a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ModulesPreview;