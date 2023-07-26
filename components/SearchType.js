"use client";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { types } from "@/constants";

const SearchType = ({ type, setType }) => {
  const [query, setQuery] = useState("");

  const filterType =
    query === ""
      ? types
      : types.filter((item) =>
          item
            .toLowerCase()
            .replace(/\\s+/g, "")
            .includes(query.toLowerCase().replace(/\\s+/g, ""))
        );
  return (
    <div className="search-type">
      <Combobox>
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
            placeholder="Job"
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
                  {item}
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
