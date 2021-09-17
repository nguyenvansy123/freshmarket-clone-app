import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../actions/user.action';

/**
* @author
* @function AddressForm
**/

const AddressForm = (props) => {

    const dispatch = useDispatch()

    const { adr } = props

    const [name, setName] = useState(adr ? adr.name : "");
    const [mobileNumber, setMobileNumber] = useState(
        adr ? adr.mobileNumber : ""
    );
    const [pinCode, setPinCode] = useState(
        adr ? adr.pinCode : ""
    );
    const [locality, setLocality] = useState(
        adr ? adr.locality : ""
    );
    const [address, setAddress] = useState(
        adr ? adr.address : ""
    );
    const [cityDistrictTown, setCityDistrictTown] = useState(
        adr ? adr.cityDistrictTown : ""
    );
    const [state, setState] = useState(adr ? adr.state : "");
    const [landmark, setLandmark] = useState(
        adr ? adr.landmark : ""
    );
    const [alternatePhone, setAlternatePhone] = useState(
        adr ? adr.alternatePhone : ""
    );
    const [addressType, setAddressType] = useState(
        adr ? adr.addressType : ""
    );


    const user = useSelector((state) => state.user);
    const [submitFlag, setSubmitFlag] = useState(false);
    const [id, setId] = useState(adr ? adr._id : "");

    const onAddressSubmit = (e) => {
        e.preventDefault();
        const payload = {
            address: {
                name,
                mobileNumber,
                pinCode,
                locality,
                address,
                cityDistrictTown,
                state,
                landmark,
                alternatePhone,
                addressType,
            }
        }
       
        if (id) {
            payload.address._id = id;
        }

        dispatch(addAddress(payload))
        setSubmitFlag(true)
    }


    useEffect(() => {
        console.log("addressCount", user.address);
        if (submitFlag) {
          console.log("where are we", user);
          let _address = {};
          if (id) {
            _address = {
              _id: id,
              name,
              mobileNumber,
              pinCode,
              locality,
              address,
              cityDistrictTown,
              state,
              landmark,
              alternatePhone,
              addressType,
            };
          } else {
            _address = user.address.slice(user.address.length - 1)[0];
          }
    
          props.onSubmitForm(_address);
        }
      }, [user.address]);


    return (
        <form className="checkForm"  >

            <div className="form__group">
                <label className="" >Name *</label>
                <input id="name" type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >Mobile Number *</label>
                <input id="mobileNumber" type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >Pin Code *</label>
                <input id="pincode" type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >Locality *</label>
                <input id="locality" type="text"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                />
            </div>

            <div className="form__group form__group-full ">
                <label className="" >Address *</label>
                <input id="address" type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >City/District/Town *</label>
                <input id="cityDistrictTown" type="text"
                    value={cityDistrictTown}
                    onChange={(e) => setCityDistrictTown(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >State *</label>
                <input id="State" type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >Landmark *</label>
                <input id="landmark" type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                />
            </div>

            <div className="form__group">
                <label className="" >AlternatePhone *</label>
                <input id="alternatePhone" type="text"
                    value={alternatePhone}
                    onChange={(e) => setAlternatePhone(e.target.value)}
                />
            </div>

            <div className="form__group form__group-full">
                <label className="" >Address Type *</label>

                <div className="form__box">
                    <input name="addressTyper" id="home" type="radio" value="Home" onClick={() => setAddressType("home")} />
                    <label>Home </label>
                </div>
                <div className="form__box">
                    <input name="addressTyper" id="work" type="radio" value="Work" onClick={() => setAddressType("work")} />
                    <label>Work </label>
                </div>

            </div>




            <button className="btn-s" onClick={(e) => onAddressSubmit(e)}>SAVE AND DELIVERY HERE</button>
        </form>
    )

}

export default AddressForm