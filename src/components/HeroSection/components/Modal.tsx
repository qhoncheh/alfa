"use client";
import React, { useRef } from "react";

const Modal = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div>
            <button className="btn w-28 h-28 rounded-full text-white bg-[#7575FE] border-5 border-white" onClick={openModal}>
                جستجوی سریع
            </button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <div className="flex flex-row gap-3 ">
                        <button className="btn bg-[#7575FE] rounded-3xl text-white cursor-pointer">رزرو ملک</button>
                        <button className="btn bg-gray-300 rounded-3xl cursor-pointer">رهن و اجاره</button>
                        <button className="btn bg-gray-300 rounded-3xl cursor-pointer">خرید و فروش</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className="flex flex-row gap-3">
                            <button className="btn  rounded-3xl">بستن</button>
                            <button className="btn  rounded-3xl bg-[#7575FE] text-white">مشاهده همه</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
