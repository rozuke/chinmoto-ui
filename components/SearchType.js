"use client";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { model } from "@/constants";

const SearchType = ({ type, setType }) => {
  const [query, setQuery] = useState("");

  const filterType =
    query === ""
      ? model
      : model.filter((item) =>
          item
            .toLowerCase()
            .replace(/\\s+/g, "")
            .includes(query.toLowerCase().replace(/\\s+/g, ""))
        );
  return (
    <div className="search-type">
      <Combobox value={type} onChange={setType}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/moto-logo.svg"
              height={20}
              width={20}
              className="ml-4"
              alt="Moto logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-type__input"
            placeholder="Model"
            displayValue={type}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterType.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-type__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchType;
