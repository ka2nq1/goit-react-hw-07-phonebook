import React from 'react';
import { connect } from "react-redux";
import { handleFilter } from "../../redux/actions/contactAction";
import { filterSelector } from "../../redux/contactsSelectors";
import styles from './Filter.module.css';

const Filter = ({filter, handleFilter}) => {
    return (
        <>
            <label className={styles.find}>Find contacts by name</label>
            <input className={styles.input} type='text' placeholder="name" value={filter} onChange={handleFilter}/>
        </>    
    )
}

const mapStateToProps = (state) => ({
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  handleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);