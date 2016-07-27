import React, { PropTypes } from "react"
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";
import Paper from "material-ui/Paper";

const ItemsSelect = ({ values, currentValue, onChange }) => (
    <Paper>
        <SelectField
                autoWidth={true}
                fullWidth={true}
                labelStyle={{padding: "0px 30px 0px 15px"}}
                value={currentValue}
                onChange={onChange}>
            {values.map((value, index) => {
                return <MenuItem value={value} primaryText={value} key={index} />
            })}
        </SelectField>
    </Paper>
);

ItemsSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired,
    currentValue: PropTypes.string.isRequired
};

export default ItemsSelect