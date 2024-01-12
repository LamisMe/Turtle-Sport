import React from 'react';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function ModalLogout() {
    const navigate = useNavigate();
    const logOutUser = async () => {
        await localStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <>
            <div className="modal  fade" id="logout" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-light border-1">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="exampleModalLabel">Rời khỏi trang web ?</h5>
                           
                        </div>
                        <div className="modal-body">
                            <p className='text-dark'>Bạn có chắc chắn muốn đăng xuất không ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary border-1 rounded-1"  data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-outline-primary  border-1 rounded-1" onClick={logOutUser}>Rời</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalLogout;