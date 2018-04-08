import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../css/HomeContainer.scss';

export default class HomeContainer extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            drugNames:['Zoloft', 'Adderall','Alprazolam','Cymbalta','Metoprolol','Lexapro','Viagra','Omeprazole'],
            foodNames:[],
            currentDrugName:[]
        };
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        this.drugSelectionOnClick = this.drugSelectionOnClick.bind(this);
    };

    handleButtonOnClick() {
        this.setState({});
        const randumNum = Math.floor(Math.random()*9);
        switch(randumNum) {
            case 1:
                this.state.foodNames = ['Meat', 'Seafood','Eggs','Nuts', 'Dairy'];
                break;
            case 2:
                this.state.foodNames =  ['Meat','Eggs','Nuts', 'Dairy'];
                break;
            case 3:
                this.state.foodNames = ['Meat'];
                break;
            case 4:
                this.state.foodNames = ['Meat', 'Seafood','Eggs', 'Dairy'];
                break;
            case 5:
                this.state.foodNames = ['Meat', 'Seafood','Eggs','Nuts', 'Dairy'];
                break;
            case 6:
                this.state.foodNames = ['Meat', 'Dairy'];
                break;
            case 7:
                this.state.foodNames = ['Meat', 'Seafood','Eggs','Nuts', 'Dairy'];
                break;
            case 8:
                this.state.foodNames = ['Meat', 'Seafood'];
                break;
            default:
                this.state.foodNames = ['Meat', 'Seafood','Nuts', 'Dairy'];
        }
        console.log("Check Indicator Button Clicked");

    }

    drugSelectionOnClick(){
        this.setState({});
        const randumNum = Math.floor(Math.random()*8);
        const drugNames=['Zoloft 30mg', 'Adderall 60mg','Alprazolam 30mg','Cymbalta 5mg','Metoprolol 90mg','Lexapro 10mg','Viagra 5mg','Omeprazole 10mg'];
        this.state.currentDrugName = drugNames [randumNum];
        this.state.foodNames = [];

        console.log("Drug Name Selected");
    }

        render( ) {
           const currentDrugName = "Zoloft 30mg";
           const {  } = this.props;
            return (
                <div className="div-home-container">

                    <Breadcrumb>
                        <BreadcrumbItem >Drug & Food Interaction App</BreadcrumbItem>
                    </Breadcrumb>

                        <DrugSelection
                            drugNames = { this.state.drugNames }
                            drugSelectionOnClick = {this.drugSelectionOnClick}
                        />
                        <DrugDisplay
                            currentDrugName = {this.state.currentDrugName}
                            foodNames = {this.state.foodNames}
                            handleButtonOnClick = {this.handleButtonOnClick}
                        />
                </div>
            );
        }
    };


// HomeContainer.PropTypes = {
//    xx: propTypes.String,
// };


