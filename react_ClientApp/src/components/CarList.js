import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import { actionCreators } from '../store/Car';



class CarList extends Component {

    //https://www.primefaces.org/primereact/#/
    //https://www.primefaces.org/primereact/#/icons/

    //https://bit.dev/primefaces/primereact

    constructor() {
        super();
        this.state = {};
        this.onCarSelect = this.onCarSelect.bind(this);
        this.dialogHide = this.dialogHide.bind(this);
        this.addNew = this.addNew.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            brandSelectEnumItems: [
                { label: 'VOLVO', value: 'VOLVO' },
                { label: 'SAAB', value: 'SAAB' },
                { label: 'BMV', value: 'BMV' },
                { label: 'FIAT', value: 'FIAT' },
                { label: 'RENAULT', value: 'RENAULT' }
            ],
            brand: ''
        }

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

    updateProperty(property, value) {
        let car = this.state.car;
        car[property] = value;
        this.setState({ car: car });
    }

    onCarSelect(e) {
        this.newCar = false;
        this.setState({
            displayDialog: true,
            car: Object.assign({}, e.data)
        });
    }

    dialogHide() {
        this.setState({ displayDialog: false });
    }

    addNew() {
        this.newCar = true;
        this.setState({
            car: { fullModelName: 'X99', brand: 'VOLVO', productionYear: '2119', color: 'Svart', fuel: 'Skräp', gearBox: 'Brain' },
            displayDialog: true
        });
    }

    save() {
        // https://www.primefaces.org/primereact/#/growl
        if (this.state.car.fullModelName === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Modellnamn måste fyllas i"
            });
        }
        else if (this.state.car.brand === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Bilmärke måste fyllas i"
            });
        }
        else if (this.state.car.productionYear === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Produktionsår måste fyllas i"
            });
        }
        else if (this.state.car.color === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Färg måste fyllas i"
            });
        }
        else if (this.state.car.fuel === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Drivmedel måste fyllas i"
            });
        }
        else if (this.state.car.gearBox === "") {
            this.growl.show({
                severity: 'error',
                summary: 'Inmatningsfel',
                detail: "Växellåda måste fyllas i"
            });
        }
        else {
            this.props.saveCar(this.state.car);
            this.dialogHide();
            // https://www.primefaces.org/primereact/#/growl
            this.growl.show({
                severity: 'success',
                detail: this.newCar ? "Bilden sparad" : "Bilden uppdaterad"
            });
        }
    }

    delete() {
        this.props.deleteCar(this.state.car.carId);
        this.dialogHide();
        this.growl.show({
            severity: 'error',
            detail: "Bilen raderad"
        });
    }

    render() {

        let header = <div className="p-clearfix" style={{ lineHeight: '2.50em' }}>Lista av bilar till försäljning </div>;

        let footer = <div className="p-clearfix" style={{ width: '100%' }}>
            <Button style={{ float: 'left' }} label="Lägg till"
                icon="pi pi-plus-circle" onClick={this.addNew} />
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Radera" disabled={this.newCar ? true : false}
                icon="pi pi-minus-circle" onClick={this.delete} />
            <Button label={this.newCar ? "Spara" : "Uppdatera"} icon="pi pi-check-circle"
                onClick={this.save} tooltip="OBS!<br>Alla fälten ovan<br> måste vara ifyllda" tooltipOptions={{ position: 'left' }} />
            <Button label="Stäng" icon="pi pi-times-circle" onClick={this.dialogHide} />
        </div>;

        return (
            <div>
                <Growl ref={(el) => this.growl = el} position="topleft" />
                <DataTable value={this.props.cars} selectionMode="single"
                    sortMode="multiple"
                    paginator={true} rows={10}
                    header={header} footer={footer}
                    selection={this.state.selectedCar}
                    onSelectionChange={e => this.setState({ selectedCar: e.value })} onRowSelect={this.onCarSelect}>
                    <Column field="fullModelName" header="Modell" sortable={true} filter={true} />
                    <Column field="brand" header="Märke" sortable={true} filter={true} />
                    <Column field="productionYear" header="År" sortable={true} filter={true} />
                    <Column field="color" header="Färg" sortable={true} filter={true} />
                    {/* <Column field="fuel" header="Drivmedel" sortable={true} filter={true} />
                    <Column field="gearBox" header="Växellåda" sortable={true} filter={true} /> */}
                </DataTable>
                <Dialog visible={this.state.displayDialog} style={{ 'width': '400px' }}
                    header="Mer info om bilen" modal={true} closable={true} footer={dialogFooter}
                    onHide={() => this.setState({ displayDialog: false })}>
                    {
                        this.state.car &&

                        <div className="p-grid p-fluid">

                            <div><label htmlFor="fullModelName">Modell</label></div>
                            <div>
                                <InputText id="fullModelName" onChange={(e) => { this.updateProperty('fullModelName', e.target.value) }}
                                    value={this.state.car.fullModelName} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="brand">Bilmärke</label></div>
                            <div>
                                <Dropdown
                                    style={{ width: 150 }}
                                    value={this.state.car.brand}
                                    options={this.state.brandSelectEnumItems}
                                    onChange={e => {
                                        this.updateProperty('brand', e.target.value);
                                    }}
                                    placeholder='Välj bilmärke'
                                />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="productionYear">Tillverkningsår</label></div>
                            <div>
                                <InputMask id="productionYear" mask='9999' placeholder='0000' onChange={(e) => { this.updateProperty('productionYear', e.target.value) }}
                                    value={this.state.car.productionYear} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="color">Färg</label></div>
                            <div>
                                <InputText id="color" onChange={(e) => { this.updateProperty('color', e.target.value) }}
                                    value={this.state.car.color} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="fuel">Drivmedel</label></div>
                            <div>
                                <InputText id="fuel" onChange={(e) => { this.updateProperty('fuel', e.target.value) }}
                                    value={this.state.car.fuel} />
                            </div>

                            <div style={{ paddingTop: '10px' }}>
                                <label htmlFor="gearBox">Växellåda</label></div>
                            <div>
                                <InputText id="gearBox" onChange={(e) => { this.updateProperty('gearBox', e.target.value) }}
                                    value={this.state.car.gearBox} />
                            </div>


                        </div>
                    }
                </Dialog>
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
