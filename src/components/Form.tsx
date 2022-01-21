import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AddressesContext } from "../contexts/addresses.context";
import { getFreeText } from "../utils/tools";

export default function Form({ defaultValues, children, onSubmit }: any) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const { activeAddress } = useContext(AddressesContext);
  useEffect(() => {
    // reset form with user data
    if (activeAddress) {
      methods.reset({ ...activeAddress, freeText: getFreeText(activeAddress) });
    }
    return () => {
      methods.reset();
    };
  }, [activeAddress]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
