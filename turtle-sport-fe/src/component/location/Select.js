import React, { memo } from 'react'

const Select = ({ label, options, value, setValue, type, reset, name }) => {

    return (
        <>
        <div className='form-floating mb-3'>
            <select
                value={reset ? '' : value}
                onChange={(e) => !name ? setValue(e.target.value) : setValue(prev => ({ ...prev, [name]: e.target.value }))}
                class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
            >
                <option value="">{`--Chọn ${label}--`}</option>
                {options?.map(item => {
                    return (
                        <option
                            key={type === 'province' ? item?.province_id : type === 'district' ? item?.district_id : item?.code}
                            value={type === 'province' ? item?.province_id : type === 'district' ? item?.district_id : item?.code}
                        >
                            {type === 'province' ? item?.province_name : type === 'district' ? item?.district_name : item?.value}
                        </option>
                    )
                })}
            </select>
            <label for="floatingSelect" className="text-primary" htmlFor="select-address">{label}</label>
        </div>
        </>
    )
}

export default Select;