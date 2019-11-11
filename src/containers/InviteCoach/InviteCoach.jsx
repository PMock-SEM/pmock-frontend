import React, {Component} from "react";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import { listAllCoach } from '../../actions/coachListAction';

class InviteCoach extends Component {
    componentWillUnmount() {
        this.props.listAllCoach();

    }


    render(){
        return(
           

        )
    }
}