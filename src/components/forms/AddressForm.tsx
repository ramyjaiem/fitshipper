import { useContext, useState } from "react";
import Input from "../Input";
import { AiOutlineSave } from "react-icons/ai";
import InputArea from "../InputArea";
import { useForm } from "react-hook-form";
import Form from "../Form";
import { AddressesContext } from "../../contexts/addresses.context";
import { transformData } from "../../utils/tools";
import Button from "../Button";
import { AiOutlineEdit } from "react-icons/ai";
import * as yup from "yup";
import useYupValidationResolver from "../../hooks/useYupValidationResolver";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zip: yup.string().required("Required"),
});

const AddressForm = () => {
  const [switchForm, setSwitchForm] = useState(true);

  const { saveAddress, updateAdrress, activeAddress } =
    useContext(AddressesContext);

  const resolver = useYupValidationResolver(validationSchema);
  const { register } = useForm({
    resolver,
  });

  const onSubmit = (data: any) => {
    if (!switchForm) {
      let transformedData = transformData(data?.freeText);
      if (transformedData) {
        activeAddress
          ? updateAdrress({ ...transformedData, id: activeAddress.id })
          : saveAddress(transformedData);
      }
    } else {
      activeAddress ? updateAdrress(data) : saveAddress(data);
    }
  };
  return (
    <div className="inline-block align-bottom bg-white border-2 rounded-md border-gray-200 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-1/2">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left w-full">
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
                    className="flex-initial"
                    register={register}
                  />
                  <Input
                    label="Zip"
                    name="zip"
                    placeholder="Zip"
                    className="flex-initial w-64"
                    register={register}
                  />
                  <Button
                    label={activeAddress ? "Edit" : "Save"}
                    icon={
                      activeAddress ? (
                        <AiOutlineEdit size={24} />
                      ) : (
                        <AiOutlineSave size={24} />
                      )
                    }
                    className="w-auto my-5 float-right inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  />
                </Form>
              ) : (
                <Form onSubmit={onSubmit}>
                  <InputArea
                    register={register}
                    name="freeText"
                    placeholder="Address (free-form)"
                    extra="Copy & past the full address"
                  />

                  <Button
                    icon={
                      activeAddress ? (
                        <AiOutlineEdit size={24} />
                      ) : (
                        <AiOutlineSave size={24} />
                      )
                    }
                    label={activeAddress ? "Edit" : "Save"}
                    className="w-auto my-5 float-right inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  "
                  />
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
