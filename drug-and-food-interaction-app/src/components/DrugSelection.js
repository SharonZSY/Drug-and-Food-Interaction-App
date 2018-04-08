import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Row, Col  } from 'reactstrap';
import '../css/DrugSelection.scss';
export default class DrugSelection extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { drugNames, drugSelectionOnClick } = this.props;
        const drugList = drugNames.map(function (drugNames) {
            return <DropdownItem    onClick = {drugSelectionOnClick}>{drugNames}</DropdownItem>
        });

        return (
            <div>
                <Row>
                    <Col>
                        <Badge color="success">Current Prescription {drugList.length}</Badge>
                    </Col>
                    <Col>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Drug List
                            </DropdownToggle>
                            <DropdownMenu>
                          {drugList}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}