import React, {Component} from "react";
import "./LanguageSwitcher.scss"
import ReactFlagsSelect from "react-flags-select";
//OR import sass module
import 'react-flags-select/scss/react-flags-select.scss';
const customControlStyles = () => ({
    height: 50,
});
export default class LanguageSwitcher extends React.Component{


    render() {
        return(
            <div className="row end-lg">
                <ReactFlagsSelect
                    defaultCountry="US"  countries={this.props.options}
                    customLabels={{"US": "English", "FR": "France","DE": "Deutsch","IT": "Italiano"}}
                    />

            </div>

            // <Dropdown>
            //     <Dropdown.Toggle className="lang-switcher">
            //         <Image className="flag" src={this.props.curLang.src}/>
            //         {this.props.curLang.name}
            //     </Dropdown.Toggle>
            //
            //     <Dropdown.Menu>
            //         {this.props.options.map((item) => {
            //             return(
            //                 <Dropdown.Item>
            //                     <Image className="flag" src={item.src}/>
            //                     {item.name}
            //                 </Dropdown.Item>
            //             )
            //         })}
            //     </Dropdown.Menu>
            // </Dropdown>
        )
    }
}