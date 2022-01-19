import React, { MouseEventHandler, useContext, useState } from "react";
import Input from "./Input";
import { AiOutlineClose } from "react-icons/ai";
import InputArea from "./InputArea";
import { useForm } from "react-hook-form";
import Form from "./Form";
import Modal from "react-modal";
import { AddressesContext } from "../contexts/addresses.context";
import { transformData } from "../utils/tools";

interface Props {
  closeModal: MouseEventHandler;
  modalIsOpen: boolean;
}

const ModalContainer = ({ closeModal, modalIsOpen }: Props) => {
  const [switchForm, setSwitchForm] = useState(true);

  const { saveAddress, updateAdrress, activeAddress } =
    useContext(AddressesContext);
  const { register, reset } = useForm({ defaultValues: { name: "anything" } });

  const onSubmit = (data: any) => {
    if (!switchForm) {
      let transformedData = transformData(data?.freeText);
      if (transformedData) {
        activeAddress
          ? updateAdrress({ ...transformedData, id: activeAddress.id }).then(
              closeModal
            )
          : saveAddress(transformedData).then(closeModal);
      }
    } else {
      activeAddress
        ? updateAdrress(data).then(closeModal)
        : saveAddress(data).then(closeModal);
    }
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="w-32"
      contentLabel="Example Modal"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-gray-50  w-full p-4 border-2 flex justify-between">
              <h3
                className="text-lg leading-6 font-medium text-gray-500 "
                id="modal-title"
              >
                To Address
              </h3>
              <AiOutlineClose className="cursor-pointer" onClick={closeModal} />
            </div>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="space-y-4 w-full">
                    <div
                      onClick={() => setSwitchForm((prev) => !prev)}
                      className="cursor-pointer float-right font-semibold text-blue-600 mb-4"
                    >
                      Switch to {switchForm ? "Freeform" : "Fields"}
                    </div>
                    {switchForm ? (
                      <Form onSubmit={onSubmit}>
                        <Input
                          label="Name"
                          name="name"
                          placeholder="Name"
                          register={register}
                        />
                        <Input
                          label="Address"
                          name="address1"
                          placeholder="Address"
                          register={register}
                        />
                        <Input
                          label="Address 2"
                          name="address2"
                          placeholder="Address 2"
                          register={register}
                        />
                        <Input
                          label="City"
                          name="city"
                          placeholder="City"
                          register={register}
                        />
                        <Input
                          label="State"
                          name="state"
                          placeholder="State"
                          register={register}
                        />
                        <Input
                          label="Zip"
                          name="zip"
                          placeholder="Zip"
                          register={register}
                        />

                        <div className="py-3 sm:flex sm:flex-row-reverse mt-10">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            {activeAddress ? "Edit" : "Save"}
                          </button>
                          <button
                            type="button"
                            onClick={closeModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    ) : (
                      <Form onSubmit={onSubmit}>
                        <InputArea
                          register={register}
                          name="freeText"
                          placeholder="Address (free-form)"
                          extra="Copy & past the full address"
                        />

                        <div className="py-3 sm:flex sm:flex-row-reverse mt-10">
                          <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            {activeAddress ? "Edit" : "Save"}
                          </button>
                          <button
                            type="button"
                            onClick={closeModal}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </Form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
