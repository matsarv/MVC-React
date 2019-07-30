import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { actionCreators } from '../store/Car';

class CarList extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        if (this.props.forceReload) {
            this.fetchData();
        }
    }

    fetchData() {
        this.props.requestCars();
    }


    render() {

        let header = <div className="p-clearfix"
            style={{ lineHeight: '1.87em' }}>MVC React Cars </div>;

        let footer = <div className="p-clearfix" style={{ width: '100%' }}> </div>;


        return (
            <div>
               
                <DataTable value={this.props.cars} selectionMode="single"
                    header={header} footer={footer}
                    selection={this.state.selectedCar}
                    onSelectionChange={e => this.setState ({ selectedCar: e.value })} onRowSelect={this.onCarSelect}>
                    <Column field="carId" header="ID" />
                    <Column field="fullModelName" header="Full Model Name" />
                    <Column field="brand" header="Brand" />
                    <Column field="productionYear" header="Production Year" />
                </DataTable>

            </div>
        )
    }
}

// Make array available in props
function mapStateToProps(state) {
    return {
        cars: state.cars.cars,
        loading: state.cars.loading,
        errors: state.cars.errors,
        forceReload: state.cars.forceReload
    }
}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CarList);
