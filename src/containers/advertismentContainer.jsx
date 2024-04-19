import { connect } from 'react-redux';
import React, { useEffect, Suspense } from 'react'; 
import AdvertisementList from '../components/advertisementList/advertisementList';
import AddAdvertisementForm from '../components/addAdvertisementForm/addAdvertisementForm';
import { addAdvertisment, deleteAdvertisment, updateAdvertisment, loadAdvertisment } from '../actions/advertismentActions';


const mapStateToProps = (state) => ({
    advertisments: state.advertisments
});


const AdvertisementListLazy = React.lazy(() => import('../components/advertisementList/advertisementList'));
const AddAdvertisementFormLazy = React.lazy(() => import('../components/addAdvertisementForm/addAdvertisementForm'));


const mapDispatchToProps = (dispatch) => ({
    onAddAdvertisment: (advertisment) => dispatch(addAdvertisment(advertisment)),
    onDeleteAdvertisment: (id) => dispatch(deleteAdvertisment(id)),
    onUpdateAdvertisment: (id, advertisment) => dispatch(updateAdvertisment(id, advertisment)),
    onLoadAdvertisment: (advertisments) => dispatch(loadAdvertisment(advertisments))
});

const AdvertismentContainer = ({ advertisments, onAddAdvertisment, onDeleteAdvertisment, onUpdateAdvertisment, onLoadAdvertisment }) => {
    useEffect(() => {
        const advertismentFromLocalStorage = JSON.parse(localStorage.getItem('advertisments')) || [];
        onLoadAdvertisment(advertismentFromLocalStorage);
    }, []);

    // const expensesArray = Array.isArray(expenses) ? expenses : [];

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AddAdvertisementFormLazy onAddAdvertisment={onAddAdvertisment} />
                <AdvertisementListLazy advertisments={advertisments} onDeleteAdvertisment={onDeleteAdvertisment} onUpdateAdvertisment={onUpdateAdvertisment} /> 
            </Suspense>
        </div>
    );
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvertismentContainer);
